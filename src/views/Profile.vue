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
          <Score/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/Organisms/SideMenu';
import Header from '@/components//Organisms/Header';
import Score from '@/components//Organisms/Score';

export default {
  components: {
    SideMenu,
    Header,
    Score,
  },
  data(){
    return{
    }
  },
};
</script>

<style scoped></style>
