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
    posts:{
      body:'',
      like_count:0,
      status:'',
      tags:'',
      title:'',
      user_id:''
    },
    postsLists:[],
    comments:{
      comments_id:'',
      comment:'',
      post_id:'',
      user_id:''
    },
    commentsLists:[],
    showModal:false
  },
  getters: {
    LoginUser: (state) => {
      return state.LoginUser;
    },
    postsLists: (state) => {
      console.log(state.postsLists)
      return state.postsLists;
    },
  },
  mutations: {
    getUser(state, doc) {
      state.LoginUser.name = doc.data().user_name;
    },
    getPostsLists(state, doc) {
      state.postsLists.push(doc.data());
      // state.userListsID.push(doc.id);

    },
    updateUsers(state, Coin) {
      state.userLists[state.ReceiveUserListsIndex].coin += Number(Coin);
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
    showModal(state){
      state.
    }
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
    getUserLists({ commit }) {
      const AsyncGetUserLists = async () => {
        await db.collection('posts').onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            commit('getPostsLists', doc);
          });
        });
      };
      AsyncGetUserLists();
    },
    updateUsers({ commit }, sendedCoin) {
      const AsyncUpdateUser = async () => {
        const LoginUser = await db
          .collection('users')
          .doc(auth.currentUser.uid);
        db.runTransaction((transaction) => {
          return transaction.get(LoginUser).then((Doc) => {
            if (!Doc.exists) {
              console.log('noexxist');
            }
            const upLoginUser = Doc.data().coin;
            if (upLoginUser > 0) {
              transaction.update(LoginUser, {
                coin: this.state.LoginUser.coin - Number(sendedCoin.sendedCoin),
              });
              return upLoginUser;
            } else {
              return Promise.reject('残高が足りません.');
            }
          });
        })
          .then(() => {
            console.log('Population increased to ');
          })
          .catch((err) => {
            console.error(err);
          });
        const userLists = await db
          .collection('users')
          .doc(this.state.userListsID[this.state.ReceiveUserListsIndex]);

        db.runTransaction((transaction) => {
          return transaction.get(userLists).then((Doc) => {
            if (!Doc.exists) {
              console.log('noexxist');
            }
            const upUserLists = Doc.data().coin;
            if (upUserLists > 0) {
              transaction.update(userLists, {
                coin:
                  Number(
                    this.state.userLists[this.state.ReceiveUserListsIndex].coin
                  ) + Number(sendedCoin.sendedCoin),
              });
              return upUserLists;
            } else {
              return Promise.reject('残高が足りません.');
            }
          });
        });
        await commit('updateUsers', sendedCoin.sendedCoin);
      };
      AsyncUpdateUser();
    },
    getReceiveUserIndex({ commit }, index) {
      commit('getReceiveUserIndex', index);
    },
    resetStore({ commit }) {
      commit('resetStore');
    },
    showModal({commit}){
      commit('showModal')
    }
  },
});