<template>
  <div id="app">
 
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
         
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
