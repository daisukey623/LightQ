<template>
  <div>
    <div class="container">
      <Header></Header>
      <H1>投稿一覧</H1>
      <div class="columns  mr-4 ml-4">
        <div class="submenu column is-3">
          <SideMenu class="is-hidden-mobile"></SideMenu>
        </div>
        <div class="column is-6">
          <FeedPosts></FeedPosts>
          <Modal></Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '../components/Organisms/SideMenu';
import Header from '../components/Organisms/Header';
import Modal from '../components/Organisms/Modal';
import FeedPosts from '../components/Organisms/FeedPosts';
import H1 from '@/components/Atoms/H1';
import { auth } from '/src/main.js';

export default {
  components: {
    SideMenu,
    Header,
    Modal,
    FeedPosts,
    H1,
  },
  data() {
    return {
      file: null,
      url: null,
      showModal: true,
      auth: auth,
    };
  },
  created() {
    this.$store.dispatch('getUser');
  },
  computed: {
    LoginUser() {
      return this.$store.getters.LoginUser;
    },
  },
};
</script>

<style scoped></style>
