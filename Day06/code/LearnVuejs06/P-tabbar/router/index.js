import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//组件
const Home = () => import('../src/view/home/Home')
const Category = () => import('../src/view/category/Category')
const Car = () => import('../src/view/car/Car')
const Profile = () => import('../src/view/profile/Profile')

//1. 装载vuerouter
Vue.use(VueRouter)

//3. 创建映射关系route
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/profile',
    component: Profile
  },
]

//2. 创建vuerouter对象
const router = new VueRouter({
  routes,
  mode: "history"
})



//4. 导出router
export default router


