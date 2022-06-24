<template>
    <div class="clickerContainer" @click="incrementCounter">
        <img id="clicker" src="../assets/ClickerImage.png" alt="Clicker Image" class="clickerImage">
        <h1>Click!</h1>
    </div>

</template>

<script>

export default({
    methods: {
        incrementCounter(){
            this.$store.commit('increment')
        }
    },
})
</script>

<style scoped>

.clickerContainer {
    background-color: black;
    width: 80%;
    border-radius: 1em;
    transition: width 0.01s;
    transition: border-radius 0.1s;
    box-shadow: 0px 10px 10px black;
}

.clickerImage{
    width: 100%;
    border-radius: 1em;
    user-select: none;
}

h1 {
    margin: 0;
    height: 0%;
    color: white;
    user-select: none;
}
</style>