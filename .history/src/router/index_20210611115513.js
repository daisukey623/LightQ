import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue';
import SignIn from '../views/SignIn.vue';
import Register from '../views/Register.vue';
import firebase from 'firebase/app';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/SignIn',
    component: SignIn
  },
  {
    path: '/register',
    component: Register,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next();
      } else {
        next('/login');
      }
    })
  } else {
    next();
  }
});



export default router