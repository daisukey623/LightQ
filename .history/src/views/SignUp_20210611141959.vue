<template>
  <div>
    <h2>新規登録画面</h2>
    <label for="userName">ユーザー名：</label>
    <input id="userName" type="text" v-model="userName" />
    <br /><br />
    <label for="email">Email：</label>
    <input id="remail" type="email" v-model="email" />
    <br /><br />
    <label for="password">パスワード：</label>
    <input id="password" type="password" v-model="password" />
    <br /><br />
    <button @click="sendRegister">新規登録</button>
    <br /><br />
    <router-link to="/login">ログインはこちらから</router-link>
  </div>
</template>

<script>
import  { auth } from '../main';
import  { db }  from '../main'; 
export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
    };
  },
  methods: {
    sendRegister: function() {
      console.log(auth)
      console.log(db)
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          result.user
          this.createUser()
          alert('アカウントを作成しました');
          this.$router.push('/home');
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    createUser() {
      db.collection('users')
        .doc(auth.currentUser.uid)
        .set(
          {
            name: this.userName,
            name: this.email,
            name: this.🔑,
          },
          { marge: true },
        );
    },
  },
};
</script>