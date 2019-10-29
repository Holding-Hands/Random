import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');

const Detail = () => import('../views/detail/Detail');
const Cart =()=> import('../views/cart/Cart');
const routes = [
  {path:'',direction:Home},
  {path:'/home',component:Home},
  {path:'/category',component:Category},
  {path:'/detail/:iid',component:Detail},//动态路由
  {path:'/cart',component:Cart}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
