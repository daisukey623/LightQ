<template>
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="information-outline" label="Info"></b-menu-item>
      <b-menu-item icon="settings" :active="isActive" expanded>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
    name:'Icon',
  data() {
    return {
      isActive: true
    }
  }
}
</script>



<style scoped></style>
