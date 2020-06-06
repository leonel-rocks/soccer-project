<template>
    <div>
       <minus-circle v-on:click="decrementScore"/> {{ goalsScored }} <plus-circle v-on:click="incrementScore"/>
    </div>
</template>
<script>
    export default {
        props: {
            scored: { type: Number, default: 0} 
        },
        data: function (){
            return {
                goalsScored: this.scored,
            }
        },
        methods: {
            decrementScore(event) {
                this.goalsScored--
                event.stopPropagation()
            },
            incrementScore() {
                this.goalsScored++
                event.stopPropagation()
            }
        }
    }
</script>