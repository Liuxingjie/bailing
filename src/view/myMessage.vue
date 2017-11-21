<template>
    <div id="myMessage">
        <heads :title='msgtitle' :classes='classes' :link='link' :dis='dis' ></heads>
        <ul class="main_content">
            <li v-for="(item,index) in mymessage" :key='item.id'>
               
                <span>{{item.leftLi}}</span> 
                <span v-show='item.imgshow'><img :src="item.src"></span>
                <span class="fr">{{item.details}}</span>
                <router-link :to='item.link'>
                    <span class="font20 fr">{{item.goback}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import heads from '@/components/common/head'
export default {
    data(){
        return{
            msgtitle:'个人资料',
            link:"/mine/me",
            mymessage:[]
        }
    },
    created(){
        let _this=this
        fetch('/api/mymessage', {}).then(response=>{
            return response.json()
        },function(error){
            console.log('error',error)
        }
        ).then(data=>{
            _this.mymessage= data[0]     
            console.log(_this.mymessage)  
        })
    },
    components:{ heads }
}
</script>
<style scoped>
#myMessage{
    width:100%;
    font-size: .12rem;
}
 #myMessage .main_content{
     margin-top:.45rem;
     width:100%;
    padding:.15rem;
 }
 #myMessage .main_content li{
     width:100%;
     height: .4rem;
     line-height: .4rem;
     margin-top: .1rem;
 }
 #myMessage .main_content li img{
    width:.4rem; 
    float: right;
 }
</style>
