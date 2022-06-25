<template>
    <div class="itemBox" @click="increaseLocalCounter" v-if="isUnlocked">
        <h1>{{this.name}}</h1>
        <img :src="this.img" alt="" class="monsterImage">
        <div class="monsterValues">
            <h2> Costs: {{this.shownCurrentCost}} </h2>
            <h2>{{this.name}}s: {{this.itemCounter}} Value: {{this.counterRate}}</h2>
            <div class="notEnoughMoney" v-if="onNotEnoughMoney">
                <span>No enough Monsters!</span>
            </div>
            <p hidden class="hiddenInfos">{ "id": {{this.upgradeId}}, "itemCounter": {{this.itemCounter}}, "currentCosts": {{this.currentCosts}}}</p>
        </div>
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
        counterRate: Number,
        image: String,
    },
    data(){
        return {
            isUnlocked: false,
            img: "", 
            currentCosts: this.startingCost,
            itemCounter: this.itemCount,
            shownCurrentCost : 0,
            interval: null,
            onNotEnoughMoney: false,
        }
    },
    beforeMount() {
        // Set the Intervall to check if a mob is unlocked
        this.inverval = setInterval(() => {
            this.unlockCheck();
        }, 1000)

        // Set the Cost for a mob to show
        this.shownCurrentCost = parseInt(this.startingCost)
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
        unlockCheck() {
            if (Number(this.$store.state.count) >= Number(this.startingCost))
            {
                this.isUnlocked = true;
                clearInterval(this.interval)
            }
        },
        increaseLocalCounter() {
            // Can the Monster be bought?
            if(Number(this.$store.state.count) >= Number(this.currentCosts)){
                // Increase Cost, Put it in Show, Decrease the Monster counter, Increase monsters per second
                this.$store.commit('decreaseCounter', this.currentCosts)
                this.currentCosts = Number((this.currentCosts * (1 + (this.costIncrease / 100.0))))
                this.shownCurrentCost = parseInt(this.currentCosts)
                this.$store.commit('increaseCounterRate', this.counterRate)
                this.itemCounter++;
                this.onNotEnoughMoney = false;
            }
            else
            {
                this.onNotEnoughMoney = true;
            }
        }
    }
})
</script>
<style scoped>

.monsterImage {
    margin-top: 2.5em;
    height: 45%;
}

.itemBox:active .monsterImage {
    height: 40%;
    padding-top: 5%;
}

.itemBox {
    background-image: url("../assets/GridBG.png");
    background-size: cover;
    width: 400px;
    height: 400px;
    margin: 1em;
    border-radius: 1em;
    background-color: black;
    transition: border-radius 0.3s, background-color 0.3s, width 0.3s, height 0.3s;
    box-shadow: 0px 10px 10px black;
    user-select: none;
    cursor: pointer;
}

.itemBox:hover {
    box-shadow: 1px 1px 5px white;
    border-radius: 3em;
    width: 390px;
    height: 390px;
}

.monsterValues {
    color: white;
    transition: color 0.5s;
    padding-bottom: 1em;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
}

.monsterValues * {
    padding: 0;
    margin: 0.2em;
}

h1 {
    padding-top: 0.2em;
    height: 1%;
    z-index: 1000;
}

h1:hover, h2:hover {
    color: #4c85bb;
}

.notEnoughMoney {
    text-align: center;
    padding: 0;
    margin: 0;
    color: rgb(236, 154, 102);
}

@media only screen and (max-width: 600px) {
    .itemBox {
        width: 150px;
        height: 150px;
    }

    .itemBox * {
        font-size: small;
    }

    .itemBox:hover {
        box-shadow: 1px 1px 5px white;
        border-radius: 3em;
        width: 160px;
        height: 160px;
    }

    .monsterImage {
        margin: 0;
        margin-top: 0.5em;
        height: 45%;
    }
}

</style>