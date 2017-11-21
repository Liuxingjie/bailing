<template>
  <div id="groupbuy">
    <div class="goback" ><router-link to='/home/movies' >< </router-link/></div>
      <div class="swipe">
          <div class="swipe">
                 <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="item in list" :key='item.id'><img :src="item.src" ></mt-swipe-item>
                </mt-swipe>
        </div>
        <h3 class="padding10">今日推荐</h3>
        <productdetail :productlist='productlist'></productdetail>
        <sugget :suggestlist='suggestlist'></sugget>
      </div>
  </div>
</template>
<script>
import productdetail from '../components/common/productdetail'
import sugget from '../components/common/sugget'
export default {
  data(){
      return{
          list:[
              { src:"../static/images/details_03.png" },
                { src:"../static/images/details_05.png" }
          ],
          productlist:[
                {src:"../static/images/details_05.png",title:'夏装字母印花黑色上衣',number:2,money:'318.00',number2:142}
              ],
          suggestlist:[
              {
                   src:'../../static/images/details_10.png',
                   title:'美国车厘子',
                   title2:'新鲜水果' ,
                   money:'318.00',
                   number:'142'
             },
             {
                   src:'../../static/images/details_13.png',
                   title:'美国车厘子',
                   title2:'新鲜水果' ,
                   money:'318.00',
                   number:'142'
             },
             {
                   src:'../../static/images/details_10.png',
                   title:'美国车厘子',
                   title2:'新鲜水果' ,
                   money:'318.00',
                   number:'142'
             },
             {
                   src:'../../static/images/details_10.png',
                   title:'美国车厘子',
                   title2:'新鲜水果' ,
                   money:'318.00',
                   number:'142'
             },
          ],
      }

  },
  components:{ productdetail,sugget }

}
</script>
<style socped>
#groupbuy{
    width:100%;
    position: relative;
    margin-bottom:.6rem;
}
.goback{
    position: absolute;
    top: 0;
    z-index:1;
    font-size: .3rem;
    padding:0 .1rem;
}

</style>
