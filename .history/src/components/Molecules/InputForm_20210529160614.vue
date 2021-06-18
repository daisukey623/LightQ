<template>
  <section>
    <b-field label="Name">
      <InputBox v-model="name"></InputBox>
    </b-field>
    <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
      <InputBox type="email"
                value="john@"
                maxlength="30"></InputBox>
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
    return{
      name:'',
    }
  },
};
</script>
<style scoped></style>
