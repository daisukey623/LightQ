
<template>
  <b-menu>
    <MenuList></MenuList>
  </b-menu>
</template>

<script>
import MenuList from '@/components/Molecules/SideMenu';
export default {
    name:'',
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
