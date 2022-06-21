<template>
    <h1> Monsters At Home! </h1>
    <div class="clicker">
        <h3> Clicker: {{ this.counter }}</h3>
        <h3>Clicker Rate: {{ this.counterRate }}</h3>
    </div>
    <div class="show">
        <h3 @click="logoutUser"> Username: {{this.username}}</h3>
    </div>
</template>

<script>

import { mapGetters } from "vuex"
import axios from "axios"

export default({
    data(){
        return {
            username: this.$cookies.get("username")
        }
    },
    computed: {
        ...mapGetters({
            counter: 'getCounter',
            counterRate: 'getCounterRate',
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
        }
    }
})
</script>

<style scoped>
*{
    color: black;
}

.clicker{
    width: 20%;
    text-align: left;
    padding-left: 1%;
}

.show{
    width: 20%;
    padding-left: 1%;
    text-align: left;
}

</style>