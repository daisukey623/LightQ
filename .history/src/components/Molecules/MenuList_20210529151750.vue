<template>
  <div>
    <b-menu-list label="Menu">
      <b-menu-item icon="" label="ホーム"> </b-menu-item>

      <b-menu-item icon="account" label="マイページ">
        <b-menu-item label="質問"></b-menu-item>
        <b-menu-item label="回答"></b-menu-item>
        <b-menu-item label="フォロワーの変化"></b-menu-item>
        <b-menu-item label="タグ"></b-menu-item>
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
