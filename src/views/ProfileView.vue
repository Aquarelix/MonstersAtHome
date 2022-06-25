<template>
    <HeaderComponentVue />
    <div class="profileContainer">
        <div class="statsContainer">
        <h1>Stats</h1>
        <h1>Times clicked: {{this.clicks}}</h1>
        <h1>Overall Monsters spent:  </h1>
        <h1>Time spent here: </h1>
        </div>
        <div class="logout" >
            <button @click="logoutUser"> Logout: {{this.username}}</button>
        </div>
    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import axios from "axios"
import { mapGetters } from "vuex"
export default {
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
        goToHome() {
            this.$router.push("/");
        },
    },
    components: {
        HeaderComponentVue,
    },
    computed: {
        ...mapGetters({
            clicks: 'getIntegerClicks',
            monstersSpent: 'getIntegerMonstersSpent',
        })
    },
}
</script>

<!-- Scoped: you will only style the component-->
<style scoped>
.header {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.banner {
    width: 50%;
}

nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0;
    margin: 0;
    background-color: #ebede9;
    user-select: none;
    width: 100%;
}

h1 {
    margin: 0.2em;
    font-weight: bolder;
}

nav * {
    padding: 1em;
    color: #172038;
}

nav *:hover {
    background-color: #172038;
    color: #ebede9;
    border-radius: 1em;
}

.profileContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.statsContainer {
    padding: 10em;
    border: 1em solid #ebede9;
    border-radius: 2em;
    border-top: 0em;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

button {
    color: black;
    font-size: large;
    background-color: #ebede9;
    text-decoration: none;
    border: 0;
    border-radius: 1em;
    padding: 1em;
    flex-direction: row;
}

</style>
