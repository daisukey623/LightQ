<template>
  <div>
    <h2>H2が入ります</h2>
  </div>
</template>

<script>
export default {
  name: 'H2',
  props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
};
</script>

<style scoped></style>
