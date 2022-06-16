<template>
<div class="wrapper">
    <div class="login">
        <h1>Login</h1>
        <input type="text" id="usernameLogin" v-model="username" placeholder="Username"> 
        <br>
        <input type="password" id="passwordLogin" placeholder="Password" v-model="password" v-on:keypress.enter="SubmitAuthentication()">
    </div>
</div>

</template>

<script>

const axios = require("axios")

export default{
    data () {
        return  {
            username: "",
            password: "",
        }
    },
    methods: {
        SubmitAuthentication() {
            console.log(this.username + " | " + this.password)

            axios.post("https://192.168.0.20:3000/api/users")
                .then(response => {
                    console.log(response)
                }
            )
        }
    }
}
</script>

<style scoped>
    *{
        margin: 10px auto;
    }

    .wrapper{
        display: flex;
        height: 100%;
    }

    .login{
        border: 2px solid black;
        border-radius: 10px;
        max-width: 40%;
        margin: auto;
        padding: 2% 5%;
    }
</style>