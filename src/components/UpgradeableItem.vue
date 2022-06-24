<template>
    <div class="box" @click="increaseLocalCounter">
        <img :src="this.img" alt="">
        <p> Name: {{this.name}} | Costs: {{this.currentCosts}} | Counter: {{this.itemCounter}}</p>
        <p hidden class="hiddenInfos">{ "id": {{this.upgradeId}}, "itemCounter": {{this.itemCounter}}, "currentCosts": {{this.currentCosts}}}</p>
    </div>
</template>

<script>
export default({
    props: {
        upgradeId: Number,
        name: String,
        startingCost: Number,
        costIncrease: Number,
        itemCount: Number,
        image: String,
    },
    data(){
        return {
            img: "", 
            currentCosts: this.startingCost,
            itemCounter: this.itemCount,
            interval: null
        }
    },
    created(){
        if(!this.itemCount)
            this.itemCounter = 0
            
        try{
            this.img = require('../assets/' + this.image);

        }catch(error){
            this.img = require('../assets/logo.png')
        }
            
    },
    methods: {
        increaseLocalCounter() {
            console.log("Clicked Item!")
            if(Number(this.$store.state.count) >= Number(this.currentCosts)){
                this.$store.state.count = (this.$store.state.count - this.currentCosts).toFixed(2)
                this.currentCosts = (this.currentCosts * 1.10).toFixed(2)
                this.$store.state.counterRate++;
                this.itemCounter++
            }
        }
    }
})
</script>


<style scoped>
img{
    width: 10%;
}
.box{
    border: 2px solid black;
    width: 50%;
    margin: 2% auto;
}
</style>