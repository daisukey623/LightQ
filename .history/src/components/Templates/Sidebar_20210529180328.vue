
<template>
  <b-menu>
    <MenuList></MenuList>
  </b-menu>
</template>

<script>
import MenuList from '@/components/Molecules/';
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
