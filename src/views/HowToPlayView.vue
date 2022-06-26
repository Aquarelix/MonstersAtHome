<template>
    <HeaderComponentVue />
    <div class="container">
        <div class="guide">
            <h1>How do you play?</h1>
            <p>
                By clicking on the large button in the middle, you increase your "Monster counter". Once that reaches a certain value you unlock a new monster.
                For the "Bob" you only need 10 Monsters. But for others you need alot more (into the Millions).
            </p>
            <h1>How to gain more Monsters</h1>
            <p>
                By increasing the Level of a monster you increase your "Monster per Second" - Meter, this is simply a value by wich your monster count
                increases each second! Each Monster has its own value. The more expensive they get the more value they bring!
            </p>
            <h3> What are the "?"</h3>
            <p> The "?" indicates that you didn't unlock the monster yet.</p>
            <h3> What are the Endgoals?</h3>
            <p> 
                First: To get every Monster!
                Second: To push your Monster counter to infinity!
            </p>
        </div>
    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue'
export default {
    data(){
        return{
        }
    },
    components: {
        HeaderComponentVue,
    },
}
</script>

<!-- Scoped: you will only style the component-->
<style scoped>

.container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: left;
    align-self: center;
    justify-content: center;
    padding-left: 20%;
    padding-right: 20%;
}

.guide {
    font-size: large;
}
</style>
