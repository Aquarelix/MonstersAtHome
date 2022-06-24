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
  name: 'HomeView',
  components: {
    HeaderComponentVue,
    ClickerComponentVue,
    UpgradeComponentVue
  },
  beforeMount() {
    this.GetUserData()
  },
  methods: {
    GetUserData: async function (){
      console.log("Getting User DATA!");

      // Get the users data
      await axios.post(process.env.VUE_APP_BASE_API_URL + "/api/userSave", {
            username: this.$cookies.get("username")
          },{
              withCredentials: true
          }).then( (response) => {
            console.log(response);
          }).catch( ({response}) => {
            console.log(response);
            this.$router.push("/");
          })
      }
  }

}
</script>

<!-- Scoped: you will only style the component-->
<style scoped>
.home {

}

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
