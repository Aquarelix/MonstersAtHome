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

      // Change the color of the Monster count 
      const randomColor = Math.floor(((Math.random() * 16777215))).toString(16);  // To string in Hex 
      document.getElementById("monsterCounter").style.color = "#" + randomColor;
    },
    decreaseCounter(state, counterDecreaseValue) {
      state.count = state.count - counterDecreaseValue;
    },
    increaseCounterRate(state, counterRateIncrease) {
      state.counterRate += counterRateIncrease;

      // Change the color of the MonstersPerSecond 
      const randomColor = Math.floor(((Math.random() * 16777215))).toString(16);  // To string in Hex 
      document.getElementById("monstersPerSecond").style.color = "#" + randomColor;
    }
  },
  actions: {
  },
  modules: {
  }
})