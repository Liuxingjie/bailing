import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/logoin'
import login1 from '@/components/logoin1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/logoin1',
      component: login1
    }

    // home首页

    ,{
      path:'/home',
      component(resolve){
        require(['@/view/home'],(resolve))
      },
      children:[
        { 
          path:'/home/:num',
          component(resolve){
            require(['@/view/homeview'],(resolve))
          }
        },
        { 
          path:'/bind',
          component(resolve){
            require(['@/view/bind'],(resolve))
          }
        },
        {
          path:'/live/:num',
          component(resolve){
            require(['@/view/live'],(resolve))
          }
        }
        ,
        {
          path:'/circle/:num',
          component(resolve){
            require(['@/view/circle'],(resolve))
          }
        },
        {
          path:'/homeCommunity/:num',
          component(resolve){
            require(['@/view/homeCommunity'],(resolve))
          }
        },
        {
          path:'/mine/:num',
          component(resolve){
            require(['@/view/mine'],(resolve))
          }
        }
        
      ]
    },
    {
      path:'/groupbuy',
      component(resolve){
        require(['@/view/groupBuy'],(resolve))
      }
    },
    {
      path:'/todaydetails',
      component(resolve){
        require(['@/view/todaydetails'],(resolve))
      }
    },
    {
      path:'/evaluateview',
      component(resolve){
        require(['@/view/evaluateview'],(resolve))
      }
    },
    {
      path:'/goshopping',
      component(resolve){
        require(['@/view/gopingtuan'],(resolve))
      }
    },
    {
      path:'/liveinterface',
      component(resolve){
        require(['@/view/liveinterface'],(resolve))
      }
    } ,
    {
      path:'/carServer',
      component(resolve){
        require(['@/view/carServer'],(resolve))
      }
    },
    {
      path:'/bindcar',
      component(resolve){
        require(['@/view/bindcar'],(resolve))
      }
    },
    {
      path:'/communityProduct',
      component(resolve){
        require(['@/view/communityproduct'],(resolve))
      }
    },
    {
      path:'/ensureProduct',
      component(resolve){
        require(['@/view/ensureProduct'],(resolve))
      }
    },
    {
      path:'/moreStore',
      component(resolve){
        require(['@/view/moreStore'],(resolve))
      }
    },
    {
      path:'/selectbgColor',
      component(resolve){
        require(['@/view/selectbgColor'],(resolve))
      }
    },
    {
      path:'/carOrder',
      component(resolve){
        require(['@/view/carOrder'],(resolve))
      }
    },
    {
      path:'/carCost',
      component(resolve){
        require(['@/view/carCost'],(resolve))
      }
    }



    // mine
    ,
    {
      path:'/myMessage',
      component(resolve){
        require(['@/view/myMessage'],(resolve))
      }
    }
  ]
})
