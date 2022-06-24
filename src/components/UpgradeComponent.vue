<template>
    <div class="flexBox" v-for="upgrade in allUpgrades" :key="upgrade" >
        <UpgradeableItem class="flexBoxItem" :id="upgrade.id" :name="upgrade.name" :startingCost="upgrade.startingCost" 
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
    mounted() {
        setInterval(() => {
            const count = Number(this.$store.state.count)
            const counterRate = Number(this.$store.state.counterRate)
            this.$store.state.count = count + counterRate
        }, 1000)

        this.loadUpgrades();
    },
    components: {
        UpgradeableItem
    },
    methods: {
        loadUpgrades: async function(){
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
    },
    created: async function (){
        // Get User Data and replace with his values
        this.$store.state.count = 0;
        this.$store.state.counterRate = 0;
    }
})
</script>


<style scoped>
.flexBox {
    width: 400px;
    height: 400px;
    margin: 0.5em;
    user-select: none;
}

.flexBoxItem:hover {
    margin-top: 2em;
}
</style>