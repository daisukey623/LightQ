<template>
  <div>
    <div class="container">
      <div>{{ LoginUser.name }}さんようこそ</div>
      <div><button @click="logOut()">ログアウト</button></div>

      <h2>投稿一覧</h2>
      <div></div>
      <div v-for="(postsList, index) in postsLists" :key="`first-${index}`">
        <br />
       
        <div @click="toPosts">
          <div class="column is-4 has-text-left">
            タイトル：{{ postsList.title }}
          </div>
          <div class="column is-4 has-text-left">tag：{{ postsList.tags }}</div>
        </div>
      </div>
 
    <SideMenu></SideMenu>
    </div>

    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import { auth } from '../main';
import SideMenu from '../components/Organisms/SideMenu';
export default {
  components: {
    SideMenu,
  },
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
    toPosts() {
      this.$router.push({ path: '/signin' });
    },
  },
};
</script>

<style scoped>
.isPointer {
  cursor: pointer;
}
</style>
