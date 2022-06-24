<template>
    <div class="clickerContainer" @click="incrementCounter">
    
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
    box-shadow: 0px 10px 10px black;
    width: 100%;
    height: 15em;
    background: url("../assets/ClickerImage.png") no-repeat;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-size: contain;
    user-select: none;
}

.clickerContainer:hover {
    background: url("../assets/Tanu.gif")
}

.clickerContainer:active {
     background: url("../assets/Tanu.gif")
}

h1 {
    margin: 0;
    height: 0%;
    color: white;
    user-select: none;
}

@media only screen and (max-width: 800px) {
    .clickerContainer {
        background-size: 100%;
        height: 5em;
    }

}

</style>