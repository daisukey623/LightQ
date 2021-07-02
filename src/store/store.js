import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { db,auth } from '../main.js';
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
    scores:[],
    bestAnswerComment: '',
    stateModal: false,
    follows:[],
    isShowQuestionnaire:false,
    isShowQuestionnaireSignUp:false,
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
    follows: (state) => {
      return state.follows;
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
    scores: (state) => {
      return state.scores;
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
    isShowQuestionnaireSignUp: (state) => {
      return state.isShowQuestionnaireSignUp;
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
    setFollows(state, doc) {
      state.follows = doc.Doc;
    },
    setCommentsLists(state, doc) {
      state.commentsLists = doc.Doc;
      state.commentsListsId = doc.DocId;
    },
    setScores(state, doc) {
      state.scores = doc.Doc
    },
    setBestAnswerComment(state, doc) {
      state.bestAnswerComment = doc;
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
    },
  },
  actions: {
    async getUser({ commit }) {
      commit('setUser', auth.authUser);
    },

    async getPostsLists({ commit }) {
      await db.collection('posts').onSnapshot((querySnapshot) => {
        let DocAll = [];
        let DocId = [];
        querySnapshot.forEach((doc) => {
          DocAll.push(doc.data());
          DocId.push(doc.id);
        });
     const Doc = DocAll.sort((a,b) => b.createdAt - a.createdAt);
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

    async goPost({ commit }, e) {
      const postRef = await db.collection('posts').doc(e);
      const postDoc = await postRef.get();
      if (postDoc.exists) {
        commit('goPost', postDoc.data());
      } else {
        console.log('No such document!');
      }
    },

    async getScores({ commit }) {
      await db
      .collection('scores')
      .where('user_id', '==', auth.currentUser.uid)
      .onSnapshot((querySnapshot) => {
        const Doc = [];
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            user_id: doc.data().user_id,
            createdAt: doc.data().createdAt,
            follow_score: doc.data().follow_score,
            plan_score: doc.data().plan_score,
            population_score: doc.data().population_score,
            selection_score: doc.data().selection_score,
          }
          Doc.push(data);
        }, Doc);
        console.log(Doc)
        commit('setScores', {Doc});
      });
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
    showQuestionnaire({ commit }) {
      commit('showQuestionnaire');
    },
    showQuestionnaireSignUp({ commit }) {
      commit('showQuestionnaireSignUp');
    },
    closeModal({ commit }) {
      commit('closeModal');
    },
  },
});
