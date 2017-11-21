<template>
  <div id="foot">
    <mu-paper style="position:fixed; bottom:0;width:100%; z-index:1000;">
        <mu-bottom-nav :value="bottomNav" @change="handleChange" style="height:0.6rem">
          <mu-bottom-nav-item value="movies" to="/home/movies"  title="首页"  ><i class="iconfont icon-shouye mu-bottom-item-text"></i></mu-bottom-nav-item>
          <mu-bottom-nav-item value="community" to="/homeCommunity/community" title="社区" ><i class="iconfont icon-1 mu-bottom-item-text"></i></mu-bottom-nav-item> 
          <mu-bottom-nav-item value="home3" to='/live/home3' ><i class="iconfont icon-anniu" ></i></mu-bottom-nav-item>
          <mu-bottom-nav-item value="pictures" to='/circle/pictures' title="圈子"  > <i class="iconfont icon-quanzi1 mu-bottom-item-text"></i> </mu-bottom-nav-item>
          <mu-bottom-nav-item value="me" to='/mine/me'  title="我" ><i class="iconfont icon-wo mu-bottom-item-text"></i></mu-bottom-nav-item>
        </mu-bottom-nav>
  </mu-paper>

  
  </div>
</template>
<script>
  export default {
  data () {
    return {
        bottomNav: this.$route.params.num
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}

</script>
<style scoped>
 #foot{
   position: fixed;
   bottom:0;
   width:100%;
   height: .6rem;
 }
#foot .icon-anniu{
  display:inline-block;
  margin-top: -0.3rem;
  font-size: .6rem;
  position: relative;
  border-radius: .5rem;
  color:#fd5a34;
}
.iconfont{
  font-size:.25rem; 
}
</style>
