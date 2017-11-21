import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
   messagename:'刘星姐',
   dialog:false,
   homeMesBox:true,
   homeMsg:'',
}
const mutations={
    open (state) {
        state.dialog = true
        },
   close (state) {
        state.dialog = false
        },
    gobind:()=>{
        state.dialog=false
        window.location='#/bind'
    },
    bindmessage:()=>{
        state.homeMesBox=false
        state.homeMsg=state.homeMsg+state.homeMsg1+'('+state.homeMsg2+')'
    },
    setTest(state,val){
        state.homeMsg=val
    },
    setTest1(state,val){
        state.homeMsg1=val
    },
    setTest2(state,val){
        state.homeMsg2=val
    }
}
export default new Vuex.Store({
    state,
    mutations
});