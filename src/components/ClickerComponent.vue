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
    display: flex;
    align-items: center;
    align-self: center;
    box-shadow: 0px 10px 10px black;
    user-select: none;
    cursor: pointer;
    width: 80%;
    border-radius: 1em;
    margin-top: 1em;
    background-color: #ebede9;
}

.clickerContainer img {
    width: 100%;
}

.clickerContainer:hover {
    box-shadow: 0px 0px 10px white;
}

</style>