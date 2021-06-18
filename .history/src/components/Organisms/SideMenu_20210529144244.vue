<template>
  <b-menu>
    <Icon></Icon>
  </b-menu>
</template>

<script>
import Icon from '@/Users/yokoyamadaisuke/Google ドライブ/05_frontEnd/LightQ/src/components/Molecules/MenuList.vue';
export default {
    name:'SideMenu',
    components:{
      Icon,
    },
  data() {
    return {
      isActive: true
    }
  }
}
</script>



<style scoped></style>
