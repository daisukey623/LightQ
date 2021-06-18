<template>
  <section>
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>
  </section>
</template>

<script>
import H2 from '@/components/Atoms/Input.vue';
export default {
      name: 'InputForm',
      co
  data() {
    return {
      name: 'John Silver',
    };
  },
};
</script>
<style scoped></style>
