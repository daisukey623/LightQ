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
    post: '',
    postsLists: [],
    postsListsId: [],
    commentsLists: [],
    commentsListsId: [],
    stateModal: false,
  },
  getters: {
    LoginUser: (state) => {
      return state.LoginUser;
    },
    postsLists: (state) => {
      return state.postsLists;
    },
    post: (state) => {
      return state.post;
    },
    postsListsId: (state) => {
      return state.postsListsId;
    },
    commentsLists: (state) => {
      return state.commentsLists;
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
    getCommentsLists(state, doc) {
      state.commentsLists.push(doc.data());
      state.commentsListsId.push(doc.id);
    },
    goPost(state, doc) {
      state.post = doc;
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
    async getUser({ commit }) {
      await db
        .collection('users')
        .doc(auth.currentUser.uid)
        .onSnapshot((doc) => {
          commit('getUser', doc);
        });
    },
    async getPostsLists({ commit }) {
      const querySnapshot = await db.collection('posts').get();
      querySnapshot.forEach((doc) => {
        commit('getPostsLists', doc);
      });
    },
    async getCommentsLists({ commit }, e) {
      const querySnapshot = await db
        .collection('comments')
        .where('post_id', '==', e)
        .get();

      querySnapshot.forEach((doc) => {
        commit('getCommentsLists', doc);
      });
    },
    async goPost({ commit }, e) {
      const postRef = await db.collection('posts').doc(e);
      const postDoc = await postRef.get();
      if (postDoc.exists) {
        commit('goPost', postDoc.data());
      } else {
        console.log('No such document!');
      }
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
