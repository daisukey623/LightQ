<template>
  <section>
    <b-field label="Name">
      <Inputa</Input>
    </b-field>
  </section>
</template>

<script>
import Input from '@/components/Atoms/Input.vue';
export default {
      name: 'InputForm',
      components:{
        Input,
      },
  data() {
  },
};
</script>
<style scoped></style>
