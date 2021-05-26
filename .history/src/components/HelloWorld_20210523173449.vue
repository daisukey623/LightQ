<template>
  <div>
    <TestH2 />
    <p>こんにちは</p>
  </div>
</template>

<script>
import TestH2 from 'src/components/Atoms/TestH2.vue';
export default {
  name: 'HelloWorld',
  components: {
    HelloWorld
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
