<template>
  <div>
    <slot>
      <b-menu-item></b-menu-item>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style scoped></style>
