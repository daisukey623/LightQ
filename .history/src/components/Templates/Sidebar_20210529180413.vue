
<template>
    <SideMenu></SideMenu>

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
