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
    export default {
        props: {

        },
        components: {
            Goals,
        },
        computed: {
            players() {
                return [
                    {name: 'Jugador A', position: 'position A', goals: 0},
                    {name: 'Jugador B', position: 'position B', goals: 0},
                    {name: 'Jugador C', position: 'position C', goals: 0},
                    {name: 'Jugador D', position: 'position D', goals: 0},
                    {name: 'Jugador E', position: 'position E', goals: 0},
                    {name: 'Jugador F', position: 'position F', goals: 0},
                ]
            }
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