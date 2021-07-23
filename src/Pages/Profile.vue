<template>
  <section>
    <div class="bg-color"></div>
    <div class="container">
      <Header />
      <H1>プロフィール</H1>
      <div class="columns  mr-4 ml-4">
        <div class="submenu column is-3">
          <SideMenu class="is-hidden-mobile"></SideMenu>
        </div>
        
        <div class="submenu column is-6">
          <b-tooltip
            multilined
            always
            position="is-right"
            type="is-info is-light"
            label="自分の投稿にベストアンサーを設定すると、振り返りが表示され、グラフが更新されます。"
            class="is-hidden-mobile"
          >
            <Score ref="child" class="mb-6"></Score>
          </b-tooltip>

          <Score ref="child" class="mb-6 is-hidden-desktop"></Score>

          <H2>投稿一覧</H2>
          <FeedProfile></FeedProfile>
          <Modal />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SideMenu from '@/components/Organisms/SideMenu';
import Header from '@/components//Organisms/Header';
import Score from '@/components//Organisms/Score';
import FeedProfile from '@/components//Organisms/FeedProfile';
import Modal from '@/components//Organisms/Modal';
import H1 from '@/components/Atoms/H1';
import H2 from '@/components/Atoms/H2';
import { auth } from '/src/main.js';

export default {
  components: {
    SideMenu,
    Header,
    Score,
    FeedProfile,
    Modal,
    H1,
    H2,
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

<style scoped>
.b-tooltip {
  margin-bottom: 0.5em;
}
</style>
