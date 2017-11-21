<template>
  <div id="homeCommunity">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="navbar1">   <!-- 一号菜单 -->
                <mu-tab value="tab1" title="集市好货"/>
                <mu-tab value="tab2" title="邻居好店"/>
       </mu-tabs>

        <div v-if="activeTab === 'tab1'" class="detailsbox detailsbox1" >  <!--  一号显示 -->
             <mu-tabs :value="activeTab1" @change="handleTabChange1">
                <mu-tab value="tab1" title="所有商品">  <i class="iconfont icon-suoyoushangpin"></i> </mu-tab>        <!-- 二号菜单 -->
                <mu-tab value="tab2" title="邻居特产"><i class="iconfont icon-techan"></i></mu-tab>
                <mu-tab value="tab3" title="服务"><i class="iconfont icon-fuwu"></i></mu-tab>
             </mu-tabs>
             <div v-if="activeTab1 === 'tab1'" class="detailsbox detailsbox2" >  <!--二号号显示-->
                 <div class="navbar3Box"> 
                    <mu-tabs :value="activeTab2" @change="handleTabChange2" class="navbar3">
                            <mu-tab value="tab1" title="所有商品"/>             <!-- 三号菜单 -->
                            <mu-tab value="tab2" title="瓜果蔬菜"/>
                            <mu-tab value="tab3" title="生猛海鲜"/>
                            <mu-tab value="tab4" title="肉禽蛋类"/>
                            <mu-tab value="tab5" title="零食烘培"/>
                            <mu-tab value="tab6" title="粮油米酒"/>
                            <mu-tab value="tab7" title="服务"/>
                    </mu-tabs>
                  </div>
                 <div v-if="activeTab2 === 'tab1'" class="detailsbox" >
                        <div v-for="item in productlists" :key='item.id' class="wholeBox">
                           <router-link :to="item.link">
                                  <img :src="item.src" alt="图片" class="bigimg">
                                  <div>
                                        <h3>{{item.title}}</h3>
                                        <p>{{item.details}}</p>
                                        <span class="smallimgbox">
                                          <img :src="item.src2" alt="头像" class="smallimg"><span>MrLIU</span>
                                          <span class="font12 bgred fr">￥<span class="font16">{{item.number}}</span></span>
                                        </span>
                                  </div>
                            </router-link>
                        </div>
                 </div> 
             </div>
        </div>

<!-- 邻居小店： -->
       <div v-if="activeTab === 'tab2'" class="detailsbox detailsbox1" >
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
            <div class="moreStore">
                  <router-link to="/moreStore">点击查看更多蔚蓝海湾小店<span class="bgprimary">>>></span></router-link>
            </div>
       </div>

  </div>
</template>
<script>


export default {
  data(){    
        return {
         
              activeTab:'tab1',
              activeTab1:'tab1',
              activeTab2:'tab1',
              productlists:[
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
                src:'../static/images/community1.jpg',
                link:'/communityProduct2',
                src2:'../static/images/details_13.png',
                title:'农家直供放养也生猪，不吃饲料',
                details:'猪头猪脑猪尾巴，你爱吃哪就吃哪，好吃不上火猪头猪脑猪尾巴，你爱吃哪就吃哪，好吃不上火',
                number:'10.00',
                distance:'500'
              },
              {
                src:'../static/images/community2.jpg',
                link:'/communityProduct3',
                src2:'../static/images/details_13.png',
                title:'农家直供放养也生猪，不吃饲料',
                details:'猪头猪脑猪尾巴，你爱吃哪就吃哪，好吃不上火猪头猪脑猪尾巴，你爱吃哪就吃哪，好吃不上火',
                number:'10.00',
                distance:'500'
              },
              {
                src:'../static/images/community3.jpg',
                link:'/communityProduct4',
                src2:'../static/images/details_13.png',
                title:'农家直供放养也生猪，不吃饲料',
                details:'猪头猪脑猪尾巴，你爱吃哪就吃哪，好吃不上火猪头猪脑猪尾巴，你爱吃哪就吃哪，好吃不上火',
                number:'10.00',
                distance:'500'
              },
            ],
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
    methods:{
       handleTabChange (val) {
             this.activeTab = val
         },
          handleTabChange1 (val) {
             this.activeTab1 = val
         },
          handleTabChange2 (val) {
             this.activeTab2 = val
         }
         
        }
}
</script>
<style scoped>
@import url(../../static/css/homeCommunity.css);
.moreStore{
  font-size: .14rem;
  margin-top: .6rem;
  text-align:center;
}
</style>
