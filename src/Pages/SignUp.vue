<template>
  <div class="container">
    <button @click="test()">test</button>
    <Header></Header>
    <div class=" columns is-centered">
      <div class="box column is-half mt-6">
        <H1 class="mt-4">新規登録</H1>
        <div class="has-text-left">
          <div class="control m-5">
            <label class="label">お名前</label>
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                id="userName"
                type="text"
                v-model="userName"
                placeholder="お名前を入力してください"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>

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
        <Button color="is-info" @click.native="sendRegister"
          >新規登録する</Button
        >
        <div class="m-3">
          <router-link to="/signin">ログインはこちらから</router-link>
        </div>
      </div>
    </div>
    <ProfileIMG />
    <QuestionnaireSignUp />
  </div>
</template>

<script>
import { auth } from "../main";
import QuestionnaireSignUp from "@/components/Organisms/QuestionnaireSignUp";
import ProfileIMG from "@/components/Organisms/ProfileIMG";
import H1 from "@/components/Atoms/H1";
import Button from "@/components/Atoms/Button";
import Header from "@/components//Organisms/Header";

export default {
  components: {
    QuestionnaireSignUp,
    ProfileIMG,
    H1,
    Button,
    Header
  },
  data() {
    return {
      userName: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async sendRegister() {
      await auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          result.user.updateProfile({
            displayName: this.userName
          });

          this.$store.dispatch("showProfileIMG");
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>
