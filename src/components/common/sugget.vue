<template>
  <div id="sugget">
      <div class="tabnav clear" :suggestlist='suggestlist'  >
           <mu-tabs :value="activeTab" @change="handleTabChange">
                <mu-tab value="tab1" title="推荐商品"/>
                <mu-tab value="tab2" title="肉禽鸡蛋"/>
                <mu-tab value="tab3"  title="美容护肤"/>
                <mu-tab value="tab4" title="智能居家"/>
            </mu-tabs>

            <div v-if="activeTab === 'tab1'" class="detailsbox" >
               <ul class="ul11">
                   <li v-for="item in suggestlist" :key='item.id'>
                       <div class="imgbox">
                            <img :src="item.src">
                            <div></div>
                       </div>
                       <div>
                            <span>{{item.title}}&nbsp;&nbsp;{{item.title2}}</span><br>
                            <span class="font10 bgred">￥<span class="font16">{{item.money}}</span></span>&nbsp;
                            <span class="bggray">已售：<span class="bgred">{{item.number}}</span>件</span>
                        </div>
                   </li>
               </ul>
            </div>
           
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            activeTab:'tab1'
        }
    },
    methods:{
       handleTabChange (val) {
             this.activeTab = val
         }
  },
  props:['suggestlist']
   
}
</script>
<style scoped>
#sugget{
    width:100%;
    clear:both;
    margin-top: .15rem;
    font-size: .12rem;
}
.tabnav{
    width:100%;
}
.tabnav .detailsbox .ul11 {
    width:100%;  
    margin-top: .1rem;
}
.tabnav .detailsbox .ul11 li{
    float: left;
    width:48%;
    height: 2.45rem;
    margin-left: 1%;
}
.tabnav .detailsbox .ul11 li img{
    width:100%;
}
</style>
