<template>
  <div class="modal  is-active" v-show="isShowQuestionnaire" >
    <div class="modal-background"></div>
    <div class="modal-content columns is-centered">
      <div class="card column is-half ">
        <div class="card-content">
          <p>ベストアンサーに設定しました。業務の理解度が上がると良いですね！</p>
          <p>各領域の理解度の状態を振り返りましょう！</p>
      <b-field label="採用計画" class="m-6">
        <b-slider
          v-model="tag1"
          :max="100"
          tooltip-always
          aria-label="採用計画"
        >
          <b-slider-tick :value="0">Beginnerr</b-slider-tick>
          <b-slider-tick :value="50">OK</b-slider-tick>
          <b-slider-tick :value="100">Perfect</b-slider-tick>
        </b-slider>
      </b-field>

      <b-field label="母種団形成" class="m-6">
        <b-slider
          v-model="tag2"
          :max="100"
          tooltip-always
          aria-label="母集団形成"
        >
          <b-slider-tick :value="0">Beginnerr</b-slider-tick>
          <b-slider-tick :value="50">OK</b-slider-tick>
          <b-slider-tick :value="100">Perfect</b-slider-tick>
        </b-slider>
      </b-field>
      <b-field label="選考" class="m-6">
        <b-slider
          v-model="tag3"
          :max="100"
          tooltip-always
          aria-label="選考"
        >
          <b-slider-tick :value="0">Beginnerr</b-slider-tick>
          <b-slider-tick :value="50">OK</b-slider-tick>
          <b-slider-tick :value="100">Perfect</b-slider-tick>
        </b-slider>
      </b-field>
      <b-field label="内定者フォロー" class="m-6">
        <b-slider
          v-model="tag4"
          :max="100"
          tooltip-always
          aria-label="内定者フォロー"
        >
          <b-slider-tick :value="0">Beginnerr</b-slider-tick>
          <b-slider-tick :value="50">OK</b-slider-tick>
          <b-slider-tick :value="100">Perfect</b-slider-tick>
        </b-slider>

      </b-field>
              <button class="button" type="submit" @click="send" >振り返り完了</button>
      <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>

  </div>
  </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { auth, db } from '/src/main.js';

export default {
  data() {
    return {
      tag1: 0,
      tag2: 0,
      tag3: 0,
      tag4: 0,
    };
  },
  computed: {
    ...mapGetters(['isShowQuestionnaire']),
  },
  methods: {
    closeModal() {
      this.$store.dispatch('closeModal');
    },
    send(){
      this.closeModal()
      this.setScores()
    },   
      setScores() {
      const ref = db.collection('scores')
        .doc()
        ref.set(
          {
            id:ref.id,
            user_id: auth.currentUser.uid,
            plan_score:this.tag1,
            population_score:this.tag2,
            selection_score:this.tag3,
            follow_score:this.tag4,
            createdAt: new Date()
          },
          { marge: true }
        );
    },
  },
};
</script>

<style scoped></style>
