<template>
  <router-view>

  </router-view>
</template>

<script>

export default {
  mounted(){
    const isLoggedIn = JSON.parse(this.$cookies.get("isLoggedIn")) // convert string to bool
    
    // Check if user is logged in
    if(!isLoggedIn)
      this.$router.push("/login")
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