<template>
  <div id="commonhead" :titles='title'  :class="classes"  > 
          <p class="font20">
            <span class="fl font30" :class="dis"><router-link :to="link" ><</router-link></span>
          {{ title }} 
         </p>
  </div>
</template>

// 引入用法：<heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
<script>

export default {
  props:['title','classes','link','dis']
}
</script>
<style scoped>
#commonhead{
  width:100%;
  height: .42rem;
  position: fixed;
  top: 0;
  background:#fff; 
  z-index:10;
}
p{
   text-align:center;
  line-height: .42rem;
   border-bottom:1px solid rgba(88, 88, 88, 0.3);
   padding-right: .3rem;
   padding-left: .1rem;
}

</style>
