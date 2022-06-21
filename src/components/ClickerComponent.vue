<template>
    <h1>Clicker</h1>
    <img src="../assets/logo.png" alt="Clicker Image" class="clickerImage" @click="incrementCounter" >
</template>

<script>

export default({
    methods: {
        incrementCounter(){
            this.$store.commit('increment')
        }
    }
})
</script>

<style scoped>
*{
    background-color: bisque;
    border: 4px dotted black;
}
.clickerImage{
    border: 2px solid black;
    border-radius: 1rem;
}
</style>