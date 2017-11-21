<template>
    <div id="todaydetails">
        <div class="goback" ><router-link to='/groupbuy' >< </router-link/></div>
        <goods-head :todaydetails='todaydetails' :list='list'/>
        <pingtuan-list />
        <evaluate></evaluate>
        <div class="foot"></div>
    </div>
</template>
<script>
import heads from '@/components/common/head'
import goodsHead from '@/components/common/goodshead'
import pingtuanList from '@/components/common/pingtuanlist'
import evaluate from '@/components/common/evaluate'
export default {
    components:{ heads,goodsHead,pingtuanList ,evaluate},
    data(){
        return{
            todaydetails:[
                {  
                    src:'../../static/images/details_05.png'
                  }
            ],
            list:{ 
                primecost:'1000',
                money:'500',
                title:'潮流前线短袖',
                number:'20',
                number2:'200',
                details:'品牌概况：Giordano 佐丹奴于1988年正式在台湾成立子公司。目前台湾约有178家店铺，分布在北、中、南及花东地区,目前台湾约有178家店铺，分布在北、中、南及花东地区'
            }
        }
    }
}
</script>
<style scoped>
#todaydetails .titleMessage{
    font-size: .12rem;
    padding:0 .15rem;
    padding-top: .2rem;
    word-spacing: .08rem;
}
.foot{
    width:100%;
    height: 2rem;
}
</style>
