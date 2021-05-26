<template>
  <div>
    <section>
      <div class="columns">
      <div class="buttons">
        <b-button type="is-info" class="red">Primary</b-button>
      </div>
      </div>
      
    </section>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
};
</script>

<style scoped>
.text {
  color: red;
}
</style>

