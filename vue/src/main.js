import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import PlusCircle from 'vue-material-design-icons/PlusCircle.vue'
import MinusCircle from 'vue-material-design-icons/MinusCircle.vue'
import SquareEditOutline from 'vue-material-design-icons/SquareEditOutline'
import Delete from 'vue-material-design-icons/Delete'
import AccountPlus from 'vue-material-design-icons/AccountPlus'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
Vue.component('plus-circle', PlusCircle)
Vue.component('minus-circle', MinusCircle)
Vue.component('square-edit-outline', SquareEditOutline)
Vue.component('delete', Delete)
Vue.component('account-plus', AccountPlus)

new Vue({
  render: h => h(App),
}).$mount('#app')
