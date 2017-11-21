<template>
  <div id="bindcar">
      <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
      <form  action="#/carServer" name="carform">
          姓&nbsp;&nbsp;&nbsp;名:<input type="text" required><br>
          车牌号:<input type="text" required><br>
          行驶证:<input type="text" required> <br>
          <button title="submit" type="submit" @click="submit" >绑定</button>
      </form>
  </div>
</template>
<script>
import heads from '@/components/common/head'
export default {
  data(){
      return{
          msgtitle:'车主绑定',
          link:'/carServer'
      }
  },
  methods:{
      submit(){
         this.$emit('alertsubmit')
      }
  },
  components:{heads}
}
</script>
<style scoped>
#bindcar{
    width:100%;
}
#bindcar form{
    padding:.2rem;
    margin-top: .7rem;
}
#bindcar input,#bindcar button{
    width:70%;
    border:none;
    outline:none;
    padding:.05rem;
    margin-bottom: .2rem;
    border-bottom:1px solid gray;
}
#bindcar button[title='submit']{
    display: block;
    margin:1rem auto;
    background:#fe5932;
}
#bindcar input:focus{
    background:lightblue;
}
</style>
