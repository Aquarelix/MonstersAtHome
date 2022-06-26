<template>
    <HeaderComponentVue />
    <div class="profileContainer">
        <div class="statsContainer">
        <h1 id="stats">Stats</h1>
        <h1>Times Clicked: {{this.totalClicks}}</h1>
            <h1>Clicked on Clicker: {{this.clicks}}</h1>
            <h1>Clicked on Monster: {{this.monsterClicks}}</h1>
        <h1>Spent on Monsters: {{this.monstersSpent}}</h1>
        <h1>Time spent: {{this.timeOnWebsite}}</h1>
        <h1>Created: {{this.userCreationDate}}</h1>

        <div class="logout" >
            <button @click="logoutUser"> Logout: {{this.$cookies.get("username")}}</button>
        </div>
        </div>

    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import axios from "axios"
import { mapGetters } from "vuex"
export default {
    data(){
        return{
        }
    },
    mounted(){
        this.$store.state.OnHomeView = false;
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
        goToHome() {
            this.$router.push("/");
        },
    },
    components: {
        HeaderComponentVue,
    },
    computed: {
        ...mapGetters({
            totalClicks: 'getIntegerTotalClicks',
            clicks: 'getIntegerClicks',
            monsterClicks: 'getIntegerMonsterClicks',
            monstersSpent: 'getIntegerMonstersSpent',
            timeOnWebsite: 'getTimeOnWebsite',
            userCreationDate: 'getUserCreationDate'
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

#stats {
    font-size: xx-large;
    text-align: center;
    color: aqua;
    margin: 0;
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
    text-align: left;
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
    padding: 2em;
    border: 1em solid #ebede9;
    border-radius: 2em;
    margin-top: 2em;
}

button {
    color: black;
    font-size: large;
    background-color: #ebede9;
    text-decoration: none;
    border: 0;
    border-radius: 1em;
    margin-top: 0.5em;
    margin-bottom: 0;
    padding-bottom: 0;
    padding: 1em;
    cursor: pointer;
    font-family: Alagard;
}

button:hover {
    background-color: black;
    color: #ebede9;
    box-shadow: 0px 0px 0.5em white;
}

@media only screen and (max-width: 600px) {
    h1 {
        font-size: medium;
    }
}

</style>
