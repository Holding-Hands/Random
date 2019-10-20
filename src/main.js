import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
