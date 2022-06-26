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
      console.log("GET TIME ON WEBSIE:")
      const currentTime = new Date();
      const currentTimeOnWebsite = (currentTime - state.startingTime)/1000;
      const allTime = currentTimeOnWebsite + state.totalWebsiteTime;
      
      console.log(state.totalWebsiteTime)
      console.log(currentTimeOnWebsite)
      console.log(allTime)
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
    },
    increaseOnMonsterSpent(state, counterIncrease){
      state.monstersSpent += counterIncrease;
    },
    clickedOnMonster(state){
      state.monsterClicks++;

      // Change the color of the MonstersPerSecond 
      const randomColor = Math.floor(((Math.random() * 16777215))).toString(16);  // To string in Hex 
      document.getElementById("monstersPerSecond").style.color = "#" + randomColor;
    },
    resetAllVariables(state){
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
    setCurrentTab(state, tabName) {
      state.tabName = tabName;
    },
    setMonsterIntervall(state, intervall) {
      state.monsterIntervall = intervall;
    }
  },
  actions: {
  },
  modules: {
  }
})