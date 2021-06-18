<template>
  <b-menu>
    <M></M>
  </b-menu>
</template>

<script>
import MenuList from '@/components/Molecules/InputForm';
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
