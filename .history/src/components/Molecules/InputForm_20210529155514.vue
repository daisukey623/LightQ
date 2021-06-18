<template>
  <section>
    <b-field label="Name">
      <Input></Input>
    </b-field>
  </section>
</template>

<script>
import InputBox from '@/components/Atoms/InputBox.vue';
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
