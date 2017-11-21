<template>
  <div id="home">
     <transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
    <foots></foots>
  </div>
</template>
<script>
import foots from '@/components/common/footnav'
import homeview from '@/view/homeview'
export default {
    data(){
       return{
            headtitle:'首页',
       }
    },
    methods:{
        father(value){
            alert(value)
        }
    },
  components:{ homeview, foots }
}
</script>
<style scoped>
    #home{
        width:100%;
        height: 100%;
        position:relative;
        margin-bottom:.6rem;
    }
</style>
