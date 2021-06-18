
<template>
  <b-menu>
    <MenuList></MenuList>
  </b-menu>
</template>

<script>
import MenuList from '@/components/Molecules/SideMenu';
export default {
    name:'SideMenu',
    components:{
      ,
    },
  data() {
    return {
      isActive: true
    }
  }
}
</script>



<style scoped></style>
