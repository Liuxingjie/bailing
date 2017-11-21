<template>
  <div class="orderGoods" >
   <!-- 订   单 -->
        <div v-for="item in carOrder" :key='item.id'  :carOrder='carOrder' class="clear">
            <span class="bggray">
                订单号：{{item.orderNumber}}
            </span>
            <div>
                <img :src="item.src" >
                <div class="headbox">
                    <span class="pdtop10 spanbox">
                        <span class="fl font16 fontweight" >{{item.carNumber}}</span> <span class="fr font14 bgprimary">{{item.meal}}</span>
                    </span>
                    <span  class="pdtop10 font14 fontweight">
                        车主:{{item.carOwner}}
                    </span><br>
                    <span  class="pdtop10">
                        停车位置:{{item.location}}
                    </span><br>
                    <span  class="pdtop10 font10">
                        洗车时间：{{item.cleanTime}}
                    </span>
                </div>
                <div class="footbox clear flexbetween">
                    <span>
                        {{item.finishedOrderTime}} <span  class="bgprimary">下单</span>
                    </span>
                    <span>
                        <button class="bgPrimary">确认车辆</button>
                    </span>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props:['carOrder']
}
</script>
<style scoped>
.orderGoods{
    width:100%;
    font-size: .12rem;
    padding: 0 .2rem;
    margin-top: .35rem;
}
.orderGoods img{
    display: inline-block;
    width:35%;
    float: left;
    padding:.15rem;
}
.orderGoods .headbox{
    width:65%;
    float: left;
    padding-top: .05rem;
    padding-left: .1rem;
}
.pdtop10{
    display: inline-block;
    padding-top: .04rem;
}
.spanbox{
    width:100%;
}
.footbox {
    width:100%;
    height: .3rem;
    margin-bottom:.4rem;
    line-height:.3rem;
}
.footbox  button{
    height: .3rem;
    width:1rem;
    font-size: .16rem;
    color: #fff;
    outline: none;
    border:none;
    border-radius:.05rem;
}
</style>
