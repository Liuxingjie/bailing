<template>
  <div class="bindmessage">
       <heads :title='message' :classes='headclass' :link='link' :dis='display'></heads>
       <div class='headbox'>
             <i class="iconfont icon-shouji1"></i> <input class="nooutline noborder " type="tel"  required placeholder="请输入手机号"><br>
            <i class="iconfont icon-lock"></i><input class=" nooutline noborder" type="password" required placeholder="设置登录密码,不少于6位"><router-link to="/home">忘记密码</router-link><br>
       </div>
        <div class="footbox">
             <button class="noborder nooutline" type="submit">下一步</button>
         </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.bindmessage{
  width:100%;
}
</style>
