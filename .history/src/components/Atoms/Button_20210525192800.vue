<template>
  <div>
    <section>
      <div class="buttons">
        <b-button type="is-info">Primary</b-button>
      </div>
      <div class="columns">
  <div class="column">1</div>
  <div class="column">2</div>
  <div class="column">3</div>
  <div class="column">4</div>
  <div class="column">5</div>
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

<style scoped></style>
