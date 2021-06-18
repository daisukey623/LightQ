<template>
  <div>
    <div class="container">
      <div>{{ LoginUser.name }}さんようこそ</div>
      <div><button @click="logOut()">ログアウト</button></div>

      <h2>投稿一覧</h2>
      <div v-for="(postsList, index) in postsLists" :key="`first-${index}`">
        <br />
        <div class="columns is-centered">
            <div class="column is-6 has-text-left">
              タイトル：{{ postsList.title }}
            </div>
            <div class="column is-6 has-text-left">
              tag：{{ postsList.tags }}
            </div>
        </div>
      </div>
    </div>

    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import { auth } from '../main';
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('getUser');
    this.$store.dispatch('getUserLists');
  },
  computed: {
    LoginUser() {
      return this.$store.getters.LoginUser;
    },
    postsLists() {
      return this.$store.getters.postsLists;
    },
  },
  methods: {
    logOut: async function() {
      await auth.signOut().then(this.$store.dispatch('resetStore'));
    },
  },
};
</script>
