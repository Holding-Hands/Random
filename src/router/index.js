import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home');
const Detail = () => import('../views/detail/Detail');
const Cart =()=> import('../views/cart/Cart');
const Profile =()=> import('../views/profile/Profile');
const Category =()=> import('../views/category/Category');
const routes = [
  {path:'',direction:Home},
  {path:'/home',component:Home},
  {path:'/category',component:Category},
  {path:'/detail/:iid',component:Detail},//动态路由
  {path:'/cart',component:Cart},
  {path:'/profile',component:Profile},
  {path:'/category',component:Category}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
