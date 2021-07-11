<template>
  <button class="button" :class="color">
    <slot> </slot>
  </button>
</template>

<script>
export default {
    props: ['color']
};
</script>

<style scoped></style>
