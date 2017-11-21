<template>
  <div id="live">
      <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
      <div class="headnav">
           <mu-tabs :value="activeTab" @change="handleTabChange">
                <mu-tab :value="(index,item).tab" v-for="item in livelist"  :key='item.id' :title="item.title" />         
            </mu-tabs>
      </div>
       <div v-for="(item,index) in livelist" :key='item.id' v-if=" activeTab=== item.tab ">
            
           <div class="labelBox"
            v-for="item in labellist"
             :key="item.id"  
            v-show=" activeTab==='tab1' "
               >
                 <img :src="item.src" class="fl littleimg" alt="头像">
                 <div class="fl">
                     <span>SEVEN</span><br>
                    <span class="font14 laber">{{item.title}}</span>
                 </div> 
                 <router-link :to="item.link">
                    <div class="imgBox clear" >
                        <img :src="item.src2" alt="图片">
                        <h3>{{ item.details}} <span class="fr nofontweight bggray">{{ item.number}}万人在看</span></h3>
                    </div>  
                </router-link>
            </div>
        </div> 
        
  </div>
</template>
<script>
import heads from '@/components/common/head'
export default {
    data(){
        return{
             msgtitle:'热播',
             classes:'headclass',
             dis:'displaynone',
             activeTab: 'tab1',
             livelist:[
                 { id:'1',title:'精选',tab:'tab1' ,src:'../static/images/details_10.png',src2:'../static/images/details_10.png' },
                 { id:'2',title:'生活',tab:'tab2'   },
                 { id:'3',title:'美妆',tab:'tab3'  },
                 { id:'4',title:'数码',tab:'tab4'   },
                 { id:'5',title:'游戏',tab:'tab5'   },
                 { id:'6',title:'美食',tab:'tab6'   },
                 { id:'7',title:'运动' ,tab:'tab7'  },
                 { id:'8',title:'智能',tab:'tab8'   },
             ],
              labellist:[
                 { id:'1',title:'精选',tab:'tab1',number:'12',link:'/liveinterface',details:'超级好吃的牛肉' ,src:'../static/images/details_10.png',src2:'../static/images/details_10.png' },
                 { id:'2',title:'精选',tab:'tab2',number:'13',link:'/liveinterface',details:'超级好吃的牛肉',src:'../static/images/details_10.png',src2:'../static/images/details_10.png'   },
                 { id:'3',title:'精选',tab:'tab3',number:'11',link:'/liveinterface',details:'超级好吃的牛肉' ,src:'../static/images/details_10.png',src2:'../static/images/details_10.png' }
             ]
        }
    },
    methods:{
         handleTabChange (val) {
              this.activeTab = val
    }
    },
    components:{ heads }
}
</script>
<style >
#live{
    width:100%;
    position: relative;
    height: 1470px;
    overflow: auto;
    margin-bottom:.6rem;
}
#live .headnav{
    width:96%;
    margin:0 auto;
    overflow: scroll;
    margin-top: .45rem;
}
#live .mu-tabs{
    width:150%;
}
#live .mu-tab-text{
    float: left;
    text-align:center;
}
.labelBox{
    width:100%;
    padding:.15rem;
}
.labelBox .littleimg{
    width:.5rem;
    margin-right: .1rem;
    padding-bottom: .1rem;
}
</style>
