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
export default {
  components: {
    SideMenu,
    Header,
    Modal,
    MainFeed,
  },
  data() {
    return {
      showModal: true,
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
  methods: {

  },
};
</script>

<style scoped>

</style>
