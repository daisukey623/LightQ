<template>
<div>
    <b-menu-list label="Menu">
        <MenuItem>あああ</MenuItem>
      <b-menu-item icon="account" label="My Account">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
    </b-menu-list>

</div>
</template>

<script>
import MenuItem from '@/components/Atoms/MenuItem'
export default {
  name: "MenuList",
  components: {
    MenuItem,
    },
  data() {
    return {
      isActive: true
    };
  }
};
</script>



<style scoped></style>
