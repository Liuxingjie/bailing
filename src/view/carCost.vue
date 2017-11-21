<template>
    <div id="carCost">
        <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>

            <div v-for="item in carCost" :key='item.id' class="mainbox">
                <div class="flexbetween fontweight font12">
                    <span>
                        {{item.carNumber}}
                    </span>
                    <span>
                        {{item.location}}
                    </span>
                </div>
                <div  class="flexbetween">
                   <span> {{item.type}}<span class="font10 bgprimary">{{item.unit}}<span class="font14">{{item.monthCost}}</span></span>{{item.monthUnit}}</span>
                   <span>
                       {{item.endTime}}
                   </span>
                </div>
                <div class="flexbetween">
                     <span class="bgprimary" @open="$store.commit('open')">
                      {{item.rule}}
                     </span>
                </div>
                <div class="font14 bgprimary textcenter">
                    {{item.btn}}
                </div>
            </div>



            <!-- 弹窗 -->
            <div>
                    <mu-dialog :open="dialog"  @close="$store.commit('close')"  >
                            <span>计费规则</span>
                            <div></div>
                            <p>到期时间日期为当前到期时间日期月份+1（不跨月）如跨月则到下月底</p>
                            <p>
                                例：1月3号-2月3号，1月30-2月28，1月31-2月28号
                            </p>
                    </mu-dialog>
             </div>

    </div>
</template>
<script>
import heads from '@/components/common/head'
export default {
    data(){
        return{
           msgtitle:"停车缴费" ,
           link:'/carServer',
           carCost:[
               {
                   carNumber:'京888888',
                   location:'蔚蓝海岸',
                   monthCost:'30',
                   endTime:'到期时间：2017-11-11',
                   btn:'我要续费',
                   rule:'扣费规则',type:'月卡类型：',
                   unit:'￥',
                   monthUnit:"/月"
               },
               {
                   carNumber:'京888888',
                   location:'蔚蓝海岸',
                   monthCost:'',
                   endTime:'',
                   btn:'您在该停车场暂无月卡，如需办理请联系管理处'
               }
           ]
        }
    },
    components:{ heads }
}
</script>
<style scoped>
#carCost{
    margin-top: .55rem;
    width:100%;
}
#carCost .mainbox{
    width:100%;
    background-image: url(../../static/images/diary.png);
    background-size: cover;
    padding:.15rem .2rem;
    margin-top: .2rem;

}
.textcenter{
    text-align:center;
}
</style>
