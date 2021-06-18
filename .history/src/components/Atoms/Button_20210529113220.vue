<template>
  <div>
    <slot
    <section>
        <b-button type="is-info">{{text}}</b-button>
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
</style>

