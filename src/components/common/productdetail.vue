<template>
  <div class="product">
      <div v-for="item in productlist"
       class="productdetails" 
       :productlist='productlist'
       :key='item.id'
       >
          <router-link to="/todaydetails">
                <img  :src="item.src">
                <div class="detailsbox">
                    <span class="font14">{{item.title}}</span>&nbsp;&nbsp;<span class="bgred">{{ item.number}}</span><span>人团</span><br>
                    <span class="font10 bgred">￥</span><span class="font16 bgred">{{item.money}}</span>&nbsp;&nbsp;&nbsp;&nbsp; <span class="nofontweight bggray font10">已拼:</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="bgred">{{item.number2}}</span>&nbsp;<span class="nofontweight bggray">件</span>
                </div>
          
          <div class="submitbtn">
              <button>去拼团</button>
          </div>
            </router-link>
      </div>
  </div>
</template>
<script>
export default {
  props:['productlist']
}
</script>
<style scoped>
.product{
    width:100%;
    height:2.1rem;
}
.product .productdetails{
    width:100%;
    height: 2.1rem;
}
.product .productdetails img{
    padding:0 .15rem;
}
.product .productdetails .detailsbox{
    width:66%;
    padding:.1rem .15rem;
    font-size: .12rem;
    font-weight: bold;
    float: left;
}
.product .productdetails  .submitbtn{
    width:34%;
    float: left;
    padding:.15rem;
     font-weight: normal;

}
.product .productdetails .submitbtn button{
    width:90%;
    min-width: 1rem;
    height: .4rem;
    background:#fd5a34;
    border-radius:.1rem;
      color: white;
      outline: none;
}
</style>
