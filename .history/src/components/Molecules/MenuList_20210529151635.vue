<template>
  <div>
    <b-menu-list label="Menu">
      <b-menu-item icon="information-outline" label="ホーム"> </b-menu-item>

      <b-menu-item icon="account" label="マイページ">
        <b-menu-item label="質問"></b-menu-item>
        <b-menu-item label="回答s"></b-menu-item>
        <b-menu-item label=""></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
フォロワーの変化

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
