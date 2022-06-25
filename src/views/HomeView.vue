<template>
  <div class="home">
      <HeaderComponentVue />
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
  created() {
  },
  mounted(){
    if(this.$store.state.userSaveInterval == null){
      console.log("CREATING USER SAVE INTERVAL")
      this.$store.state.userSaveInterval = setInterval(this.SaveUserDataOnDatabase, 30000);
    }
    //setInterval()
  },
  methods: {
    SaveUserDataOnDatabase(){
      console.log("SAVING USER DATA TO DATABASE")
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
    },
    SaveUserStats(){

    },
    SaveUserStatsOnDatabase(){

    }
  }

}
</script>

<!-- Scoped: you will only style the component-->
<style scoped>

.clicker{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.upgrade {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
