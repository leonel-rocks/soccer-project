<template>
    <div>
        <minus-circle v-on:click="decrementScore" fillColor="#FF0000"/> 
            {{ goalsScored }} 
        <plus-circle v-on:click="incrementScore" fillColor="#007bff"/>
    </div>
</template>
<script>
    export default {
        props: {
            scored: { type: Number, default: 0} 
        },
        data (){
            return {
                goalsScored: this.scored,
            }
        },
        methods: {
            decrementScore(event) {
                this.goalsScored ? this.goalsScored-- : 0
                event.stopPropagation()
            },
            incrementScore() {
                this.goalsScored++
                event.stopPropagation()
            }
        }
    }
</script>