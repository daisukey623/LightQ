<template>
  <section>
    <div class="bg-color fixed"></div>
    <div class="container">
      <Header></Header>
      <H1>ホーム</H1>
      <div class="columns  mr-4 ml-4">
        <div class="submenu column is-3">
          <SideMenu class="is-hidden-mobile"></SideMenu>
        </div>
        <div class="column is-6">
          <button
            class="button is-rounded mobile-post is-info is-outlined has-background-white is-hidden-desktop"
            @click="showModalMobile()"
          >
            <span class="icon color">
              <i class="fas fa-paper-plane"></i>
            </span>
          </button>
          <FeedPosts></FeedPosts>
          <Modal></Modal>
        </div>
      </div>
    </div>
  </section>
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
  methods: {
    showModalMobile() {
      this.$store.dispatch('showModal');
    },
  },
};
</script>

<style scoped>
.mobile-post {
  position: fixed;
  top: 650px;
  left: 280px;
  /* border-radius: 50%; */
  width: 55px;
  height: 55px;
  z-index: 10;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
}
.bg-color {
  background: linear-gradient(135deg, #167df0, #12d8fa, #a6ffcb);
  height: 5px;
}
</style>
