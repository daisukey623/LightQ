<template>
  <div class="modal  is-active" v-show="isShowQuestionnaireSignUp">
    <div class="modal-background"></div>
    <div class="modal-content columns is-centered">
      <div class="card column is-half ">
        <div class="card-content">
          <p class=" is-size-5 has-text-weight-bold">現在の採用業務の理解度を登録しましょう</p>
          <p>以降の振り返りに役立ちます</p>
          <b-field label="採用計画" class="m-6">
            <b-slider
              v-model="value_tag1"
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
              v-model="value_tag2"
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
              v-model="value_tag3"
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
              v-model="value_tag4"
              :max="100"
              tooltip-always
              aria-label="内定者フォロー"
            >
              <b-slider-tick :value="0">Beginnerr</b-slider-tick>
              <b-slider-tick :value="50">OK</b-slider-tick>
              <b-slider-tick :value="100">Perfect</b-slider-tick>
            </b-slider>
          </b-field>
          <button class="button" type="submit" @click="send">
           完了する
          </button>

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
      value_tag1: 0,
      value_tag2: 0,
      value_tag3: 0,
      value_tag4: 0,
    };
  },
  computed: {
    ...mapGetters(['isShowQuestionnaireSignUp']),
  },
  methods: {
    closeModal() {
      this.$store.dispatch('closeModal');
    },
    send() {
      this.setScores();
      this.$router.push('/home');
      this.closeModal()
    },
      setScores() {
      const ref = db.collection('scores')
        .doc()
        ref.set(
          {
            id:ref.id,
            user_id: auth.currentUser.uid,
            plan_score:this.value_tag1,
            population_score:this.value_tag2,
            selection_score:this.value_tag3,
            follow_score:this.value_tag4,
            createdAt: new Date()
          },
          { marge: true }
        );
    },
  },
};
</script>

<style scoped></style>
