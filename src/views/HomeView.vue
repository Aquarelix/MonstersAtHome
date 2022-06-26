<template>
    <HeaderComponentVue />
  <div class="home">
      <div class="clicker">
        <ClickerComponentVue />
        <div class="upgrade">
          <UpgradeComponentVue />
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import ClickerComponentVue from '@/components/ClickerComponent.vue'
import UpgradeComponentVue from '@/components/UpgradeComponent.vue'

import axios from "axios"

export default {
  data(){
    return{
      BASE_URL: process.env.VUE_APP_BASE_API_URL,
    }
  },
  components: {
    HeaderComponentVue,
    ClickerComponentVue,
    UpgradeComponentVue
  },
  mounted(){
    if(this.$store.state.userSaveInterval == null)
      this.$store.state.userSaveInterval = setInterval( () => {
        this.SaveUserDataOnDatabase()
        this.SaveUserStatsOnDatabase()
      }, 30000);
    
    this.LoadUserStats()
  },
  methods: {
    async LoadUserStats(){
      axios.get(this.BASE_URL + "/api/userStats", {
        withCredentials: true
      }).then((response) => {
        const userStats = response.data.userStats;
        console.log("LOAD USER STATS:")
        console.log(userStats)

        if(!userStats)
          return;
        
        this.$store.state.clicks = userStats.timesClickedOnButton;
        this.$store.state.monsterClicks = userStats.timesClickedOnMonsters;
        this.$store.state.monstersSpent = userStats.totalSpendOnMonster;
        this.$store.state.userCreationDate = userStats.accountCreated;

        if(userStats.totalTimeOnWebsite)
          this.$store.state.totalWebsiteTime = userStats.totalTimeOnWebsite;
        else
          this.$store.state.totalWebsiteTime = 0

        console.log(this.$store.state.totalWebsiteTime)
        console.log("USER DATA:")
        const userData = {
          clicks: this.$store.state.clicks,
          monsterClicks: this.$store.state.monsterClicks,
          monstersSpent : this.$store.state.monstersSpent,
          userCreation: this.$store.state.userCreationDate,
        }
        console.log(userData)
      }).catch((response) => {
        console.log("ERROR USER STATS:")
        console.log(response)
      })
    },
    SaveUserDataOnDatabase(){
      console.log("SAVING USER DATA ON DATABASE")
      if(!JSON.parse(this.$cookies.get("isLoggedIn")))
        return;

      // Check if user is authenticated or not
      const currentCounter = this.$store.state.count
      const currentRate = this.$store.state.counterRate
      const upgradeData = UpgradeComponentVue.methods.getAllUpgradeData()

      console.log(this.$store.getters.getCounter)
      console.log({
        username: this.$cookies.get("username"),
        counter: Number(currentCounter),
        counterRate: Number(currentRate),
        upgradeBoxes: upgradeData
      })

      axios.put(this.BASE_URL + "/api/userSave", {
        username: this.$cookies.get("username"),
        counter: Number(currentCounter),
        counterRate: Number(currentRate),
        upgradeBoxes: JSON.stringify(upgradeData)
      }, {
        withCredentials: true
      })
      .catch((response) => {
        console.log("SAVING USERSAVE ERROR ")
        this.$cookies.set("isLoggedIn", false)
        this.$router.push("/login")

        console.log(response)
        console.log(response.status)
      })
    },
    SaveUserStats(){

    },
    SaveUserStatsOnDatabase(){
      console.log("Saving User Stats")
      if(!JSON.parse(this.$cookies.get("isLoggedIn")))
        return;

      const userData = {
        timesClickedOnButton: this.$store.getters.getIntegerClicks,
        timesClickedOnMonsters: this.$store.getters.getIntegerMonsterClicks,
        totalSpendOnMonster: this.$store.getters.getMonstersSpent,
        totalTimeOnWebsite: this.$store.getters.getTimeOnWebsiteInSeconds
      }
      console.log(userData)
      axios.put(this.BASE_URL + "/api/userStats", {
        timesClickedOnButton: this.$store.state.clicks,
        timesClickedOnMonsters: this.$store.state.monsterClicks,
        totalSpendOnMonster: this.$store.state.monstersSpent,
        totalTimeOnWebsite: this.$store.getters.getTimeOnWebsiteInSeconds
      }, {
        withCredentials: true
      }).then((response) => {
        console.log(response)
      }).catch((response) => {
        console.log(response)
      })
    }
  }

}
</script>

<!-- Scoped: you will only style the component-->
<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.clicker{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.upgrade {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
