<template>
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
