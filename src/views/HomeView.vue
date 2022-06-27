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
    this.$store.state.OnHomeView = true;
    
    if(this.$store.state.userSaveInterval == null)
      // Save the progress of the user every 30 seconds
      this.$store.state.userSaveInterval = setInterval( () => {
        if(this.$store.state.OnHomeView){
          this.SaveUserDataOnDatabase()
        }
        this.SaveUserStatsOnDatabase()
      }, 30000);

    // Set the monster intervall
    if (this.$store.getters.getMonsterInterval == null)
    {
        var monsterIntervall = setInterval(() => {
            const count = Number(this.$store.state.count)
            const counterRate = Number(this.$store.state.counterRate)
            this.$store.state.count = count + counterRate
        }, 1000)
        this.$store.dispatch('setMonsterIntervall', monsterIntervall)
    }
    
    this.LoadUserStats()
  },
  beforeUnmount(){
    // Save Users Data and Stats
    this.SaveUserDataOnDatabase()
    this.SaveUserStatsOnDatabase()
  },
  methods: {
    async LoadUserStats(){
      axios.get(this.BASE_URL + "/api/userStats", {
        withCredentials: true
      }).then((response) => {
        const userStats = response.data.userStats;

        if(!userStats)
          return;
        
        // Set all Variables
        this.$store.state.clicks = userStats.timesClickedOnButton;
        this.$store.state.monsterClicks = userStats.timesClickedOnMonsters;
        this.$store.state.monstersSpent = userStats.totalSpendOnMonster;
        this.$store.state.userCreationDate = userStats.accountCreated;
          this.$store.state.totalWebsiteTime = userStats.totalTimeOnWebsite;
      }).catch(() => {
        this.$cookies.set("isLoggedIn", false)
        this.$router.push("/login")

      })
    },
    SaveUserDataOnDatabase(){
      if(!JSON.parse(this.$cookies.get("isLoggedIn")))
        return;

      // Check if user is authenticated or not
      const currentCounter = this.$store.state.count
      const currentRate = this.$store.state.counterRate
      const upgradeData = UpgradeComponentVue.methods.getAllUpgradeData()

      axios.put(this.BASE_URL + "/api/userSave", {
        username: this.$cookies.get("username"),
        counter: Number(currentCounter),
        counterRate: Number(currentRate),
        upgradeBoxes: JSON.stringify(upgradeData)
      }, {
        withCredentials: true
      })
      .catch(() => {
        this.$cookies.set("isLoggedIn", false)
        this.$router.push("/login")
      })
    },
    SaveUserStatsOnDatabase(){
      if(!JSON.parse(this.$cookies.get("isLoggedIn")))
        return;
        
      axios.put(this.BASE_URL + "/api/userStats", {
        timesClickedOnButton: this.$store.state.clicks,
        timesClickedOnMonsters: this.$store.state.monsterClicks,
        totalSpendOnMonster: this.$store.state.monstersSpent,
        totalTimeOnWebsite: this.$store.getters.getTimeOnWebsiteInSeconds
      }, {
        withCredentials: true
      }).catch(() => {
        this.$cookies.set("isLoggedIn", false)
        this.$router.push("/login")
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
