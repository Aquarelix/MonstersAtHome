<template>
    <h1>Clicker</h1>
    <img src="../assets/logo.png" alt="Clicker Image" @click="incrementCounter" class="clickerImage">
</template>

<script>

export default({
    setup() {
        
    },
    methods: {
        incrementCounter(){
            this.$store.commit('increment')
        }
    }
})
</script>

<style scoped>
.clickerImage{
    border: 2px solid black;
    border-radius: 1rem;
}
</style>

