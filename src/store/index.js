import { createStore } from 'vuex'

export default createStore({
  state: {
    return: {
      count: 0,
      counterRate: 0,
      isLoaded: false,
    }
  },
  getters: {
    getCounter(state){
      return state.count;
    },
    getIntegerCounter(state){
      return parseInt(state.count);
    },
    getCounterRate(state){
      return state.counterRate;
    },
    getIntegerCounterRate(state){
      return parseInt(state.counterRate);
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decreaseCounter(state, counterDecreaseValue) {
      console.log(state.count)
      state.count = state.count - counterDecreaseValue;
      console.log(" - " + counterDecreaseValue + " = " + state.count)
    },
    increaseCounterRate(state, counterRateIncrease) {
      state.counterRate += counterRateIncrease;
    }
  },
  actions: {
  },
  modules: {
  }
})