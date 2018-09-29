import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
