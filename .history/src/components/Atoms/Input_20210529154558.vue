<template>
  <section>
      <b-input v-model="name"></b-input>
  </section>
</template>

<script>
export default {
      name: Input,
  data() {
    return {
      name: 'John Silver',
    };
  },
};
</script>
<style scoped></style>
