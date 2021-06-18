<template>
  <b-menu>
    <b-menu-list label="Menu">
        
      <b-menu-item icon="information-outline" label="メニュー1">
      </b-menu-item>

      <b-menu-item icon="account" label="My Account">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>

    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
    name:'SideMenu',
  data() {
    return {
      isActive: true
    }
  }
}
</script>



<style scoped></style>
