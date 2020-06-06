import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import PlusCircle from 'vue-material-design-icons/PlusCircle.vue';
import MinusCircle from 'vue-material-design-icons/MinusCircle.vue';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
Vue.component('plus-circle', PlusCircle)
Vue.component('minus-circle', MinusCircle)

new Vue({
  render: h => h(App),
}).$mount('#app')
