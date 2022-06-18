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

export default {
  name: 'HomeView',
  components: {
    HeaderComponentVue,
    ClickerComponentVue,
    UpgradeComponentVue
  },
  mounted () {
    // API call
    // If Error 403 (Forbidden) -> router-link to /login
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
