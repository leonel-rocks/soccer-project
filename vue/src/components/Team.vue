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
            <b-col md="4" cols="12">
                <md-button class="new-player-button md-raised md-primary"><account-plus/> New Player</md-button>
            </b-col>
        </b-row>
        <md-table v-model="playersFiltered" md-sort="name" md-sort-order="asc" md-card @md-selected="onSelect">
            <md-table-toolbar>
                <h1>Peru National Football Team</h1>
            </md-table-toolbar>
            <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
                <div class="md-toolbar-section-start">{{ showSelectedPlayers(count) }}</div>
                <div class="md-toolbar-section-end">
                <md-button class="md-icon-button" v-if="selectedPlayers.length === 1">
                    <square-edit-outline/>
                </md-button>
                <md-button class="md-icon-button">
                    <delete/>
                </md-button>
                </div>
            </md-table-toolbar>
            
            <md-table-row 
                slot="md-table-row" 
                slot-scope="{ item }" 
                md-selectable="multiple" 
                md-auto-select
            >
                <md-table-cell md-label="Name" md-sort-by="name" class="cell-content">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Position" md-sort-by="position" class="cell-content">{{ item.position }}</md-table-cell>
                <md-table-cell md-label="Goals" md-sort-by="goals" class="cell-content"> <Goals :scored="item.goals" />  </md-table-cell>
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
                selectedPlayers: [],
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
                this.selectedPlayers = items
            },
            showSelectedPlayers (count) {
                let plural = ''

                if (count > 1) {
                plural = 's'
                }

                return `${count} player${plural} selected`
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
    .cell-content {
        text-align: left;
    }
    .remove-button {
        margin-left: 20px;
    }
    .md-table + .md-table {
        margin-top: 16px;
    }
    .md-field {
        max-width: 350px;
    }
    @media (max-width: 576px) {
        .new-player-button {
            margin-bottom: 20px;
            width: 95%;
        }
        .remove-button {
            margin-left: 0px;
        }
    }
</style>