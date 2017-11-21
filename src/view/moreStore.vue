<template>
  <div>
      <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>   
            <div class="detailsbox detailsbox1" >
                    <span class="fr padding10">100-500m</span>
                        <div v-for="item in nearbylist" :key='item.id' class="wholeBox clear">
                                <router-link :to="item.link">
                                        <img :src="item.src" alt="图片" class="bigimg">
                                        <div>
                                            <h3>{{item.title}}</h3>
                                            <p>{{item.details}}</p>
                                            <span class="smallimgbox">
                                            <img :src="item.src2" alt="头像" class="smallimg"><span class='padding10'>MrLIU</span>&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                            <span>{{item.distance}}m</span>
                                            </span>
                                        </div>
                            </router-link>
                        </div>
            </div>
  </div>
</template>
<script>
import heads from '@/components/common/head'
export default {
    data(){
        return{
             msgtitle:'附近小店',
             link:'/homeCommunity/community',
             nearbylist:[
              {
                src:'../static/images/details_13.png',
                link:'/communityProduct',
                src2:'../static/images/details_13.png',
                title:'农家直供放养也生猪，不吃饲料',
                details:'猪头猪脑猪尾巴，你爱吃哪就吃哪，好吃不上火猪头猪脑猪尾巴，你爱吃哪就吃哪，好吃不上火',
                number:'10.00',
                distance:'500'
              },
              {
                src:'../static/images/details_13.png',
                link:'/communityProduct2',
                src2:'../static/images/details_13.png',
                title:'农家直供放养也生猪，不吃饲料',
                details:'猪头猪脑猪尾巴，你爱吃哪就吃哪，好吃不上火猪头猪脑猪尾巴，你爱吃哪就吃哪，好吃不上火',
                number:'10.00',
                distance:'500'
              },
            ]
        }
    },
    components:{heads }
}
</script>
<style scoped>
 .wholeBox{
    width:100%;
    clear: both;
    padding:.1rem;
    overflow: hidden;
    margin-top: .1rem;
  }
 .wholeBox .smallimgbox {
    display: block;
    padding-top:.03rem;
  }
.wholeBox .bigimg{
    width:30%;
    float: left;
  }
.wholeBox .smallimg{
    width:10%;
  }
 .wholeBox  div{
  float: left;
  width:70%;
  padding-left:.1rem;
  }
 .iconfont{
    font-size: .34rem;
  }
.icon-techan{
    padding-left: .1rem;
  }
</style>
