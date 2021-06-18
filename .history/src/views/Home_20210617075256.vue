<template>
  <div>
    <div class="container">
      <Header></Header>
      <div>{{ LoginUser.name }}さんようこそ</div>

      <h2>投稿一覧</h2>

      <div class="columns">
        <div class="submenu column is-3">
          <SideMenu></SideMenu>
        </div>
        <div class="column is-6">
          <div v-for="(postsList, index) in postsLists" :key="`first-${index}`">
            <div @click="toPosts" class="isPointer">
              <br />
              <div>タイトル：{{ postsList.title }}</div>
              <div>tag：{{ postsList.tags }}</div>
            </div>
          </div>
          Modal
        </div>
      </div>
    </div>
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import SideMenu from '../components/Organisms/SideMenu';
import Header from '../components/Organisms/Header';
import Modal from '../components/Organisms/Modal';
export default {
  components: {
    SideMenu,
    Header,
    Modal,
  },
  data() {
    return {
      showModal: true,
    };
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
