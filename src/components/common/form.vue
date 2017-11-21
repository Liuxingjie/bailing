<template>
    <div id="form" >
        <form action="/home" name='formname'>
            <img :src="form.src" >
            <div class="detailsbox">
                <h4>刺绣白搭长袖上衣学生夹克</h4>
                <span class="bgred">￥<span class="font16">{{form.money}}</span></span>
                <button @click="decrese" type="button">-</button> <input type="number" v-model="count">
            </div>
            <span class="font14">数量<span class="bggray font10">(每人限购10份)</span></span><br>
            <h4>选择配送方式</h4>
        </form>
        <mu-radio label="自提" labelLeft='true'  name="group" nativeValue="simple1" v-model="value" class="demo-radio"/> <br/>
        <mu-radio label="上门" labelLeft='true'  name="group" nativeValue="simple2" v-model="value"  class="demo-radio"/> <br/>   
        <div class="formbtn" @click="submit">
            应付{{form.money}}
        </div>

    </div>
</template>
<script>
export default {
  data(){
      return {
          count:5,
          value:'simple1',
          form:{src:'../../static/images/quanzi_07.png',money:'10.00'}
      }
  },
  methods:{
      decrese(){
          if(this.count>=2){this.count=this.count-1} 
      },
      submit(){
          formname.submit()
      }
  }
}
</script>
<style scoped>
    #form{
        width:100%;
        padding:.1rem;
        font-size: .13rem;
    }
    #form img{
        width:20%;
        float: left;
    }
    #form .detailsbox{
        width:80%;
        float: left;
        padding:.1rem;
    }
     #form .detailsbox input{
         width:.2rem;
         height: .3rem;
         padding:.05rem;
         float: right;
     }
     #form .detailsbox  button{
         width:.2rem;
         height: .3rem;
         float: right;
     }
     .formbtn{
         width:100%;
         height: .6rem;
         background:red;
         position: fixed;
         bottom:1rem;
         color: #fff;
         text-align:center;
         line-height: .6rem;
         font-size: .16rem;
     }
</style>
