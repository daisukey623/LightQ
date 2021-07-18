import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { db, auth } from '../main.js';
export default new Vuex.Store({
  state: {
    post: '',
    posts: [],
    comments: [],
    follows: [],
    myPosts: [],
    bestAnswerComment: '',
    stateModal: false,
    isShowQuestionnaire: false,
    isShowQuestionnaireSignUp: false,
    isShowProfileIMG: false,
    IsloadingShow: true,
  },
  getters: {
    LoginUser: (state) => {
      return state.LoginUser;
    },
    posts: (state) => {
      return state.posts;
    },
    post: (state) => {
      return state.post;
    },
    follows: (state) => {
      return state.follows;
    },
    myPosts: (state) => {
      return state.myPosts;
    },

    comments: (state) => {
      return state.comments;
    },

    bestAnswerComment: (state) => {
      return state.bestAnswerComment;
    },
    stateModal: (state) => {
      return state.stateModal;
    },
    isShowQuestionnaire: (state) => {
      return state.isShowQuestionnaire;
    },
    isShowProfileIMG: (state) => {
      return state.isShowProfileIMG;
    },
    isShowQuestionnaireSignUp: (state) => {
      return state.isShowQuestionnaireSignUp;
    },
    IsloadingShow: (state) => {
      return state.IsloadingShow;
    },
  },
  mutations: {
    setUser(state, authUser) {
      state.LoginUser = authUser;
    },
    setPosts(state, doc) {
      state.posts = doc.Doc;
    },
    setMyPosts(state, doc) {
      state.myPosts = doc.Doc;
    },
    setFollows(state, doc) {
      state.follows = doc.Doc;
    },
    setComments(state, doc) {
      state.comments = doc.DocSort;
    },

    setBestAnswerComment(state, doc) {
      state.bestAnswerComment = doc;
    },
    updatePost(state, e) {
      state.post = e;
    },
    setPost(state, doc) {
      state.post = doc;
    },

    resetStore(state) {
      state.LoginUser = '';
      state.post = '',
      state.posts = [],
      state.comments = [],
      state.bestAnswerComment = '';
    },
    getReceiveUserIndex(state, index) {
      state.ReceiveUserListsIndex = index;
    },
    showModal(state) {
      state.stateModal = true;
    },

    showProfileIMG(state) {
      state.isShowProfileIMG = true;
    },
    showQuestionnaire(state) {
      state.isShowQuestionnaire = true;
    },
    showQuestionnaireSignUp(state) {
      state.isShowQuestionnaireSignUp = true;
    },
    closeModal(state) {
      state.stateModal = false;
      state.isShowQuestionnaire = false;
      state.isShowQuestionnaireSignUp = false;
      state.isShowProfileIMG = false;
    },
    IsloadingShow(state) {
      state.IsloadingShow = false;
    },
  },
  actions: {
    async getUser({ commit }) {
      commit('setUser', auth.authUser);
    },

    async getPosts({ commit }) {
      await db.collection('posts').onSnapshot((querySnapshot) => {
        let DocAll = [];
        let DocId = [];
        querySnapshot.forEach((doc) => {
          DocAll.push(doc.data());
          DocId.push(doc.id);
        });
        const Doc = DocAll.sort((a, b) => b.createdAt - a.createdAt);
        commit('setPosts', { Doc, DocId });
      });
    },

    async getMyPosts({ commit }, e) {
      await db.collection('posts').onSnapshot((querySnapshot) => {
        let DocAll = [];
        querySnapshot.forEach((doc) => {
          DocAll.push(doc.data());
        });

        const myDoc = DocAll.filter(function(myPost) {
          return myPost.user_id === e;
        });

        const Doc = myDoc.sort((a, b) => b.createdAt - a.createdAt);

        commit('setMyPosts', { Doc });
      });
    },

    async getComments({ commit }, e) {
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
          const DocSort = Doc.sort((a, b) => b.createdAt - a.createdAt);
          commit('setComments', { DocSort, DocId });
        });
    },
    async getFollows({ commit }) {
      await db
        .collection('follows')
        .where('following', '==', auth.currentUser.uid)
        .onSnapshot((querySnapshot) => {
          let Doc = [];
          querySnapshot.forEach((doc) => {
            Doc.push(doc.data());
          });
          commit('setFollows', { Doc });
        });
    },
    async getBestAnswerComment({ commit }, e) {
      try {
        const Doc = await db
          .collection('comments')
          .doc(e)
          .get();
        commit('setBestAnswerComment', Doc.data());
      } catch (error) {
        console.log(error, 'エラー');
      }
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

    async getPost({ commit }, e) {
      const postRef = await db.collection('posts').doc(e);
      const postDoc = await postRef.get();
      if (postDoc.exists) {
        commit('setPost', postDoc.data());
      } else {
        console.log('No such document!');
      }
    },

    getReceiveUserIndex({ commit }) {
      commit('getReceiveUserIndex');
    },
    resetStore({ commit }) {
      commit('resetStore');
    },
    showModal({ commit }) {
      commit('showModal');
    },
    showProfileIMG({ commit }) {
      commit('showProfileIMG');
    },
    showQuestionnaire({ commit }) {
      commit('showQuestionnaire');
    },
    showQuestionnaireSignUp({ commit }) {
      commit('showQuestionnaireSignUp');
    },
    closeModal({ commit }) {
      commit('closeModal');
    },
    IsloadingShow({ commit }) {
      commit('IsloadingShow');
    },
  },
});
