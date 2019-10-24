import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');

const Detail = () => import('../views/detail/Detail');
const routes = [
  {path:'',direction:Home},
  {path:'/home',component:Home},
  {path:'/category',component:Category},
  {path:'/detail/:iid',component:Detail}//动态路由
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
