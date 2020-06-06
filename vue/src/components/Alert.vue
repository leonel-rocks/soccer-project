<template>
    <div>
        <md-dialog :md-active.sync="active">
            <md-dialog-title v-if="alertType === 'delete'">Are you sure you want to delete the selected players?</md-dialog-title>
            <md-dialog-content>
                <md-field v-if="alertType === 'edit'">
                    <label>Name</label>
                    <md-input v-model="name"></md-input>
                </md-field>
                <md-field v-if="alertType === 'edit'">
                    <label>Position</label>
                    <md-input v-model="position"></md-input>
                </md-field>
                <md-button v-on:click="onConfirm">Confirm</md-button>
                <md-button v-on:click="onCancel">Cancel</md-button>
            </md-dialog-content>
        </md-dialog >
        <square-edit-outline v-if="alertType === 'edit'" v-on:click="openAlert"/>
        <delete v-if="alertType === 'delete'" v-on:click="openAlert"/>
    </div>
</template>
<script>
  export default {
    name: 'AlertMessage',
    props: {
        actionEvent: { type: Function},
        alertType: { type: String },
        selectedItems: { type: Array},
        selectedItem: { type: Object},
    },
    data: () => ({
      active: false,
      value: null,
      name: null,
      originalName: null,
      position: null,
      goals: null,
    }),
    methods: {
        openAlert () {
            if(this.alertType === 'edit'){
                const player = this.selectedItem
                this.name = player.name
                this.originalName = this.name
                this.position = player.position
            }
            this.active = true
            this.$emit('clicked', 'someValue')
        },
        onCancel () {
            this.active = false
        },
        onConfirm () {
            switch(this.alertType) {
                case 'edit': 
                    this.actionEvent(this.originalName, { 
                        name: this.name,
                        position: this.position,
                    })
                    break
                case 'delete':
                    this.actionEvent()
                    break
                default:
                    return
            }
            this.active = false
        },
    },
    watch: {
        name (newValue) {
            this.name = newValue
        },
        position (newValue) {
            this.position = newValue
        },
        goals (newValue) {
            this.goals = newValue
        },
    },
  }
</script>