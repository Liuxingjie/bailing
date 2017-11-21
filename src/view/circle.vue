<template>
  <div id="circle">
    <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
    <swipe :list='list'></swipe>
    <div class="hotCommunity">
          <h3>社区热门</h3>
          <div class="ssbox">
              <span>
                  <img src="../../static/images/details_13.png" alt="图像" >
                  <span class="font12 padding10 lineheight50">Mr刘</span>
              </span>
              <span class="fr">
                <a href="#"><span class="font12 lineheight50">关注</span></a>
              </span>
          </div>
          <p>
            来过云南的朋友都知道云南是个美丽的人间天堂，来过云南的朋友都知道云南是个美丽的人间天堂，
            来过云南的朋友都知道云南是个美丽的人间天堂，
            来过云南的朋友都知道云南是个美丽的人间天堂，
            来过云南的朋友都知道云南是个美丽的人间天堂，
          </p>
          <div class="imgbox">
              <ul>
                <li v-for="item in imgbox" :key='item.id'><img :src="item.src" ></li>
              </ul>
              <span class="clear flexbetween">
                <span>4小时前&nbsp;&nbsp; <span>{{msgtitle}}</span></span>
                <span>146赞<span>评论88</span></span>
              </span>
          </div>


          <div class="classify" v-for="item  in classify" :key='item.id'>
            <router-link :to="item.link">
                  <img :src="item.src" alt="头像" class="fl">
                  <div class="fl">
                    <h4>{{item.title}}</h4>
                    <p>{{item.details}}</p>
                  </div>
             </router-link>
          </div>
    </div>
  </div>
</template>
<script>
import heads from '@/components/common/head'
import swipe from '@/components/common/swipe'
export default {
  data(){
    return {
      msgtitle:'碧海名园',
      classes:'opacity',
      dis:'displaynone',
      list:[
                {src:'../static/images/quanzi_02.png'},
                {src:'../static/images/quanzi_02.png'},
            ],
      imgbox:[
        { src:'../static/images/quanzi_05.png' },
        { src:'../static/images/quanzi_07.png' },
        { src:'../static/images/quanzi_09.png' },
      ],
      classify:[
        {src:'../static/images/quanzi_05.png',title:'社交',details:'千金易得，知己难求，人海茫茫，知音可贵，在这里寻找专属知音',link:'/home'},
        {src:'../static/images/quanzi_07.png',title:'运动',details:'让运动演绎出生命的色彩',link:'/home'},
        {src:'../static/images/quanzi_09.png',title:'旅游',details:'世界很大我想出去走走',link:'/home'},
        {src:'../static/images/quanzi_05.png',title:'影视',details:'在讨论的过程中，或许会发现一些你的过错',link:'/home'},
        {src:'../static/images/quanzi_09.png',title:'生活',details:'每时每刻都是最美好的体验',link:'/home'},
      ]
          
    }
  },
  components:{ heads,swipe }
}
</script>
<style scoped>
@import url(../../static/css/circle.css);
</style>
