<template>
<div class="container">
  <div class=" columns is-centered">
    <div class="box column is-half">
      <h2 class="subtitle  is-2">新規登録</h2>
      <div class="has-text-left">



        <div class="control m-5">
                    <label class="label">お名前</label>
                              <p class="control has-icons-left has-icons-right">
            <input class="input" id="userName" type="text" v-model="userName"  placeholder="お名前を入力してください" />
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
      <button class="button is-info" @click="sendRegister">新規登録する</button>
      <br /><br />
      <router-link to="/register">ログインはこちらから</router-link>
    </div>
  </div>
   <QuestionnaireSignUp/>
  </div>
</template>

<script>
import  { auth } from '../main';
import QuestionnaireSignUp from '@/components/Organisms/QuestionnaireSignUp';

export default {
  components:{
QuestionnaireSignUp
  },
  data() {
    return {
      userName: '',
      email: '',
      password: '',
    };
  },
  methods: {
   async sendRegister() {
     await auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          result.user.updateProfile({
        displayName:this.userName
        })
         
         this.$store.dispatch('showQuestionnaireSignUp')

        })
        .catch((error) => {
          alert(error.message);
        });
        
    },

  },
};
</script>