<template>

    <InputForm></InputForm>

</template>

<script>
import InputForm from '@/components/Molecules/InputForm';
export default {
    name:'SideMenu',
    components:{
      MenuList,
    },
  data() {
    return {
      isActive: true
    }
  }
}
</script>



<style scoped></style>
