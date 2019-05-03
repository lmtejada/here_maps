import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap'

Vue.config.productionTip = false

axios.defaults.baseURL = ''
axios.defaults.headers.common['Authorization'] = ''

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
