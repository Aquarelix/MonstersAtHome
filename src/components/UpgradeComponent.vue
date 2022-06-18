<template>
    <h1>Richtig am Upgraden hier</h1>
    <UpgradeableItem name="Omi" img="logo.png" initalCost="4" ></UpgradeableItem>
    <UpgradeableItem name="Henk" img="logo.png" initalCost="10" ></UpgradeableItem>

</template>

<script>
import UpgradeableItem from "./UpgradeableItem.vue"
import axios from "axios"

export default({
    data () {
        return {
            allUpgrades: [],
        }
    },
    components: {
        UpgradeableItem
    },
    created: async function (){
        // Get all existing Upgrades
        
        await axios.get("http://192.168.0.20:3000/api/upgrades", {
            withCredentials: true
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err.response.data)
                console.log("ErrorMessage: " + err.response.data.message)

                this.$router.push("/login")
            })


        // Get User Data and replace with his values
        this.$store.state.count = 0;
        this.$store.state.counterRate = 0;
    },
    mounted() {
        setInterval(() => {
            
            const count = Number(this.$store.state.count)
            const counterRate = Number(this.$store.state.counterRate)
            var newCount = (count + counterRate).toFixed(2)

            this.$store.state.count = newCount
        }, 1000)
    }
})
</script>


<style scoped>

* {
    border: 5px solid pink;
}
</style>