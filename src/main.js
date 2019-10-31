import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Carousel,CarouselItem,Checkbox, CheckboxButton, CheckboxGroup,} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);

import Toast from './components/common/toast/index.js'


Vue.config.productionTip = false

//添加事件总线
Vue.prototype.$bus=new Vue()

//安装toast
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
