import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../src/views/Home')
const Category = () => import('../src/views/Category')
const Car = () => import('../src/views/Car')
const Profile = () => import('../src/views/Profile')

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

const router = new Router({
  routes,
  mode: "history"
})

export default router
