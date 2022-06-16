import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      count: 0,
      counterRate: 0,
      isAuthenticated: false,
      token: "",
    }
  },
  getters: {
    isAuthenticated(){
      return this.isAuthenticated;
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})