import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { db } from '../main.js';
import { auth } from '../main.js';
export default new Vuex.Store({
  state: {
    LoginUser: '',
    userLists: [],
    userListsID: [],
    ReceiveUserListsIndex: '',
    post: '',
    postsLists: [],
    postsListsId: [],
    commentsLists: [],
    commentsListsId: [],
    commentsUsersLists: [],
    commentsUsersListsId: [],
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
    commentsUsersLists: (state) => {
      return state.commentsUsersLists;
    },
    stateModal: (state) => {
      return state.stateModal;
    },
  },
  mutations: {
    setUser(state, authUser) {
      state.LoginUser =  authUser;
    },
    setPostsLists(state, doc) {
      state.postsLists.push(doc.data());
      state.postsListsId.push(doc.id);
    },
    setCommentsLists(state, doc) {
      state.commentsLists.push(doc.data());
      state.commentsListsId.push(doc.id);
    },
    setCommentsUsersLists(state, doc) {
      state.usersLists.push(doc.data());
      state.usersListsId.push(doc.id);
    },
    soPost(state, doc) {
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
      commit('setUser', auth.authUser);
      
    },
    async getPostsLists({ commit }) {
      const querySnapshot = await db.collection('posts').get();
      querySnapshot.forEach((doc) => {
        commit('setPostsLists', doc);
      });
    },
    async getCommentsLists({ commit }, e) {
      const querySnapshotComments = await db
        .collection('comments')
        .where('post_id', '==', e)
        .get();
        querySnapshotComments.forEach((doc) => {
        commit('setCommentsLists', doc);
      });

      const querySnapshotUsers = await db
        .collection('users')
        .where('post_id', '==', e)
        .get();
        querySnapshotUsers.forEach((doc) => {
        commit('setCommentsUsersLists', doc);
      });
    },
    // async getCommentsUsersLists({ commit },e) {
    //   const querySnapshot = await db
    //     .collection('users')
    //     .where('post_id', '==', e)
    //     .get();

    //   querySnapshot.forEach((doc) => {
    //     commit('getCommentsUsersLists', doc);
    //   });
    // },
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
