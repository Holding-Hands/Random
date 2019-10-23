import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const routes = [
  {path:'/',direction:Home},
  {path:'/home',component:Home},
  {path:'/category',component:Category},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
