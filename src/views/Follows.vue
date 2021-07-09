<template>
  <div>
    <div class="container">
      <Header />
      <h2 class="subtitle is-2">フォロー一覧</h2>
      <div class="columns">
        <div class="submenu column is-3">
          <SideMenu />
        </div>
        <div class="submenu column is-6">
          <FeedFollows></FeedFollows>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/Organisms/SideMenu';
import Header from '@/components//Organisms/Header';
import FeedFollows from '@/components//Organisms/FeedFollows';


export default {
  components: {
    SideMenu,
    Header,
    FeedFollows,
  },

  created(){
    this.$store.dispatch('getFollows')
  },


};
</script>

<style scoped></style>
