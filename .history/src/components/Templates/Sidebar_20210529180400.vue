
<template>
  <b-menu>
    <MenuList></MenuList>
  </b-menu>
</template>

<script>
import MenuList from '@/components/Molecules/SideMenu';
export default {
    name:'Sidebar',
    components:{
      SideMenu,
    },
  data() {
    return {
      isActive: true
    }
  }
}
</script>



<style scoped></style>
