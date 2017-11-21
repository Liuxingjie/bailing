<template>

   <div id="liveinterface">
       <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
       <div class="livebox">直播已结束</div>
   </div>
</template>
<script>
import heads from '@/components/common/head'
export default {
  data(){
      return{
          msgtitle:'直播',
          link:'/live/home3',
          classes:'bgPrimary'
      }
  },
  components:{ heads}
}
</script>
<style scoped>
#liveinterface{
    width:100%;
}
#liveinterface .livebox{
    width:2rem;
    height: 2rem;
    margin:50% auto;
    text-align:center;
    margin-top: .45rem;
}
</style>
