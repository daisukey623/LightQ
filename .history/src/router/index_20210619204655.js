import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import Posts from '../views/Posts.vue';
import firebase from 'firebase/app';



Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: Top,
  // },
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/posts/id',
    component: Posts,
    meta: { requiresAuth: true }
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/signup',
    component: SignUp,
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
        next('/signin');
      }
    })
  } else {
    next();
  }
});



export default router