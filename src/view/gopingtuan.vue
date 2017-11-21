<template>
    <div id="goshopping">
       <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
        <div class="imgbox">
            <img class="fl firstImg" src="../../static/images/touxiang.jpg" alt="图片">
            <div class="fr contentbox">
                <h3>{{goshopping.title}}</h3>
                <p>
                    {{goshopping.details}}
                </p>
                <span>单购价￥：{{ goshopping.primeMoney }}</span>
                <span class="bgred"> ￥<span class="bgred font16">{{ goshopping.money  }}</span></span><br>
                <span>
                    <span class="fl">已售<span class="bgred">:{{goshopping.number}}</span></span>
                    <span class="fr"><span class="bgred">{{goshopping.number2}}</span>人团</span>
                </span>
            </div>
            <div class="clear padding10">
                <img :src="item.src" alt="图片" v-for="item in imgitem" class="smallimg" :key='item.id'>
                <i class="iconfont icon-wenhao"></i>
            </div>
           <router-link to="/"><button class="bgwhite bgPrimary  btn ">一键开团</button></router-link> 
           <p>
               <span class="fl ">拼单须知</span>
               <span class="fr">人满发货.人不满退款</span>
           </p>
        </div>
        <div class="footbtn clear">
                 
                     <button class="font16 bgprimary" @click="show_alertBox">￥{{ primeMoney }}<span  >单人购买</span></button>
               
               
                    <button class="font16   bgwhite bgPrimary" @click.stop="show_onekeyalertBox">￥{{ money }} <span> 一键拼团 </span> </button>
               
        </div>


        <!-- 弹窗信息： -->

        <div class="alertBox" v-show="onlyoneBox_show" @click='onlyoneBox_show=false'>
            <div class="interloyer" @click.stop='clearBubbling'>
                <div class="swipe">  
                    <img src="item.src" alt="产品图列表" v-for="item in list" :key='item.id'>
                </div>
                <div class="productselect">
                    <ul class="colorBox">
                        <h4>颜色</h4>
                        <li class="fl" v-for="item in list" :key="item.id">{{item.colortitle}}</li>
                    </ul>
                    <ul class="sizeBox">
                        <h4>尺寸</h4>
                        <li class="fl" v-for="item in list" :key="item.id">{{item.sizetitle}}</li>
                    </ul>
                    <p v-show='onekeyBuy_show'>
                        <span class="fl">购买数量</span>
                        <span class="fr">
                            <button  @click="decrease">-</button>
                                 {{count}}
                            <button @click="increase">+</button>
                        </span>
                    </p>
                    <div class="okbutton" v-show="onekeyBuy_show">
                        <button class="bgPrimary " @click.stop="showremindmessage">确定</button>
                    </div>
                    <div  class="okbutton" v-show="onekeyBuy_show1" >
                        <button class="bgPrimary " @click.stop="showremindmessage2">确定</button>
                    </div>
                </div>
           
            <!-- 提示信息 -->
                <!-- <div class="alertMeassage">
                    <transition name="bounce">
                        <p>Look at me!</p>
                    </transition>
                    <h3>收藏成功</h3>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import heads from '@/components/common/head'
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            msgtitle:'拼团',
            link:'/todaydetails',
            onlyoneBox_show:false,
            count:1,
            onekeyBuy_show:false,
            alertMeassage_show:false,
            onekeyBuy_show1:false,
            goshopping:{ title:'潮流t-SHIFT',
                        details:'好看，潮流，时尚，合身，修身，适合年轻人的品牌',
                        primeMoney:'1000',
                        money:'500',
                        number:'23',
                        number:'20',
                        },
            imgitem:[
                { src:'../../static/images/touxiang.jpg' },
                { src:'../../static/images/touxiang.jpg' },
                { src:'../../static/images/touxiang.jpg' },
                { src:'../../static/images/touxiang.jpg' },
                { src:'../../static/images/touxiang.jpg' },
            ]
        }
    },
    methods:{
        showremindmessage(){
            Toast('收藏成功');
        },
         showremindmessage2(){
            Toast('拼团成功');
        },
        show_alertBox(){
            this.onlyoneBox_show=true
            this.onekeyBuy_show=true
            this.onekeyBuy_show1=false
        },
        show_onekeyalertBox(){
            this.onlyoneBox_show=true
            this.onekeyBuy_show=false
            this.onekeyBuy_show1=true
        },
        clearBubbling(){},
        increase:function(){
            this.count=this.count+1
        },
        decrease(){
            if(this.count>=2) this.count=this.count-1   
        }
    },
    components:{ heads }
}
</script>
<style src='../../static/css/gopingtuan.css'>

</style>
