import { createStore } from 'vuex'

export default createStore({
  state: {
    return: {
      count: 0,
      counterRate: 0,
    }
  },
  getters: {
    getCounter(state){
      return state.count;
    },
    getCounterRate(state){
      return state.counterRate;
    }
  },
  mutations: {
    increment(state) {
      state.count = (Number(state.count) + 1).toFixed(2);
    }
  },
  actions: {
  },
  modules: {
  }
})