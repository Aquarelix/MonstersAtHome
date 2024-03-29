<template>
    <div v-for="(upgrade) in this.allUpgrades" :key="upgrade" class="upgrades">
        <UpgradeableItem class="upgrade" 
            :upgradeId="upgrade.id" :name="upgrade.name" :startingCost="upgrade.startingCost" 
            :costIncrease="upgrade.costIncrease" :itemCount="upgrade.itemCount" 
            :counterRate="upgrade.counterRate" :image="upgrade.image">
        </UpgradeableItem>
    </div>
</template>

<script>
import UpgradeableItem from "./UpgradeableItem.vue"
import axios from "axios"

export default({
    data () {
        return {
            allUpgradesData: [],
            BASE_API_URL: process.env.VUE_APP_BASE_API_URL,
        }
    },
    async created() {
        // Load all Upgrades
        this.allUpgradesData = await this.getAllUpgrades();
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
        async getAllUpgrades(){
            const userSave = await this.GetUserData();
            const upgrades = await this.loadUpgrades();

            // Upgrades are missing -> no data
            if(!upgrades)
                return undefined;

            // User has no save -> no need to change
            if(!userSave)
                return upgrades;

            for(let i = 0; i < upgrades.length; i++){
                for(let j = 0; j < userSave.length; j++){
                    
                    // userSave doesn't exist
                    if(!userSave[i])
                        continue;
                    
                    // Only change the Data if both upgrades are the same
                    if(upgrades[i].id === userSave[i].id){
                        upgrades[i].startingCost = userSave[i].currentCosts;
                        upgrades[i].itemCount = userSave[i].itemCounter;
                    }
                }
            }
            return upgrades;
        },
        async loadUpgrades(){
            return await axios.get(this.BASE_API_URL + "/api/upgrades", {
                withCredentials: true
            })
            .then(response => {
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
            // Get the users data
            return await axios.get(this.BASE_API_URL + "/api/userSave",{
                    withCredentials: true
                })
                .then( (response) => {
                const userData = response.data;

                // If userdata exists -> set counter and counterRate
                if(userData){
                    // Set the User data only on the first load of the website
                    if(!this.$store.state.isFirstLoadDone){
                        this.$store.state.count = userData.counter;
                        this.$store.state.counterRate = userData.counterRate;
                        this.$store.state.isFirstLoadDone = true;
                    }

                    // Return the UpgradeBoxes
                    if(userData.upgradeBoxes){
                        return JSON.parse(userData.upgradeBoxes);
                    }
                }
                })
                .catch( (response) => {
                    // Set User variables
                    this.$store.state.count = 0;
                    this.$store.state.counterRate = 0;
                    
                    // if api returns forbidden -> wrong token
                    if(response.status == 403)
                        this.$router.push("/login")
                })
        },
        getAllUpgradeData(){      
            // Get every info from the HTML Document
            let allUpgrades = document.getElementsByClassName("hiddenInfos");
            let allUpgradesJSON = [];
            
            if(allUpgrades.length < 0)
                return;

            // Make a 
            for(let i = 0; i < allUpgrades.length; i++){
                if(allUpgrades[i])
                    allUpgradesJSON.push(JSON.parse(allUpgrades[i].innerHTML));
            }

            return allUpgradesJSON;
        },



    }
})
</script>


<style scoped>

.upgrades {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-self: center;
}
</style>