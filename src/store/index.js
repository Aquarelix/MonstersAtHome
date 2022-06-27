import { createStore } from 'vuex'

export default createStore({
  state: {
    return: {
      count: 0,
      counterRate: 0,
      clicks: 0,
      monsterClicks: 0,
      monstersSpent: 0,
      startingTime: new Date(),
      totalWebsiteTime: 0,
      userSaveInterval: null,
      monsterIntervall: null,
      userCreationDate: 0,
      isFirstLoadDone: false,
      currentTab: "",
      OnHomeView: false,
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
    getIntegerMonsterClicks(state){
      return parseInt(state.monsterClicks);
    },
    getIntegerTotalClicks(state){
      return parseInt(state.monsterClicks + state.clicks);
    },
    getIntegerMonstersSpent(state){
      return parseInt(state.monstersSpent);
    },
    getMonstersSpent(state){
      return state.monstersSpent;
    },
    getTimeOnWebsite(state){
      const currentTime = new Date();
      const currentTimeOnWebsite = (currentTime - state.startingTime)/1000;
      const allTime = currentTimeOnWebsite + state.totalWebsiteTime;
      
      return new Date(allTime * 1000).toISOString().substr(11, 8);
    },
    getTimeOnWebsiteInSeconds(state){
      const currentTime = new Date();
      const currentTimeOnWebsite = (currentTime - state.startingTime)/1000;
      const allTime = currentTimeOnWebsite + state.totalWebsiteTime;
      return allTime;
    },
    getUserCreationDate(state){
      return (new Date(state.userCreationDate)).toLocaleString("de-DE");
    },
    getOnHomeView(state) {
      return state.OnHomeView;
    },
    getMonsterInterval(state) {
      return state.monsterIntervall;
    }
  },
  mutations: {
    INCREMENT(state) {
      state.count++;
      state.clicks++;

      // Change the color of the Monster count 
      const randomColor = Math.floor(((Math.random() * 16777215))).toString(16);  // To string in Hex 
      document.getElementById("monsterCounter").style.color = "#" + randomColor;
    },
    DECREASE_COUNTER(state, counterDecreaseValue) {
      state.count = state.count - counterDecreaseValue;
    },
    INCREASE_COUNTER_RATE(state, counterRateIncrease) {
      state.counterRate += counterRateIncrease;
    },
    INCREASE_ON_MONSTERS_SPENT(state, counterIncrease){
      state.monstersSpent += counterIncrease;
    },
    CLICKED_ON_MONSTER(state){
      state.monsterClicks++;

      // Change the color of the MonstersPerSecond 
      const randomColor = Math.floor(((Math.random() * 16777215))).toString(16);  // To string in Hex 
      document.getElementById("monstersPerSecond").style.color = "#" + randomColor;
    },
    RESET_ALL_VARIABLES(state){
      state.count = 0
      state.counterRate= 0
      state.clicks= 0
      state.monsterClicks= 0
      state.monstersSpent= 0
      state.startingTime= new Date()
      state.totalWebsiteTime= 0
      state.userSaveInterval= null
      state.monsterIntervall= null
      state.userCreationDate= 0
      state.isFirstLoadDone= false
      state.OnHomeView= false
      state.tabName = "home"
    },
    SET_CURRENT_TAB(state, tabName) {
      state.tabName = tabName;
    },
    SET_MONSTER_INTERVALL(state, interval) {
      state.monsterIntervall = interval;
    }
  },
  actions: {
    increment(context) {
      context.commit('INCREMENT');

      // Change the color of the Monster count 
      const randomColor = Math.floor(((Math.random() * 16777215))).toString(16);  // To string in Hex 
      document.getElementById("monsterCounter").style.color = "#" + randomColor;
    },
    decreaseCounter(context, counterDecreaseValue) {
      context.commit('DECREASE_COUNTER', counterDecreaseValue);
    },
    increaseCounterRate(context, counterRateIncrease) {
      context.commit('INCREASE_COUNTER_RATE', counterRateIncrease);
    },
    increaseOnMonsterSpent(context, counterIncrease){
      context.commit('INCREASE_ON_MONSTERS_SPENT', counterIncrease)
    },
    clickedOnMonster(context){
      context.commit('CLICKED_ON_MONSTER');

      // Change the color of the MonstersPerSecond 
      const randomColor = Math.floor(((Math.random() * 16777215))).toString(16);  // To string in Hex 
      document.getElementById("monstersPerSecond").style.color = "#" + randomColor;
    },
    resetAllVariables(context){
      context.commit('RESET_ALL_VARIABLES');
    },
    setCurrentTab(context, tabName) {
      context.commit('SET_CURRENT_TAB', tabName);
    },
    setMonsterIntervall(context, intervall) {
      context.commit('SET_MONSTER_INTERVALL', intervall);
    }
  },
  modules: {
  }
})