import { createStore } from 'vuex'

export default createStore({
  state: {
    return: {
      count: 0,
      counterRate: 0,
      clicks: 0,
      monstersSpent: 0,
      startingTime: new Date(),
      userSaveInterval: null,
      monsterIntervall: null,
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
    getIntegerClicks(state){
      return parseInt(state.clicks);
    },
    getIntegerMonstersSpent(state){
      return parseInt(state.monstersSpent);
    },
    getStartingTime(state){
      return state.startingTime;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
      state.clicks++;
    },
    decreaseCounter(state, counterDecreaseValue) {
      state.count = state.count - counterDecreaseValue;
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