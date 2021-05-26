<template>
    <section>
      <b-button @click="clickMe">Click Me</b-button>
    </section>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open('Clicked!!');
    },
  },
};
</script>

<style scoped></style>
