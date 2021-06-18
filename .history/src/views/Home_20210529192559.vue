<div class="columns">
<template>
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="home" label="ホーム"> </b-menu-item>

      <b-menu-item icon="account" :active="isActive" expanded>
        <template #label="props">
          マイページ
          <b-icon
            class="is-pulled-right"
            :icon="props.expanded ? 'menu-down' : 'menu-up'"
          ></b-icon>
        </template>
        <b-menu-item label="質問"></b-menu-item>
        <b-menu-item label="回答"></b-menu-item>
        <b-menu-item label="フォロワーの変化"></b-menu-item>
        <b-menu-item label="タグ"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
      </b-menu>

      <div class="columns">

</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    }
  }
}
</script>



<style scoped>
</style>
