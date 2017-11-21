<template>
  <div id="evaluate">
      <div class=" head ">
        <p class="flexbetween">
          <span class="font12">商品评价</span> <span class="font12" @click="evaluateList_show=true">查看全部<span class="bgprimary  font18">></span></span>
        </p>

        <ul  class="picbox">
            <router-link to='/evaluateview'>
            <li v-for="item in evaluatelist" class="padding10" :key='item.id'> 
                <img :src="item.src" alt="头像" class="fl headpic">
                <div class="fl rightBox">
                    <p class="fr">
                      <span>SEVEN</span><span>2017-10-5</span>
                    </p>
                    <p class="clear  ssbox" >
                      品牌概况：Giordano 佐丹奴于1988年正式在台湾成立子公司
                      品牌概况：Giordano 佐丹奴于1988年正式在台湾成立子公司。目前台湾约有178家店铺 
                    </p>
                </div>
            </li>
            </router-link>
        </ul>



        <!-- 弹出窗设置 -->

        <ul   class="alertBox picbox  " v-if="evaluateList_show" @click="evaluateList_show=  false">
          <div class="interloyer" @click.stop.prevent="clearBubbling">
              <h3>用户评价</h3>
              
              <router-link to='/evaluateview'>
                <li v-for="item in evaluatelist" class="padding10" :key='item.id'> 
                  <img :src="item.src" alt="头像" class="fl headpic">
                  <div class="fl rightBox">
                      <p class="fr">
                       <span class="fr">SEVEN</span> <span>2017-10-5</span>
                      </p>
                      <p class="clear  ssbox" >
                        品牌概况：Giordano 佐丹奴于1988年正式在台湾成立子公司
                        品牌概况：Giordano 佐丹奴于1988年正式在台湾成立子公司。目前台湾约有178家店铺 
                         品牌概况：Giordano 佐丹奴于1988年正式在台湾成立子公司。目前台湾约有178家店铺 
                          品牌概况：Giordano 佐丹奴于1988年正式在台湾成立子公司。目前台湾约有178家店铺 
                      </p>
                  </div>
                 </li>
              </router-link>
          </div>
        </ul>

      </div>

      <div class="btnBuy bgPrimary font20">
        <span>￥1000&nbsp;<router-link to="/goshopping"><span class="bgwhite">一键拼团</span></router-link></span>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      evaluatelist:[
        { src:'../../static/images/touxiang.jpg'  }
      ],
      evaluateList_show:false
    }
  },
  methods:{
    clearBubbling(){}
  }
}
</script>
<style scoped>
.rightBox{
  width:80%;
   font-size: .12rem;
}
.ssbox{
 display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2; 
overflow: hidden;
padding-top: .1rem;
}
.btnBuy{
  width:60%;
  position: fixed;
  right:0;
  bottom:0;
  text-align:right;
  height: .6rem;
  line-height: .6rem;
  padding:0 .2rem;
  color: #fff;
   }
/* .interloyer ul{
  width:100%;
  overflow: scroll;
} */
.picbox li .headpic{
  width:.4rem;
  margin-top:.26rem;
 
}
.picbox li div{
margin-left: .3rem;
}
</style>
