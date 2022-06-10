<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="ClickerComponent">
      <ClickerComponentVue />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ClickerComponentVue from '@/components/ClickerComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ClickerComponentVue
  }
}
</script>

<!-- Scoped: you will only style the component-->
<style scoped>
  .ClickerComponent{
    background-color: aqua;
  }
</style>
