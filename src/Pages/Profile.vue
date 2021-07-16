<template>
  <div>
    <div class="container">
      <Header />
      <H1>プロフィール</H1>
      <div class="columns">
        <div class="submenu column is-3">
          <SideMenu class="is-hidden-mobile"></SideMenu>
        </div>
        <div class="submenu column is-6">
          <Score ref="child" class="mb-6"></Score>
          <H2>投稿一覧</H2>
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
import H1 from '@/components/Atoms/H1';
import H2 from '@/components/Atoms/H2';
import { auth } from '/src/main.js';

export default {
  components: {
    SideMenu,
    Header,
    Score,
    FeedProfile,
    H1,
    H2,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('getMyPosts', this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('getMyPosts', auth.currentUser.uid);
    this.$refs.child.getMyScores();
    next();
  },
};
</script>

<style scoped></style>
