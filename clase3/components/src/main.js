import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { localeNumbers } from './filters/numbers'

Vue.config.productionTip = false

Vue.filter('localeNumbers', localeNumbers)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
