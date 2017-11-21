<template>
  <div id="carserver">
      <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
      <nav>
           <ul>
                <router-link to='/carCost'><li> <img src="../../static/images/carmessage_03.png" /> 月卡缴费</li></router-link>
                <router-link to='/carServer'> <li><img src="../../static/images/carmessage_05.png" >查违章</li></router-link>
                 <li> <router-link  to='/carOrder'><img src="../../static/images/carmessage_15.png" >洗车</router-link></li>
                <router-link  to='/carServer'><li><img src="../../static/images/carmessage_09.png" >加油</li></router-link>
                <router-link  to='/carServer'><li><img src="../../static/images/carmessage_07.png" >汽车保养</li></router-link>
            </ul>
      </nav>
       <div class="rigiste clear">
           <span v-if="!this.$store.state.homeMesBox" class="bindafter">
                    <i class="iconfont icon-zuobiao"></i>{{this.$store.state.homeMsg}}
           </span>
           <div v-if="this.$store.state.homeMesBox" >
           <span>我的专属管家</span><a href="#/bind" class="bgprimary">>>>&nbsp;&nbsp;<div  @click="open" >开启智慧生活</div></a>
           </div>
        </div>
      <div>
          <p class="flexbetween">
             <span class="fontweight font14">
                 附近的停车场
             </span>
             <span>
                 <i class="iconfont icon-zuobiao"></i>新建县红谷滩新区
             </span>
          </p>
          <p class="flexbetween">
              最近{{$router.params}}
          </p>
          <p class="flexbetween" v-for="item in parklist" :key="item.id">
              <span>{{item.parkname}}</span><span><i class="iconfont icon-daohang"></i>&nbsp;{{item.distance}}m</span>
          </p>
      </div>
      <div class="btnBox">
          <button class="bgprimary">更多>>></button>
      </div>x
  </div>
</template>
<script>
import heads from '@/components/common/head'
export default {
  data(){
      return {
          msgtitle:'智能停车',
          link:'/home/movies',
          parklist:[
            { id:1,parkname:'海天小区停车场',distance:'75' },
            { id:2,parkname:'金色海岸停车场',distance:'200' },
            { id:3,parkname:'海天小区停车场',distance:'75' },
            { id:4,parkname:'金色海岸停车场',distance:'200' },   
        ]
      }
  },
  mounted(){
      this.$on('alertsubmit',function(){
          alert('nihao')
      })
  },
  components:{ heads }
}
</script>
<style scoped>
@import url(../../static/css/carServer.css);
#carserver nav ul li{
    height: 1.14rem;
}
#carserver nav ul{
    width:100%;
    height: 2.28rem;
    padding-top: .45rem;
}
#carserver nav ul li img{
    display: block;
    width:.66rem;
    height: .66rem;
    margin: auto auto;
}
</style>
