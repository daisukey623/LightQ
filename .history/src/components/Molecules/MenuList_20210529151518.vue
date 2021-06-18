<template>
  <div>
    <b-menu-list label="Menu">
      <b-menu-item icon="information-outline" label=> </b-menu-item>

      <b-menu-item icon="account" label="My Account">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
    </b-menu-list>


  </div>
</template>

<script>
export default {
  name: 'MenuList',
  components: {},
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style scoped></style>
