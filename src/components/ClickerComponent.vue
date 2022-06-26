<template>
    <div class="clickerContainer" @click="incrementCounter">
        <img src="../assets/ClickerImage.gif">
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
    user-select: none;
    cursor: pointer;
    width: 80%;
    border-radius: 1em;
    margin: 0;
    padding: 0;
    margin-top: 1em;
    background-color: #ebede9;
    transition: width 0.5s, box-shadow 0.2s, border-radius 0.2s;
}

.clickerContainer img {
    width: 100%;
    transition: width 0.2s;
}

.clickerContainer:hover {
    box-shadow: 0px 0px 10px white;
}

.clickerContainer:hover img {
    width: 95%;
}

.clickerContainer:active {
    width: 78%;
    border-radius: 2em;
    box-shadow: 0px 0px 20px white;
}

</style>