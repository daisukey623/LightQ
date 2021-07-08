<template>
  <div>
    <div class="container">
      <Header></Header>
      <h2 class="subtitle is-2">投稿一覧</h2>

      <div class="columns">
        <div class="submenu column is-3">
          <SideMenu></SideMenu>
        </div>
        <div class="column is-6">
          <MainFeed></MainFeed>
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
import MainFeed from '../components/Organisms/MainFeed';
import { auth } from '/src/main.js';

export default {
  components: {
    SideMenu,
    Header,
    Modal,
    MainFeed,
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
