<template>
    <div class="header">
        <img src="../assets/MonstersAtHomeBanner.png" alt="MonstersAtHomeBanner" class="banner">
        <nav>
            <h1>Home</h1>
            <h1 @click="goToProfile">Profile</h1>
        </nav>
    </div>
    <div class="values" >
        <img src="../assets/SmallMonster.png" class="smallMonster">
        <h3 class="monsterCounter" id="Monsters">You have {{ this.counter }} Monsters</h3>
        <h3 class="monstersPerSecond" > and gain {{ this.counterRate }} per second</h3>
    </div>
</template>

<script>

import { mapGetters } from "vuex"

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
        goToProfile() {
            this.$router.push("/profile");
        }
    }
})
</script>

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


.values {
    width: 100%;
    position: sticky;
    align-self: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    top: 0;
    background-color: black;
    text-align: center;
    margin: 0;
    padding: 0;
}

.smallMonster {
    padding: 0;
    margin: 0;
    width: 1em;

}

.values * {
    padding: 0.2em;
    margin: 0.1em;
}

.monstersPerSecond {
    padding: 0;
}
</style>