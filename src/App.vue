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

    this.$store.state.startingTime = new Date();
  },
  methods: {
  }
}
</script>

<style>

html, body, #app{
  background-image: url("../src/assets/SiteBG.gif");
  background-size: cover;
  margin: 0em;
  padding: 0em;
  height: 100%;
  scrollbar-width: thin;
  scrollbar-color: white;
}

#app {
  font-family: Alagard;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}


@font-face {
  font-family: "PixelFont";
  src:local("PixelFont"), url("./assets/fonts/PixelFont.ttf") format("truetype")
}

@font-face {
  font-family: "Alagard";
  src:local("Alagard"), url("./assets/fonts/Alagard.ttf") format("truetype")
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