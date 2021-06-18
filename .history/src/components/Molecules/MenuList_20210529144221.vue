<template>
<div>
    <b-menu-list label="Menu">
        <MenuItem icon="information-outline" label="メニュー1"></MenuItem>
      <b-menu-item icon="account" label="My Account">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
</div>
</template>

<script>
import MenuItem from '@component/components/Atoms/MenuItem'
export default {
  name: "Icon",
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
