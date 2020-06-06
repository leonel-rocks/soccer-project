<template>
    <div>
        <h1>Team Component</h1>
        <b-row>
            <b-col md="4" cols="12">
                <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="Search by name..." v-model="searchName" @input="handleSearchByName" />
                </md-field>
            </b-col>
            <b-col md="4" cols="12">
                <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="Search by position..." v-model="searchPosition" @input="handleSearchByPosition" />
                </md-field>
            </b-col>
            <b-col md="4" cols="12"></b-col>
        </b-row>
        <md-table v-model="playersFiltered" md-sort="name" md-sort-order="asc" md-card @md-selected="onSelect">
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
    
    const toLower = text => {
        return text.toString().toLowerCase()
    }

    const searchBy = (items, keyToSearch, word) => {
        if(word) {
            return items.filter(item => toLower(item[keyToSearch]).includes(toLower(word)))
        }
        return items
    }

    export default {
        props: {

        },
        components: {
            Goals,
        },
        data() {
            return {
                searchName: null,
                searchPosition: null,
                players: [],
                playersFiltered: [],
            }
        },
        mounted() {
            this.players = peru
            this.playersFiltered = this.players
        },
        computed: {
            
        },
        methods: {
            onSelect (items) {
                this.selected = items
            },
            handleSearchByName () {
                this.playersFiltered = searchBy(this.players, 'name', this.searchName)
            },
            handleSearchByPosition () {
                this.playersFiltered = searchBy(this.players, 'position', this.searchPosition)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .md-table + .md-table {
        margin-top: 16px;
    }
    .md-field {
        max-width: 300px;
        margin-right: 30px;
    }
</style>