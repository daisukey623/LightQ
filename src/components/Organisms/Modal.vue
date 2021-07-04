<template>
  <div class="modal  is-active" v-show="stateModal">
    <div class="modal-background"></div>
    <div class="modal-content   columns is-centered ">
      <div class="card column is-half  ">
        <div class="has-text-right mr-5">
          <button class="delete " @click="closeModal">閉じる</button>
          </div>
        <div class="card-content">
          <div class="content">
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Molecules/Form';
import { mapGetters } from 'vuex';

export default {
  components: {
    Form,
  },
  computed: {
    ...mapGetters(['stateModal']),
  },
  methods: {
    closeModal() {
      this.$store.dispatch('closeModal');
    },
    onOutsideClick() {
      if (this.stateModal) {
        this.$store.dispatch('closeModal');
      }
    },
  },
};
</script>

<style scoped></style>
