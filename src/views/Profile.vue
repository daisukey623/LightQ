<template>
  <div>
    <div class="container">
      <Header />
      <h2 class="subtitle is-2">プロフィール</h2>
      <div class="columns">
        <div class="submenu column is-3">
          <SideMenu />
        </div>
        <div class="submenu column is-6">
          <Score ref="child"></Score>
          <h3 class="subtitle is-3">投稿一覧</h3>
          <FeedProfile></FeedProfile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/Organisms/SideMenu';
import Header from '@/components//Organisms/Header';
import Score from '@/components//Organisms/Score';
import FeedProfile from '@/components//Organisms/FeedProfile';
import { auth } from '/src/main.js';

export default {
  components: {
    SideMenu,
    Header,
    Score,
    FeedProfile,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('getMyPosts', this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('getMyPosts', auth.currentUser.uid);
    this.$refs.child.getMyScores()
    next();
  },

};
</script>

<style scoped></style>
