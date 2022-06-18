<template>
    <div class="box" @click="increaseLocalCounter">
        <img :src="this.imgPath" alt="">
        <p> Name: {{this.name}} | Costs: {{this.currentCosts}} | Counter: {{this.itemCounter}}</p>

    </div>
</template>

<script>
export default({
    props: {
        id: Number,
        name: String,
        startingCost: Number,
        costIncrease: Number,
        img: String,
    },
    data(){
        return {
            //imgPath: require('../assets/' + this.img), 
            currentCosts: this.startingCost,
            itemCounter: 0,
            interval: null
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