import Vue from 'vue'
import App from './App.vue'
// import iceman from '../packages'

Vue.config.productionTip = false
// Vue.use(iceman)

new Vue({
  render: h => h(App)
}).$mount('#app')
