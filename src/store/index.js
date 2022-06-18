import { createStore } from 'vuex'

export default createStore({
  state: {
    return: {
      count: 0,
      counterRate: 0,
    }
  },
  getters: {
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