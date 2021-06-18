<template>
  <section>
    <b-field label="Name">
      <InputBox v-model="name"></InputBox>
    </b-field>
    <b-fieldlabel="Email"
            type="is-danger"
            message="This email is invalid">>
      <InputBox v-model="name"></InputBox>
    </b-fieldlabel=>
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
    return{
      name:'',
    }
  },
};
</script>
<style scoped></style>
