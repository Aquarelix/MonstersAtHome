<template>
    <h1>Richtig am Upgraden hier</h1>

    <div v-for="upgrade in allUpgrades" :key="upgrade">
        <UpgradeableItem :id="upgrade.id" :name="upgrade.name" :startingCost="upgrade.startingCost" 
        :costIncrease="upgrade.costIncrease" :counterRate="upgrade.counterRate" :image="upgrade.image"></UpgradeableItem>
    </div>

</template>

<script>
import UpgradeableItem from "./UpgradeableItem.vue"
import axios from "axios"

export default({
    data () {
        return {
            allUpgrades: [],
            BASE_API_URL: process.env.VUE_APP_BASE_API_URL
        }
    },
    created() {
        setInterval(() => {
            const count = Number(this.$store.state.count)
            const counterRate = Number(this.$store.state.counterRate)
            var newCount = (count + counterRate).toFixed(2)

            this.$store.state.count = newCount
        }, 1000)

        // Get User Data and replace with his values
        this.$store.state.count = 0;
        this.$store.state.counterRate = 0;

        this.loadUpgrades();
    },
    components: {
        UpgradeableItem
    },
    methods: {
        async loadUpgrades(){
            await axios.get(this.BASE_API_URL + "/api/upgrades", {
                withCredentials: true
            })
            .then(response => {
                console.log(response.data);
                this.allUpgrades = response.data;
            })
            .catch(err => {
                if(err.response.data){
                    console.log(err.response.data)
                    console.log("ErrorMessage: " + err.response.data.message)
                }

                this.$router.push("/login")
            })
        }
    }
})
</script>


<style scoped>

* {
    border: 5px solid pink;
}
</style>