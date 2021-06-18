<template>
  <b-menu>
    <Icon></Icon>
  </b-menu>
</template>

<script>
import Icon from '@/components/Atoms/Icon.vue';
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
