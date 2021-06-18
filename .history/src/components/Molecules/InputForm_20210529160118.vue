<template>
  <section>
    <b-field label="Name">
      <InputBox ></InputBox>
    </b-field>
  </section>
</template>

<script>
import InputBox from '@/components/Atoms/InputBox.vue';
export default {
      name: 'InputForm',
      components:{
        InputBox,
      },
  data() {
  },
};
</script>
<style scoped></style>
