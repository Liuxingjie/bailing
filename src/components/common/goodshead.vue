<template>
  <div id="goodshead">
        <div class="imgbox" :todaydetails='todaydetails' :list='list'>
              <mt-swipe :show-indicators="false">
                    <mt-swipe-item v-for="item in todaydetails" :key='item.id' >
                        <img :src="item.src" >
                    </mt-swipe-item>
              </mt-swipe>  
        </div>
        <div class="titleMessage">
            <p>
                <span class="bggray linethrough">单购价￥：{{list.primecost}}</span>
                 <span class="font10 bgred">￥<span class="font16">{{list.money}}</span></span>
                 <span class='fr bgred '><i class="iconfont icon-fenxiang"></i>分享</span>
            </p>
            <p >
              <span class="fontweight font14 fl">{{ list.title }}</span> 
              <span class="fr font12">已售：<span class="bgred">{{list.number }}</span>件 <span class="bgred">{{list.number2}}</span>人团</span>
            </p>
            <p class="font12 clear">
                {{list.details}}
            </p>
        </div>
  </div>
</template>
<script>
export default {
        props:['todaydetails','list']

}
</script>
<style scoped>
#goodshead{
    letter-spacing: .02rem;
}
.titleMessage{
    padding:.1rem;
}
.titleMessage p{
    padding:.05rem 0;
}
</style>
