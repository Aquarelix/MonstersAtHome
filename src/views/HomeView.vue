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
  name: 'HomeView',
  components: {
    HeaderComponentVue,
    ClickerComponentVue,
    UpgradeComponentVue
  },
  created() {
    this.GetUserData();

    setInterval(this.SaveUserData(), 10000);
  },
  methods: {
    async GetUserData(){
      console.log("Getting User DATA!");

      // Get the users data
      await axios.post(process.env.VUE_APP_BASE_API_URL + "/api/userSave", {
          username: this.$cookies.get("username")
        },{
            withCredentials: true
        }).then( (response) => {
          const userData = response.data;

          // If userdata exists -> set counter and counterRate
          if(userData){
            this.$store.state.count = userData.counter;
            this.$store.state.counterRate = userData.counterRate;
          }
          console.log(userData);
        }).catch( (response) => {
          console.log(response);
          
          // Set Variables
          this.$store.state.count = 0;
          this.$store.state.counterRate = 0;
          
          // if api returns forbidden -> token is missing
          if(response.status == 403)
            this.$router.push("/login")
        })
    },
    async SaveUserData(){
      console.log("SAVING USER DATA!")
      const userData = {
        username: this.$cookies.get("username"),
        counter: this.$store.state.count,
        counterRate: this.$store.state.counterRate,
        upgradeBoxes: "hallo"
      };

      const allUpgrades = UpgradeComponentVue.methods.getAllUpgrades();
      if(allUpgrades){
        console.log("allUpgrades:")
        console.log(allUpgrades)
      }

      if(userData){
        console.log("UserData:")
        console.log(userData)
      }


      /*
      await axios.put(process.env.VUE_APP_BASE_API_URL + "/api/userSave", {
        userData
      }).then(response => {
        console.log("SaveUserData Response")
        console.log(response)
      }).catch(response => {
        console.log("ERROR Happened SaveUserData")
        console.log(response)
      })
      */
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
