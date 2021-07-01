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
          <FollowsFeed></FollowsFeed>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/Organisms/SideMenu';
import Header from '@/components//Organisms/Header';
import FollowsFeed from '@/components//Organisms/FollowsFeed';


export default {
  components: {
    SideMenu,
    Header,
    FollowsFeed,
  },

  created(){
    this.$store.dispatch('getFollows')
  },


};
</script>

<style scoped></style>
