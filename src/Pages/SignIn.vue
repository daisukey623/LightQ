<template>
<div class="container">
  <div class=" columns is-centered">
    <div class="box column is-half">
      <h2 class="subtitle  is-2">ログイン</h2>
      <div class="has-text-left">
        <div class="control m-5">
          <label class="label">Email</label>
          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              id="remail"
              type="email"
              placeholder="メールアドレスを入力してください"
              v-model="email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="control m-5">
          <label class="label" for="password">パスワード</label>
          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              id="password"
              type="password"
              placeholder="パスワードを入力してください"
              v-model="password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
      </div>
      <button class="button is-info" @click="Login">ログインする</button>
      <div class="m-5">
      <router-link to="/signup">新規登録はこちらから</router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    Login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/home');
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
