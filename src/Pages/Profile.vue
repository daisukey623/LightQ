<template>
  <div>
    <div class="container">
      <Header />
      <H2>プロフィール</H2>
      <div class="columns">
        <div class="submenu column is-3">
          <SideMenu class="is-hidden-mobile"></SideMenu>
        </div>
        <div class="submenu column is-6">
          <Score ref="child"></Score>
          <H3>投稿一覧</H3>
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
import H2 from '@/components/Atoms/H2';
import { auth } from '/src/main.js';

export default {
  components: {
    SideMenu,
    Header,
    Score,
    FeedProfile,
    H2
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
