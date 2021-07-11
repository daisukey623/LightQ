<template>
  <div>
    <div class="container">
      <Header />
      <H2>フォロー一覧</H2>
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
import H2 from '@/components/Atoms/H2';


export default {
  components: {
    SideMenu,
    Header,
    FeedFollows,
    H2
  },

  created(){
    this.$store.dispatch('getFollows')
  },


};
</script>

<style scoped></style>
