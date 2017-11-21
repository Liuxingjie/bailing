<template>
  <div id="bind">
      <heads :title='message' :classes='headclass' :link='link' :dis='display'></heads>
      <form action="#/home/movies">
        <div class="inputbox">
            地区 <input type="text" required placeholder="广东省深圳市南山区" v-model='text'><br>
            小区 <input type="text" required v-model='text1'><br>
            门牌 <input type="text" required v-model='text2'>
        </div>
        <button class="fr bgPrimary" type="submit" @click="$store.commit('bindmessage')">保存</button>
        </form>
  </div>
</template>
<script>
import heads from '@/components/common/head'
export default {
    data(){
        return{
            message:"绑定小区",
            headclass:'bgPrimary',
            link:'/home/movies',
            mes:'',
        }
    },
    methods:{
        diliver(){
         this.$emit('fafunc')
        }
    },
    computed:{
         text: {
            get () {
            return this.$store.state.homeMsg
            },
            set (val) {
            this.$store.commit('setTest', val)
            }
         },
         text1: {
            get () {
            return this.$store.state.homeMsg1
            },
            set (val) {
            this.$store.commit('setTest1', val)
            }
         },
         text2: {
            get () {
            return this.$store.state.homeMsg2
            },
            set (val) {
            this.$store.commit('setTest2', val)
            }
         }
    },
  components:{ heads }
}
</script>
<style scoped>
#bind .inputbox{
    width:100%;
    height: 1.2rem;
    margin-top: .48rem;
}
#bind form{
    padding:.2rem;
}
#bind .inputbox input{
    outline:none;
    border:none;
    margin-bottom:.3rem;
    width:80%;
}
#bind  button{
    width:1.22rem;
    height: .4rem;
    font-size: .16rem;
    outline: none;
    border:none;
    border-radius:.1rem;
    margin-top: .24rem;
}
</style>
