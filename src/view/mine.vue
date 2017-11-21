<template>
  <div id="mine">
      <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
      <div class="myimg">
          <img src="../../static/images/touxiang.jpg">
          <h4>Mrliu </h4><span><i class="iconfont icon-zuobiao"></i>{{this.$store.state.homeMsg2}}</span>
      </div>
      <ul class="tabbox">
          <li v-for="item in minelist" :key='item.id' class="clear">
              <router-link :to='item.link'>
                    <span class="fl">{{item.title}}</span>
                    <span class="fr iconright "><i class="iconfont icon-anniu1"></i></span>
             </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
import heads from '@/components/common/head'

export default {
    data(){
        return{
            msgtitle:'我',
            dis:'displaynone',
            classes:'bgPrimary',
            minelist:[
                { title:'个人资料' ,link:'/myMessage'},
                { title:'我的钱包' , link:'/myWallet' },
                { title:'我的订单' ,link:'/myOrder'},
                { title:'我的小店' ,link:'/mine/me'},
                { title:'更换背景',link:'/selectbgColor'},
                { title:'联系客服' ,link:'/mine/me'},
                { title:'设置',link:'/mine/me' },
            ]   
        }
    },
    created(){
        var _this=this
        fetch('/api/comments', {})
        .then(response=> {
            console.log('ok',response)
             return response.json()
        // handle HTTP resp,onse
        }, function(error) {
            console.log('err',error)
        // handle network error
        }).then(data=>{
            console.log(data)
            })
    },
    components:{ heads }
}
</script>
<style scoped>
    #mine{
        width:100%;
        text-align:center;
        margin-bottom: 1rem;
        font-size: .13rem;
    }
    #mine .myimg{
        width:100%;
        height: 2rem;
        background:#ffecf5;
        position: relative;
        margin-top: .45rem;

    }
    #mine .myimg h4{
        padding:.1rem;
    }
   #mine .myimg img{
       width:1rem;
       height: 1rem;
       margin-top: .3rem;
   } 
   #mine .tabbox{
       text-align:left;
   }
   #mine .tabbox li{
    padding-left:.15rem;
   }
    #mine .tabbox li a{
        display: inline-block;
        width:100%;
        line-height: .4rem;
    }
   .iconfont{
       font-size:.16rem;
       padding-right:.1rem;
   }
</style>
