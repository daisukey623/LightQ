<template>
  <section>
    <b-field label="Name">
      <Input</Input>
    </b-field>
  </section>
</template>

<script>
import H2 from '@/components/Atoms/Input.vue';
export default {
      name: 'InputForm',
      components:{
        Input,
      },
  data() {
    return {
      name: 'John Silver',
    };
  },
};
</script>
<style scoped></style>
