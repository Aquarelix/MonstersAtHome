<template>
    <h1>Richtig am Upgraden hier</h1>
    <UpgradeableItem name="Omi" img="logo.png" initalCost="4" ></UpgradeableItem>
    <UpgradeableItem name="Henk" img="logo.png" initalCost="10" ></UpgradeableItem>

</template>

<script>
import UpgradeableItem from "./UpgradeableItem.vue"

export default({
    setup() {
        
    },
    components: {
        UpgradeableItem
    }
})
</script>


<style scoped>

* {
    border: 5px solid pink;
}
</style>