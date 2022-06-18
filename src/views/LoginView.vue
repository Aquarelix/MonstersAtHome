<template>
<div class="wrapper">
    <div class="login" v-if="onLogin">
        <h1>Login</h1>
        <input type="text" id="usernameLogin" v-model="username" placeholder="Username"> 
        <br>
        <input type="password" id="passwordLogin" placeholder="Password" v-model="password" v-on:keypress.enter="ValidateLogin()">
        <br>
        <div class="errorMessage" v-if="onError">
            {{this.errorMessage}}
        </div>
        <button @click="ValidateLogin"> Submit </button>
        <br>
        <label @click="ToggleLogin"> No Account? Register here</label>
    </div>

    <div class="register" v-else>
        <h1>Register</h1>
        <input type="text" id="usernameLogin" v-model="username" placeholder="Username"> 
        <br>
        <input type="password" id="passwordLogin" placeholder="Password" v-model="password" v-on:keypress.enter="Registeruser()">
        <br>
        <div class="errorMessage" v-if="onError">
            {{this.errorMessage}}
        </div>
        <button @click="Registeruser"> Submit </button>
        <br>
        <label @click="ToggleLogin"> Already have a Acount? Login here</label>
    </div>
</div>

</template>

<script>


import axios from 'axios'

export default{
    data () {
        return  {
            username: "",
            password: "",
            onLogin: true,
            onError: false,
            errorMessage: "",
        }
    },
    methods: {
        ValidateLogin: async function (){
            console.log("Validating Login")
            await axios.post("http://192.168.0.20:3000/auth/login", {
                username: this.username,
                password: this.password
            })
            .then(() => {
                this.$router.push("/");

            })            
            .catch(error => {
                this.onError = true;
                this.errorMessage = error.response.data.message;
            })
        },
        Registeruser: async function () {
            console.log(this.username + " | " + this.password)
            
            await axios.post("http://192.168.0.20:3000/auth/register", {
                username: this.username,
                password: this.password
            })
            .then(() =>  {
                    this.$router.push("/");
            })
            .catch(error => {
                this.onError = true;
                this.errorMessage = error.response.data.message;
            })
        },
        ToggleLogin() {
            this.onLogin = !this.onLogin
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

    .login, .register{
        border: 2px solid black;
        border-radius: 10px;
        max-width: 40%;
        margin: auto;
        padding: 2% 5%;
    }

    .errorMessage{
        color: red;
    }
</style>