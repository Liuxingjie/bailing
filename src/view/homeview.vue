<template>
   <div id="homeview">
       <heads :title='message' :classes='headclass' :link='link' :dis='display'></heads>
        <nav>
            <ul>
                <!-- <router-link to='/carServer'><li><i class="iconfont icon-c"></i><br>车主服务</li></router-link>
                <router-link to='/home'> <li><i class="iconfont icon-iconfontshenghuo"></i><br>生活缴费</li></router-link>
                 <router-link  to='/groupbuy'><li> <i class="iconfont icon-1"></i><br>社区团购</li></router-link>
                <router-link  to='/home'><li><i class="iconfont icon-yuanjiaojuxing21"></i><br>房屋装修</li></router-link> -->

                <router-link to='/carServer'><li><img src="../../static/images/shouyeicon_03.png" ><br>车主服务</li></router-link>
                <router-link to='/home/movies'> <li><img src="../../static/images/shouyeicon_05.png" ><br>生活缴费</li></router-link>
                 <router-link  to='/groupbuy'><li><img src="../../static/images/shouyeicon_07.png" ><br>社区团购</li></router-link>
                <router-link  to='/home/movies'><li><img src="../../static/images/shouyeicon_09.png" ><br>房屋装修</li></router-link>
            </ul>
        </nav>
        
        <swipe :list='list'></swipe>

        <div class="rigiste">
           <span v-if="!this.$store.state.homeMesBox" class="bindafter">
                    <i class="iconfont icon-zuobiao"></i>{{this.$store.state.homeMsg}}
           </span>
          <div v-if="this.$store.state.homeMesBox"><span>我的专属管家</span><a  class="bgprimary">>>>&nbsp;&nbsp;<div  @click="$store.commit('open')" >开启智慧生活</div></a></div>
        </div>
        <div class="product">
            <h3 ><span class="bgprimary">|</span>私人定制您的产品 </h3>
            <div class="productlist">
                <div class="list_left">
                    <img src="">
                </div>
                <div class="list_right">
                    <ul class="ul1">
                        <li> <a href="#"><i class="iconfont icon-go"></i><br>车托帮</a> </li>
                       <li> <a href="#"><i class="iconfont icon-lvyouchuxing"></i><br>拎包游</a> </li>
                       <li> <a href="#"><i class="iconfont icon-fangyuanguanli"></i><br>房管所</a> </li>
                    </ul>
                    <ul>
                        <li> <a href="#"><i class="iconfont icon-jiankang"></i><br>优健康</a></li>
                        <li> <a href="#"><i class="iconfont icon-baobeileyuan"></i><br>宝贝园</a></li>
                        <li> <a href="#"><i class="iconfont icon-icon-test"></i><br>夕阳红</a></li>
                    </ul>
                </div>
            </div>
        </div>
       <div>
            <mu-dialog :open="dialog"  @close="$store.commit('close')"  >
                <p>您暂未绑定小区</p>
                <p>是否立即绑定小区开启智慧生活</p>
                <button><a @click="$store.commit('gobind')">立即绑定</a></button> <button @click="$store.commit('close')">暂不绑定</button>
            </mu-dialog>
       </div>
   </div>
</template>
<script>
import heads from "@/components/common/head"
import swipe from "@/components/common/swipe"
import {mapState } from 'vuex'
export default {
    data(){
        return{
            message:'首页',
            display:'displaynone',
            list:[
                {src:'../static/images/swipe_06.png'},
                {src:'../static/images/swipe_06.png'},
            ]
        }
    },
    methods:{
        open () {
        this.dialog = true
        },
        close () {
        this.dialog = false
        }
    },
    computed:{
        ...mapState([
            'dialog'
        ])
    },
  components:{ heads,swipe }
}
</script>
<style scoped>
@import url(../../static/css/homeview.css);
</style>
