<template>
  <section><slot>
      <b-input v-model="name"></b-input></slot>
  </section>
</template>

<script>
export default {
      name: 'InputBox',
  data() {
    return {
      name: 'John Silver',
    };
  },
};
</script>
<style scoped></style>
