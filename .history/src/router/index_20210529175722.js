import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'

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
    component: Top
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
