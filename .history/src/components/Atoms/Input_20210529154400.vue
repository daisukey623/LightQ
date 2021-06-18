<template>
  <section>
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>


    <b-field label="Message">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>
  </section>
</template>

<script>
export default {
      name: '',
  data() {
    return {
      name: 'John Silver',
    };
  },
};
</script>
<style scoped></style>
