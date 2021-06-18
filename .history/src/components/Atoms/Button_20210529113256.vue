<template>
  <div>
    <slot>
      <section>
        <b-button type="is-info">{{ text }}</b-button>
      </section>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style scoped></style>
