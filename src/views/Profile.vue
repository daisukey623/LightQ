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
          <Score />
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

export default {
  components: {
    SideMenu,
    Header,
    Score,
    FeedProfile,
  },
};
</script>

<style scoped></style>
