<template>
  <div class="home">
      <HeaderComponentVue />
      
      <div class="clicker">
        <ClickerComponentVue />
      </div>

      <div class="upgrade">
        <UpgradeComponentVue />
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
      BASE_URL: process.env.VUE_APP_BASE_API_URL
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
    setInterval(this.SaveUserData, 30000);
  },
  methods: {
    SaveUserData(){
      const currentCounter = this.$store.state.count;
      const currentRate = this.$store.state.counterRate;
      const upgradeData = UpgradeComponentVue.methods.getAllUpgradeData()

      axios.put(this.BASE_URL + "/api/userSave", {
        username: this.$cookies.get("username"),
        counter: Number(currentCounter),
        counterRate: Number(currentRate),
        upgradeBoxes: JSON.stringify(upgradeData)
      }, {
        withCredentials: true
      })
      .then(response => {
        console.log("UPDATE RESPONSE")
        console.log(response)
      })
      .catch(response => {
        console.log("UPDATE ERROR")
        console.log(response)
      })
    }
  }

}
</script>

<!-- Scoped: you will only style the component-->
<style scoped>
  .clicker{
    width: 40%;
    float: left;
  }

  .upgrade{
    width: 60%;
    float: left;
  }
</style>
