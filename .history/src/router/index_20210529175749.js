import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import Homefrom '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
