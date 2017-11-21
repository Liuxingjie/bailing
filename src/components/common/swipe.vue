<template>
         <div class="swipe">
                 <mt-swipe :auto="4000" :list='list'>
                    <mt-swipe-item v-for="item in list" :key='item.id'><img :src="item.src" ></mt-swipe-item>      
                </mt-swipe>
         </div>
</template>
<script>
export default {
  props:[ 'list' ]
}
</script>
<style>

</style>
