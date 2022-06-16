<template>
  <HomeView v-if="this.$store.state.isAuthenticated"/>
  <LoginView v-else/>
</template>

<script>
import LoginView from './views/LoginView.vue'
import HomeView from './views/HomeView.vue'

export default {
  mounted() {

  },
    components: {
    LoginView,
    HomeView
}
}
</script>

<style>
html, body, #app{
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>