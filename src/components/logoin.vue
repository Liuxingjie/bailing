<template>
  <div id="logoin">
      <div class='headbox'>
          <router-link to='/logoin1'><button class="nooutline " > 登录</button></router-link><br>
          <button class=" nooutline ">注册</button><br>
          <a href="#/logoin1" >游客试用</a>
      </div>
      <div class="footbox">
          <a href="">其他登录方式</a><br>
          <button class="nooutline noborder nobackground">微信</button>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#logoin{
    width:100%;
    background:url(../../static/images/logoin.png) no-repeat;
    background-size: cover;
    font-size: .12rem;
    padding-top: 2.93rem;
}


 /* 头部部分 */
#logoin .headbox {
    width:100%;
    height: 1.6rem;
    
    text-align: center;
}
#logoin .headbox a{
   border-bottom:1px  dashed black;
}
#logoin .headbox button{
    width:2.75rem;
    height: .41rem;
    margin-bottom: .26rem;
    font-size: .16rem;
    background:white;
    border:1px solid #fd5a34;
}
#logoin .headbox button:hover{
    box-shadow: 10px 10px 5px #888888;
}
/* 底部部分 */
#logoin .footbox{
    width:100%;
    height: 1.23rem;
    margin-top: .9rem;
    position: relative;
    text-align:center;
}
#logoin .footbox a{
    width:100%;
    display:block;
    position: absolute;
    top: -.1rem;
    left: 0;
}
#logoin .footbox button{
    margin-top: .28rem;
}
</style>
