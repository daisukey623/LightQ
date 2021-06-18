<template>
<div class="columns  is-centered">
<div class="modal  is-active v" v-show="stateModal">
  <div class="modal-background"></div>
  <div class="modal-content" >
    <!-- Any other Bulma elements you want -->
    <p>モーダルが入ります</p>
    <div class="card">
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
  </div>
</template>> 

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