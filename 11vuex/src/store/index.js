/*
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-03 20:34:30
 */
import { createStore } from 'vuex';

export default createStore({
  state: {
    count:0,
    dcount:0
  },
  getters: {
    sum(state){
      return state.count + state.dcount;
    },
    //自定义传参
    sum1(state,getters){
      return function(keys){
        return getters.sum + keys;
      }
      
    }
  },
  mutations: {
    add(state,num){
      state.dcount += num
    },
    sub(state,num){
      state.dcount -= num
    }
  },
  actions: {
    demo(context,playload){
      setTimeout(()=>{
        context.commit("add",10)
        console.log(playload)
      },3000)
    }
  },
  modules: {
  }
})
