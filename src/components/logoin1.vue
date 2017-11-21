<template>
  <div id="logoin1">
            <p class="font20">登录</p>
            <form  @submit.prevent="login">
                <div class='headbox'>
                   <i class="iconfont icon-shouji1"></i> <input class="nooutline noborder " :class='addclass' type="tel" v-model="telValue"  required placeholder="请输入手机号"><br>
                    <i class="iconfont icon-lock"></i><input class=" nooutline noborder" type="password" v-model='password' required placeholder="请输入密码"><br>
                </div>
                <div class="footbox">
                    <button class="noborder nooutline" type="submit">登录</button>
                </div>
            </form>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return{
            password:'11111',
            telValue:'',
            addclass:''
        }
    },
    methods:{
        login(){
            
             if(/^[1][3578]\d{9}$/.test(this.telValue)){
                this.$router.replace({ path: '/home/movies' })
             }
             else{
                 Toast('请输入正确的电话号码0_0')
             }
        }
    },
    watch:{
        telValue:function(val){
            if(/^[1][3578]\d{9}$/.test(val)){
                console.log(val)
                 this.addclass=''
            }
            else{
                this.addclass='bgprimary'
            }
        }
    }
}
</script>
<style scoped>
#logoin1{
    width:100%;
    background:url(../../static/images/logoin.png) no-repeat;
    background-size: cover;
    font-size: .12rem;
} 
 /* 头部部分 */
#logoin1 .headbox {
    width:100%;
    height: 1.6rem;
    margin-top: 2.5rem;
    text-align: center;

}
#logoin1  p{
    text-align:center;
    background:white;
    padding:.1rem;
}
#logoin1 .headbox a{
   border-bottom:1px  dashed black;
}
#logoin1 .headbox input{
    width:2.75rem;
    height: .41rem;
    margin-bottom: .26rem;
    font-size: .16rem;
    background:white;
    border-bottom:1px solid #fd5a34;
}

.footbox{
    width:100%;
    text-align:center;
}
.footbox button{
    width:2.75rem;
    height: .41rem;
    font-size: .16rem;
    margin-top: .26rem;
}

</style>
