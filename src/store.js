import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:[],
    isReg1:null
  },
  mutations: {
    addItem(state,value){
      state.lists.push(value)
    },
    changeIsReg1(state,value){
      state.isReg1.push(value)
    }
  },
  actions: {

  }
})
