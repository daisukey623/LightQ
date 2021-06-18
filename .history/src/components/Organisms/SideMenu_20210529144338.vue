<template>
  <b-menu>
    <MenuList> </MenuList>
  </b-menu>
</template>

<script>
import Icon from '@/components/Molecules/MenuList';
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
