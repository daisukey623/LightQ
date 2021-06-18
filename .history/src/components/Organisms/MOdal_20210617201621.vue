<template>
<div class="modal  is-active" v-show="stateModal">
  <div class="modal-background"></div>
  <div class="modal-content   columns is-centered " >
    <!-- Any other Bulma elements you want -->
    <p>モーダルが入ります</p>
    <div class="card column is-half ">
  <div class="card-content">
    <div class="content">
      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
    </div>
    <button class="button" @click="closeModal">閉じる</button>
  </div>
</div>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>

</template>
<script src="https://cdn.jsdelivr.net/npm/vue-clickaway@2.2.2/dist/vue-clickaway.min.js">
const clickaway = window.VueClickaway.mixin;
</script>

<script>
export default {
  computed:{
    stateModal(){
      return this.$store.getters.stateModal
    }
  },
  methods:{
    closeModal(){
      this.$store.dispatch('closeModal')
    }
  }
}
</script>

<style scoped>


</style>