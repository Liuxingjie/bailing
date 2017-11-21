// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '../static/common.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './vuex/store'


Vue.use(MuseUI)
Vue.use(MintUI)
Vue.config.productionTip = false
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
