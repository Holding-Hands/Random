import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Carousel,CarouselItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Carousel)
Vue.use(CarouselItem)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
