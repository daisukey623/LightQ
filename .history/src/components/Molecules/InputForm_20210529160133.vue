<template>
  <section>
    <b-field label="Name">
      <InputBox v-model="name"></InputBox>
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
    name:'',
  },
};
</script>
<style scoped></style>
