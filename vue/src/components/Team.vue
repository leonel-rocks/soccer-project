<template>
    <div>
        <h1>Team Component</h1>
        <md-table v-model="players" md-card @md-selected="onSelect">
            <md-table-row 
                slot="md-table-row" 
                slot-scope="{ item }" 
                md-selectable="multiple" 
                md-auto-select
            >
                <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Position" md-sort-by="position">{{ item.position }}</md-table-cell>
                <md-table-cell md-label="Goals" md-sort-by="goals"> <Goals :scored="item.goals" />  </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    import Goals from './Goals'
    import { peru } from "../constants/players"
    export default {
        props: {

        },
        components: {
            Goals,
        },
        data() {
            return {
                players: [],
            }
        },
        mounted() {
            this.players = peru
        },
        computed: {
            
        },
        methods: {
            onSelect (items) {
                this.selected = items
            },    
        }
    }
</script>

<style lang="scss" scoped>
    .md-table + .md-table {
        margin-top: 16px;
    }
</style>