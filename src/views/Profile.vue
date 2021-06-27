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
          <Score></Score>
        </div>
      </div>
      <button @click="test">クリック</button>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/Organisms/SideMenu';
import Header from '@/components//Organisms/Header';
import Score from '@/components//Organisms/Score';
import { mapGetters } from 'vuex';

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
  created(){
    this.$store.dispatch('getScores')
    },
  computed: {
    ...mapGetters(['scores']),
  },
  methods: {
    test() {
      console.log(this.scores[0].follow_score);
    },
  },
};
</script>

<style scoped></style>
