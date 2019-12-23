import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Carousel,CarouselItem,Checkbox, CheckboxButton, CheckboxGroup,} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

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

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/lazyload.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
