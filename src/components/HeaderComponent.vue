<template>
    <h1> Monsters At Home! </h1>
    <div class="clicker">
        <h3> Clicker: {{ this.counter }}</h3>
        <h3>Clicker Rate: {{ this.counterRate }}</h3>
    </div>
    <div class="show">
        <h3> Username: {{this.username}}</h3>
    </div>
</template>

<script>

import { mapGetters } from "vuex"

export default({
    data(){
        return {}
    },
    computed: {
        ...mapGetters({
            counter: 'getCounter',
            counterRate: 'getCounterRate',
            username: 'getUsername'
        })
    },

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