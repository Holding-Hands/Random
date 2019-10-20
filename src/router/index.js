import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home');
const routes = [
  {path:'/home',component:Home}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
