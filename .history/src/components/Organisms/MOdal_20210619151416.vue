<template>
  <div class="modal  is-active" v-show="stateModal">
    <div class="modal-background"></div>
    <div class="modal-content   columns is-centered ">
      <!-- Any other Bulma elements you want -->
      <div class="card column is-half ">
        <div class="card-content">
          <div class="content">
            <Form></Form>

          </div>
          <button class="button" @click="closeModal">閉じる</button>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import Form from '@/components/Molecules/Form';
import { mapGetters } from 'vuex';

export default {
  components:{
    Form,
  },
  computed: {

...mapGetters([stateModal])
      // return this.$store.getters.stateModal;

  },
  methods: {
    closeModal() {
      this.$store.dispatch('closeModal');
    },
    onOutsideClick() {
      if (this.stateModal === true) {
        this.$store.dispatch('closeModal');
      }
    },
  },

};
</script>

<style scoped></style>
