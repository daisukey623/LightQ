import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import store from '@/store/store.js'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script></script>
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCfcICX6lkG9kUXQEkOpAAMZK-JhXIACKM",
    authDomain: "lightq-e5c74.firebaseapp.com",
    projectId: "lightq-e5c74",
    storageBucket: "lightq-e5c74.appspot.com",
    messagingSenderId: "306186698207",
    appId: "1:306186698207:web:a5f691502937825c2c586a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

export const db = firebase.firestore()
export const auth = firebase.auth()