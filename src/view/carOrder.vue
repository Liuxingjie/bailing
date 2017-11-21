<template>
  <div id="carOrder">
      <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
      <div class="muTabBox">
             <mu-tabs :value="activeValue" @change="handleValueChange" class="navbar1">   <!-- 一号菜单 -->
                        <mu-tab value="tab1" title="新订单"/>
                        <mu-tab value="tab2" title="已接单"/>
                        <mu-tab value="tab3" title="已完成"/>
            </mu-tabs>
     </div>
       <div v-if="activeValue === 'tab1'">
            <order-goods :carOrder='carOrder'></order-goods>
       </div>         
  </div>
</template>
<script>
import orderGoods from '@/components/common/orderGoods'
import heads from '@/components/common/head'
export default {
    data(){
        return {
            msgtitle:'我的订单',
            link:'/carServer',
            activeValue:'tab1',
            carOrder:[
                {
                orderNumber:'201711105322',
                src:'../static/images/touxiang.jpg',
                carNumber:'粤B88888',
                meal:'套餐A',
                carOwner:'鲁迅',
                location:'南山公园',
                cleanTime:'2017-11-12  19:20-22:20',
                finishedOrderTime:'2017-11-10  19:20',
                },
                 {
                orderNumber:'201710106622',
                src:'../static/images/touxiang.jpg',
                carNumber:'粤B66666',
                meal:'套餐A',
                carOwner:'鲁迅',
                location:'南山公园',
                cleanTime:'2017-10-10  19:20-22:20',
                finishedOrderTime:'2017-10-06  19:20',
                },
                 {
                orderNumber:'201710015673',
                src:'../static/images/touxiang.jpg',
                carNumber:'粤B99999',
                meal:'套餐A',
                carOwner:'鲁迅',
                location:'南山公园',
                cleanTime:'2017-10-01 19:20-22:20',
                finishedOrderTime:'2017-10-01  19:20',
                }
            ]
        }
    },
    methods:{
        handleValueChange(val){
            this.activeValue=val
        }
      },
  components:{ orderGoods,heads }
}
</script>
<style scoped>
.muTabBox{
    width:100%;
    margin-top: .6rem;
    padding: 0 .2rem;
}
#carOrder{
    margin-bottom:.8rem;
}
</style>
