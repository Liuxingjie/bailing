<template>
  <div id="evaluateview">
    <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
    <div class="evaluatelist">
        <ul >
          <router-link to='/evaluateview'>
          <li v-for="item in evaluatelist" class="padding10" :key='item.id'> 
              <img src="../../static/images/touxiang.jpg" alt="头像" class="fl headpic">
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
    </div>
  </div>
   
   
</template>
<script>
import heads from '../components/common/head'
export default {
  components:{  heads },
  data(){
    return{
      msgtitle:'商品评价',
      classes:'bgPrimary',
      link:'/todaydetails',
      evaluatelist:[{id:1}]
    }
  }
}
</script>

<style scoped>
#evaluateview{
  width:100%;
}
#evaluateview .evaluatelist{
  width:100%;
  height: 200px;
  margin-top: .45rem;
}
.rightBox{
  width:80%;
  padding-left: .2rem;
}
.ssbox{
 display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2; 
overflow: hidden;
padding-top: .1rem;}

</style>
