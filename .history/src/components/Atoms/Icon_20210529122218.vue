<template>
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="information-outline" label="Info"></b-menu-item>
      <b-menu-item icon="settings" :active="isActive" expanded>

        <template #label="props">
          メニュー
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
        </template>
        <b-menu-item icon="account" label="Users"></b-menu-item>
        <b-menu-item icon="cellphone-link">

          <template #label>
            Devices
            <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                <template #trigger>
                    <b-icon icon="dots-vertical"></b-icon>
                </template>
                <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
            </b-dropdown>
          </template>

        </b-menu-item>
        <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
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
