<template>
<div class="wrapper">
    <div class="header">
        <img src="../assets/MonstersAtHomeBanner.png" alt="MonstersAtHomeBanner" class="banner">
    </div>
    <div class="login" v-if="onLogin">
        <h1 id="loginTitle">Login</h1>
        <input type="text" id="usernameLogin" v-model="username" placeholder="Username"> 
        <input type="password" id="passwordLogin" placeholder="Password" v-model="password" v-on:keypress.enter="ValidateLogin()">
        <div class="errorMessage" v-if="onError">
            {{this.errorMessage}}
        </div>
        <button class="submitButton" @click="ValidateLogin"> Submit </button>
        <h3 class="registerHere" @click="ToggleLogin"> Register here!</h3>
    </div>

    <div class="register" v-else>
        <h1>Register</h1>
        <input type="text" id="usernameLogin" v-model="username" placeholder="Username"> 
        <input type="password" id="passwordLogin" placeholder="Password" v-model="password" v-on:keypress.enter="Registeruser()">
        <div class="errorMessage" v-if="onError">
            {{this.errorMessage}}
        </div>
        <button class="submitButton" @click="Registeruser"> Submit </button>
        <h3 class="registerHere" @click="ToggleLogin"> Login here!</h3>
    </div>
</div>

</template>

<script>
import axios from 'axios';

export default{
    data () {
        return  {
            username: "",
            password: "",
            onLogin: true,
            onError: false,
            errorMessage: "",
            BASE_API_URL: process.env.VUE_APP_BASE_API_URL,
        }
    },
    created(){
        this.$cookies.remove("isLoggedIn")
        this.$cookies.remove("username")
        this.$store.commit("resetAllVariables")
    },
    methods: {
        ValidateLogin: async function (){
            console.log("Validating Login")
            this.SendAuthenticationRequest("/auth/login");
        },
        Registeruser: async function () {
            console.log("Register User")
            this.SendAuthenticationRequest("/auth/register")
        },
        ToggleLogin() {
            // Toggle login bool
            this.onLogin = !this.onLogin

            // Reset all errors
            this.errorMessage = "";
            this.onError = false;
        },
        SendAuthenticationRequest: async function (endpoint){
            await axios.post(this.BASE_API_URL + endpoint, {
                username: this.username,
                password: this.password
            }, {
                withCredentials: true,
            })
            .then((response) =>  {
                console.log("LOGIN RESPONSE:")
                console.log(response)
                this.$cookies.set("isLoggedIn", true);
                this.$cookies.set("username", response.data.username);
                this.$router.push("/");
            })
            .catch(({response}) => {
                this.HandleError(response);
            })
        },
        HandleError(response){
            var errorMessage = "";
            if(!response)
                return;
            
            if(response.status >= 500)
                errorMessage = "Connection error"

            if(response.data.message)
                errorMessage = response.data.message;

            console.log(response);
            this.onError = true;
            this.errorMessage = errorMessage;
        }
    }
}
</script>

<style scoped>
* {
    font-size: large;
}

h1 {
    padding-top: 1em;
    color: white;
    font-size: xx-large;
}

.wrapper{
    color: white;
}

.banner {
    width: 100%;
}

.wrapper * {
    margin: auto;
    text-align: center;
    max-width: 80%;
    min-width: 80%;
}

.login, .register{
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 2em;
}

#usernameLogin, #passwordLogin {
    font-family: Alagard;
    margin-top: 1em;
    padding-top: 1em;
    padding-bottom: 1em;
    color: black;
    border-radius: 1em;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    background-color: #eee;
    max-width: 50%;
}

.submitButton {
    font-family: Alagard;
    color: black;
    margin-top: 3em;
    padding-top: 1em;
    border-radius: 1em;
    padding-bottom: 1em;

    border: 0;
    background-color: white;
    max-width: 50%;
}

.submitButton:hover {
    background-color: black;
    color: white;
}

.submitButton:active {
    box-shadow: 0em 0em 0.1em white;
}

.registerHere {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 2em;
    margin-top: 1em;
}

.registerHere:hover {
    cursor: pointer;
    text-decoration: underline;
}

.errorMessage{
    margin-top: 1em;
    color: red;
}

@media only screen and (max-width: 600px) {
    #usernameLogin, #passwordLogin {
        max-width: 80%;
        min-width: 80%;
    }

    .submitButton
    {
        max-width: 50%;
        min-width: 50%;
    }
}
</style>