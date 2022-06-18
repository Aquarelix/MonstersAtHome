<template>
    <h1> Monsters At Home! </h1>
    <h3 class="clicker"> Clicker: {{ this.counter }}</h3>
    <h3 class="clicker"> Clicker Rate: {{ this.$store.state.counterRate }} /s</h3>
</template>

<script>

import { mapGetters } from "vuex"

export default({
    data(){
        return {}
    },
    computed: {
        ...mapGetters({
            counter: 'getCounter'
        })
    },

})
</script>

<style scoped>
*{
    color: black;
}

.clicker{
    text-align: left;
    padding-left: 1%;
}
</style>