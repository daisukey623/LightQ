import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/Pages/Home.vue';
import SignIn from '@/Pages/SignIn.vue';
import SignUp from '@/Pages/SignUp.vue';
import Posts from '@/Pages/Posts.vue';
import Follows from '@/Pages/Follows.vue';
import Profile from '@/Pages/Profile.vue';
import Top from '@/Pages/Top.vue';
import firebase from 'firebase/app';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Top,
  },
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/posts/:id',
    component: Posts,
    meta: { requiresAuth: true },
  },
  {
    path: '/users/:id',
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: '/Follows/:id',
    component: Follows,
    meta: { requiresAuth: true },
  },
  {
    path: '/signin',
    component: SignIn,
  },
  {
    path: '/signup',
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        next();
      } else {
        next('/signin');
      }
    });
  } else {
    next();
  }
});

export default router;
