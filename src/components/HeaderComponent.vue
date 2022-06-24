<template>
    <div class="header">
        <img src="../assets/MonstersAtHomeBanner.png" alt="MonstersAtHomeBanner" class="banner">
    </div>
    <div class="values" >
        <h3 class="monsterCounter" id="Monsters">Monsters: {{ this.counter }}</h3>
        <h3 class="monstersPerSecond" >Monsters per Second: {{ this.counterRate }}</h3>
    </div>
    <div class="logout" >
        <button @click="logoutUser"> Logout: {{this.username}}</button>
    </div>

</template>

<script>

import { mapGetters } from "vuex"
import axios from "axios"

export default({
    data(){
        return {
            username: this.$cookies.get("username"),
        }
    },
    computed: {
        ...mapGetters({
            counter: 'getIntegerCounter',
            counterRate: 'getIntegerCounterRate',
        })
    },
    methods: {
        logoutUser: async function (){
            await axios.get(process.env.VUE_APP_BASE_API_URL + "/auth/logout", {
                withCredentials: true
            }).then( response => {
                console.log(response);
                this.$router.push("/login");
            })
            .catch(err => {
                console.log(err);
            })
        },
        goToProfile() {
            this.$router.push("/profile");
        }
    }
})
</script>

<style scoped>

.header * {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.0);
    padding: 0;
    width: 100%;
}
img {
}

button {
    color: black;
    font-size: large;
    background-color: white;
    text-decoration: none;
    border: 0;
    border-radius: 1em;
    padding: 1em;
    flex-direction: row;
}

.values {
    width: 100%;
    position: sticky;
    align-self: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    background-color: black;
    border-radius: 1em;
    font-size: x-large;
    text-align: center;
    margin: 0;
    padding: 0;
}

.values * {
    padding: 0.2em;
    margin: 0.1em;
}

.monsterCounter {
}

.monstersPerSecond {
    padding: 0;
}
</style>