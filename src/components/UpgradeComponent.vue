<template>
    <h1>Richtig am Upgraden hier</h1>
    <UpgradeableItem name="Omi" img="logo.png" initalCost="4" ></UpgradeableItem>
    <UpgradeableItem name="Henk" img="logo.png" initalCost="10" ></UpgradeableItem>

</template>

<script>
import UpgradeableItem from "./UpgradeableItem.vue"

export default({
    data () {
        return {

        }
    },
    components: {
        UpgradeableItem
    },
    mounted() {
        setInterval(() => {
            this.$store.state.count = (Number(this.$store.state.count) + Number(this.$store.state.counterRate)).toFixed(2)
        }, 1000)
    }
})
</script>


<style scoped>

* {
    border: 5px solid pink;
}
</style>