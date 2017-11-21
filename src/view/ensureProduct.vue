<template>
  <div id="ensuregoods">
      <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
      <div class="clearspace"></div>
      <forms></forms>
  </div>
</template>
<script>
import heads from '@/components/common/head'
import forms from '@/components/common/form'
export default {
    data(){
        return{
            msgtitle:'确认订单',
            link:'/communityProduct'
            }
    },
  components:{ heads,forms }
}
</script>
<style>
.clearspace{
    margin-top: .45rem;
}
</style>
