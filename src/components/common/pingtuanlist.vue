<template>
    <div id="pingtuanlist">
        <ul>
            <li class="flexbetween">
                <span >28人正在拼团</span>
                <span @click="pingtuanlist_show=true">查看全部<span class="bgred font18">></span></span>
            </li>
            <li v-for="item in pingtuanlist" :key='item.id'>
               <ul class=" flexbetween">
                   <li><img :src="item.src" alt="头像"></li>
                   <li><span>还差<span class="bgred">{{item.number}}</span>人</span></li>
                   <li><router-link to="/goshopping"><button>去拼团</button></router-link></li>
               </ul>
            </li>
        </ul>

        <!-- 拼团列表弹出框 -->
        <ul class="alertBox" v-if="pingtuanlist_show" @click='pingtuanlist_show=false'>
            <div class="interloyer" @click.stop='clearBubbling'>
                <h3>正在拼团</h3>
                <li v-for="item in pingtuanlist" :key='item.id'>
                    <ul class="flexbetween">
                        <li><img :src="item.src" alt="头像"></li>
                        <li><span>还差<span class="bgred">{{item.number}}</span>人</span></li>
                        <li><router-link to="/goshopping"><button>去拼团</button></router-link></li>
                    </ul>
                </li>
             </div>
        </ul>


    </div>
</template>
<script>
export default {
   data(){
       return {
           pingtuanlist:[
              { number:1,src:'../static/images/touxiang.jpg'}
           ],
           pingtuanlist_show:false
       }
   },
   methods:{
       clearBubbling(){}
   }
}
</script>
<style scoped>
#pingtuanlist{
    width:100%;
}
#pingtuanlist img{
    width:.4rem;
}
#pingtuanlist ul li{
    line-height: .4rem;
}
#pingtuanlist ul li button{
    height: .3rem;
    line-height: .2rem;
    border-radius: .04rem;
    padding:0 .1rem;
    background:#fff;
    border:1px solid #fe5932;
}
</style>
