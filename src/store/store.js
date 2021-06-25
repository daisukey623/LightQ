import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { db } from '../main.js';
import { auth } from '../main.js';
export default new Vuex.Store({
  state: {
    userLists: [],
    userListsID: [],
    ReceiveUserListsIndex: '',
    post: '',
    postsLists: [],
    postsListsId: [],
    commentsLists: [],
    commentsListsId: [],
    bestAnswerComment:'',
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
    commentsListsId: (state) => {
      return state.commentsListsId;
    },
    bestAnswerComment: (state) => {
      return state.bestAnswerComment;
    },

    stateModal: (state) => {
      return state.stateModal;
    },
  },
  mutations: {
    setUser(state, authUser) {
      state.LoginUser = authUser;
    },
    setPostsLists(state, doc) {
      state.postsLists = doc.Doc;
      state.postsListsId = doc.DocId;
    },
    setCommentsLists(state, doc) {
      state.commentsLists = doc.Doc;
      state.commentsListsId = doc.DocId;
    },
    setBestAnswerComment(state, doc) {
      state.bestAnswerComment = doc
    },
    updatePost(state, e) {
      state.post = e;
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
      commit('setUser', auth.authUser);
    },

    async getPostsLists({ commit }) {
      await db.collection('posts').onSnapshot((querySnapshot) => {
        let Doc = [];
        let DocId = [];
        querySnapshot.forEach((doc) => {
          Doc.push(doc.data());
          DocId.push(doc.id);
        });
        commit('setPostsLists', { Doc, DocId });
      });
    },

    async getCommentsLists({ commit }, e) {
      await db
      .collection('comments')
      .where('post_id', '==', e)
      .onSnapshot((querySnapshot) => {
        let Doc = [];
        let DocId = [];
        querySnapshot.forEach((doc) => {
          Doc.push(doc.data());
          DocId.push(doc.id);
          });
          commit('setCommentsLists', { Doc, DocId });
        });
    },
    async getBestAnswerComment({commit},e){
      const Doc = await db.collection('comments').doc(e).get()
      commit('setBestAnswerComment',Doc.data())

    },

    async uppdatePostStatus({ commit }, { postId, commentId }) {
      await db
        .collection('posts')
        .doc(postId)
        .update({
          status: '解決済',
          best_answer: commentId,
        });
      const postDoc = await db
        .collection('posts')
        .doc(postId)
        .get();
      commit('updatePost', postDoc.data());
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
