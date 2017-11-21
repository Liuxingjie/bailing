<template>
    <div id="communityProduct">
        <div class="goback" ><router-link :to='goback' >< </router-link/></div>
        <goodshead :todaydetails='todaydetails'  :list='list'></goodshead>
        <div class="smallimgBox">
            <h4>已购买人群</h4>
            <ul>
                <li v-for="item in smallimgBox" :key="item.id"><img :src="item.src"></li>
            </ul>
            <button>查看评价(<span class="bgred">{{list.number2}}</span>)</button>
        </div>

        <div class="neighbor">
                <h4>邻居信息</h4>
                <!-- JiaThis Button BEGIN -->
<!-- JiaThis Button END -->
                <img :src="username.src" >
                <span>{{username.message}}</span>
                <button>关注</button>
        </div>

        <div class="introduce">
            <h3>邻居Mrliu的介绍</h3>
            <p class="font12">{{username.details}}</p>
            <img :src="username.src2">
        </div>

        <div class="foot">
           <ul>
               <li><span><i class="iconfont icon-fuwu bgprimary"></i><br>客服</span></li>
               <li><span><i class="iconfont icon-dianpu bgprimary"></i><br>店铺</span></li>
            </ul> 
            <button @click="gobuy">立即购买</button>  
         </div> 


         <!-- alert 弹窗 -->
         <div class="alertbox bgGray" v-show="isshow" @click='isshow=false'>
             <form action="#/ensureProduct" name="ensure">
                <ul class="detailsbox" @click.stop='child'>
                    <li>颜色
                        <ul>
                            <li
                             v-for="(item,index) in colors" 
                            :key="item.id" class="fl select"
                             @click='handle(index)' 
                             :class="{'bgPrimary':action==index}"
                             >
                             {{item}}</li>
                        </ul>
                    </li>
                    <li class="clear">尺寸
                        <ul>
                            <li
                             v-for="(item,index) in sizes" 
                            :key="item.id" class="fl select"
                             @click='handle2(index)' 
                             :class="{'bgPrimary':action2==index}"
                             >
                             {{item}}</li>
                        </ul>
                    </li>
                    <li class="clear">
                        <span class="fl">购买数量</span>
                        <span class="fr">
                            <button  @click="decrease">-</button>
                                 {{count}}
                            <button @click="increase">+</button>
                        </span>
                    </li>
                </ul> 
              </form>   
         </div>


    </div>
</template>
<script>
import goodshead from '@/components/common/goodshead'
export default {
    data(){
        return{
            goback:'/homeCommunity/community',
            colors:['黄色','红色','绿色','粉色','紫色','黑色'],
            sizes:['170L','175xL','180xxL'],
            action:'-1',
            action2:'-1',
            action3:'-1',
            isshow:false,
            count:1,
            username:{
                 src:'../static/images/touxiang.jpg',
                 src2:'../static/images/username.jpg',
                 message:'窟窿海岸',
                 details:'t-shift虽然大众，但是一直都是表现个性，传统，中场款式的T恤，配上开叉衣身...'
            },
            todaydetails:[
                {  src:'../static/images/quanzi_02.png' },
                {  src:'../static/images/quanzi_02.png' }
            ],
            list:{ 
                primecost:'1000',
                money:'500',
                title:'潮流t-SHIFT',
                number:'20',
                number2:'15',
                details:'潮流，好看，年轻，修身，一款适合自己的绝佳好品',
             },
             smallimgBox:[
                 { src:'../static/images/touxiang.jpg'  },
                 { src:'../static/images/touxiang.jpg' },
                 { src:'../static/images/touxiang.jpg' },
                 { src:'../static/images/touxiang.jpg' },
                 { src:'../static/images/touxiang.jpg' },
                 { src:'../static/images/touxiang.jpg' },
             ]
        }
    },
    methods:{
        handle(index){
           this.action=index
        },
         handle2(index){
           this.action2=index
        },
        handle3(index){
           this.action3=index
        },
         increase:function(){
            this.count=this.count+1
        },
        decrease(){
            if(this.count>=2) this.count=this.count-1   
        },
        gobuy(){
            if(this.isshow==true&&this.action2!='-1'&&this.action!='-1'){
                this.isshow=false 
                ensure.submit()
            }
            else{
                this.isshow=true
               
                }
        }
    },
    components:{  goodshead  }
}
</script>
<style scoped>
@import url(../../static/css/communityproduct.css);
</style>
