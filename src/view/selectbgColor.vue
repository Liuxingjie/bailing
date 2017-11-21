<template>
  <div id="selectbgColor">
          <mu-select-field v-model="game1" :labelFocusClass="['label-foucs']" @close='changecolor' label="选择你喜欢的游戏">
                 <mu-menu-item v-for="(text,index) in colors" :key="index" :value="text" :title="text" />
          </mu-select-field>
          {{game1}}
  </div>
</template>
<script>
export default {
    data(){
        return {
            game1:'white',
            colors:['white', 'red', 'lightblue', 'lightgreen', 'gray']
        }
    },
    methods:{
    }
}
</script>
<style scoped>
#selectbgColor{
    width:100%;
    padding:.2rem;
}
#selectbgColor .selectcolor{
    width:90%;
    height: .6rem;
}
</style>
