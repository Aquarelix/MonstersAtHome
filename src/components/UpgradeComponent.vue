<template>
    <h1>Richtig am Upgraden hier</h1>

    <div v-for="(upgrade) in this.allUpgrades" :key="upgrade" >
        <UpgradeableItem class="upgrade" :upgradeId="upgrade.id" :name="upgrade.name" :startingCost="upgrade.startingCost" 
        :costIncrease="upgrade.costIncrease" :itemCount="upgrade.itemCount" :counterRate="upgrade.counterRate" :image="upgrade.image"></UpgradeableItem>
    </div>

</template>

<script>
import UpgradeableItem from "./UpgradeableItem.vue"
import axios from "axios"

export default({
    data () {
        return {
            allUpgradesData: [],
            BASE_API_URL: process.env.VUE_APP_BASE_API_URL
        }
    },
    async created() {
        this.allUpgradesData = await this.getAllUpgrades();

        setInterval(() => {
            const count = Number(this.$store.state.count)
            const counterRate = Number(this.$store.state.counterRate)
            var newCount = (count + counterRate).toFixed(2)

            this.$store.state.count = newCount
        }, 1000)


    },
    computed: {
        allUpgrades() {
            return this.allUpgradesData;
        }
    },
    components: {
        UpgradeableItem
    },
    methods: {
        getAllUpgradeData(){      
            let allUpgrades = document.getElementsByClassName("hiddenInfos");
            let allUpgradesJSON = [];
            
            if(allUpgrades.length < 0)
                return;

            for(let i = 0; i < allUpgrades.length; i++){
                console.log(allUpgrades[i])
                if(allUpgrades[i])
                    allUpgradesJSON.push(JSON.parse(allUpgrades[i].innerHTML));
            }

            return allUpgradesJSON;
        },
        async loadUpgrades(){
            return await axios.get(this.BASE_API_URL + "/api/upgrades", {
                withCredentials: true
            })
            .then(response => {
                console.log(response.data);
                //this.allUpgrades = response.data;
                return response.data
            })
            .catch(err => {
                if(err.response){
                    console.log(err.response.data)
                    console.log("ErrorMessage: " + err.response.data.message)
                }

                this.$router.push("/login")
            })
        },
        async GetUserData(){
            console.log("Getting User DATA!");

            // Get the users data
            return await axios.post(this.BASE_API_URL + "/api/userSave", {
                username: this.$cookies.get("username")
                },{
                    withCredentials: true
                })
                .then( (response) => {
                const userData = response.data;

                // If userdata exists -> set counter and counterRate
                if(userData){
                    this.$store.state.count = userData.counter;
                    this.$store.state.counterRate = userData.counterRate;

                    if(userData.upgradeBoxes){
                        console.log(userData.upgradeBoxes)
                        console.log(JSON.parse(userData.upgradeBoxes))
                        return JSON.parse(userData.upgradeBoxes);
                    }
                    else{
                        this.loadUpgrades();
                    }

                }
                console.log(userData);
                })
                .catch( (response) => {
                console.log(response);
                
                // Set Variables
                this.$store.state.count = 0;
                this.$store.state.counterRate = 0;
                
                // if api returns forbidden -> token is missing
                if(response.status == 403)
                    this.$router.push("/login")
                })
        },
        async getAllUpgrades(){
            console.log("Getting all Upgrades: ")
            const userSave = await this.GetUserData();
            const upgrades = await this.loadUpgrades();
            
            console.log(userSave)
            console.log(upgrades)

            for(let i = 0; i < upgrades.length; i++){
                for(let j = 0; j < userSave.length; j++){
                    if(!userSave[i])
                        continue;

                    if(upgrades[i].id === userSave[i].id){
                        console.log("SAME ID: " + i)
                        upgrades[i].startingCosts = userSave[i].currentCosts;
                        upgrades[i].itemCount = userSave[i].itemCounter;
                    }
                }
            }

            return upgrades;
        }

    }
})
</script>


<style scoped>

* {
    border: 5px solid pink;
}
</style>