<template>
    <h1> Monsters At Home! </h1>
    <h3 class="clicker"> Clicker: {{ this.$store.state.count }}</h3>
</template>

<script>

export default({
    setup() {
        
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