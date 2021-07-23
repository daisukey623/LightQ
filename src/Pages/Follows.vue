<template>
  <div>
    <div class="bg-color"></div>
    <div class="container">
      <Header />
      <H1>フォロー</H1>
      <div class="columns  mr-4 ml-4">
        <div class="submenu column is-3">
          <SideMenu class="is-hidden-mobile"></SideMenu>
        </div>
        <div class="submenu column is-6">
          <FeedFollows></FeedFollows>
          <Modal />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/Organisms/SideMenu';
import Header from '@/components//Organisms/Header';
import FeedFollows from '@/components//Organisms/FeedFollows';
import Modal from '@/components//Organisms/Modal';
import H1 from '@/components/Atoms/H1';

export default {
  components: {
    SideMenu,
    Header,
    FeedFollows,
    H1,
    Modal,
  },

  created() {
    this.$store.dispatch('getFollows');
  },
};
</script>

<style scoped></style>
