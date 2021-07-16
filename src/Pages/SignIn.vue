<template>
  <div class="container">
    <Header></Header>
    <div class=" columns is-centered">
      <div class="box column is-half mt-6">
        <H1 class="mt-4">ログイン</H1>
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
        <Button color="is-info" @click.native="Login">ログインする</Button>
        <div class="m-5">
          <router-link to="/signup">新規登録はこちらから</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import H1 from '@/components/Atoms/H1';
import Button from '@/components/Atoms/Button';
import Header from '@/components//Organisms/Header';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  components: {
    H1,
    Button,
    Header,
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
