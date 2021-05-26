<template>
  <div>
    <H2 text="テキスト"/>
          <div class="columns">
      <div class="buttons column">
    <Button/>
    <p>こんにちは</p>
  </div>
</template>

<script>
import H2 from '@/components/Atoms/H2.vue';
import Button from '@/components/Atoms/Button.vue';
export default {
  name: 'HelloWorld',
  components: {
    H2,Button
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
