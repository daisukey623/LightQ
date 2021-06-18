<template>
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="information-outline" label="メニュー1"></b-menu-item>
      <b-menu-item icon="settings" :active="isActive" expanded>

        <template #label="props">
          メニュー2
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
        </template>
        <b-menu-item icon="account" label="メニュー2-1"></b-menu-item>
        <b-menu-item icon="cellphone-link">

          <template #label>
              メニュー2-2

          </template>

        </b-menu-item>
      </b-menu-item>
      
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
