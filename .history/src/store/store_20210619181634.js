import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { db } from '../main.js';
import { auth } from '../main.js';
export default new Vuex.Store({
  state: {
    LoginUser: {
      id: '',
      name: '',
      coin: '',
    },
    userLists: [],
    userListsID: [],
    ReceiveUserListsIndex: '',
    posts: {
      body: '',
      like_count: 0,
      status: '',
      tags: '',
      title: '',
      user_id: '',
    },
    postsLists: [],
    postsListsId: [],
    comments: {
      comments_id: '',
      comment: '',
      post_id: '',
      user_id: '',
    },
    commentsLists: [],
    stateModal: false,
  },
  getters: {
    LoginUser: (state) => {
      return state.LoginUser;
    },
    postsLists: (state) => {
      return state.postsLists;
    },
    postsListsId: (state) => {
      return state.postsListsId;
    },
    stateModal: (state) => {
      return state.stateModal;
    },
  },
  mutations: {
    getUser(state, doc) {
      state.LoginUser.name = doc.data().user_name;
    },
    getPostsLists(state, doc) {
      state.postsLists.push(doc.data());
      state.postsListsId.push(doc.id);
    },

    resetStore(state) {
      state.LoginUser = '';
      state.userLists = [];
      state.userListsID = [];
      state.postsLists = [];
    },
    getReceiveUserIndex(state, index) {
      state.ReceiveUserListsIndex = index;
    },
    showModal(state) {
      state.stateModal = true;
    },
    closeModal(state) {
      state.stateModal = false;
    },
  },
  actions: {
    getUser({ commit }) {
      const AsyncGetUser = async () => {
        await db
          .collection('users')
          .doc(auth.currentUser.uid)
          .onSnapshot((doc) => {
            commit('getUser', doc);
          });
      };
      AsyncGetUser();
    },
    getPostsLists({ commit }) {
      const AsyncGetUserLists = async () => {
        await db.collection('posts').onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            commit('getPostsLists', doc);
          });
        });
      };
      AsyncGetUserLists();
    },
    goPost({ commit }, e1) {
      const AsyncGoPost = async () => {
        const postRef = await db.collection('posts').doc(e1);

        const postDoc = await postRef.get();
        if (postDoc.exists) {
          console.log(postDoc.id);
          console.log(postDoc.data());
          console.log(postDoc.get('title'));
        } else {
          console.log('No such document!');
        }

        commit('goPost', e1);
        console.log(e);
      };
      AsyncGoPost();
    },

    getReceiveUserIndex({ commit }, index) {
      commit('getReceiveUserIndex', index);
    },
    resetStore({ commit }) {
      commit('resetStore');
    },
    showModal({ commit }) {
      commit('showModal');
    },
    closeModal({ commit }) {
      commit('closeModal');
    },
  },
});
