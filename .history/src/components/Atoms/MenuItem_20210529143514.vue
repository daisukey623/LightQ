<template>
<div>
<slot>
    <b-menu-list label="Menu">
        
      <b-menu-item icon="information-outline" label="メニュー1">
      </b-menu-item>

     </slot>
</div>
</template>

<script>
export default {
  name: "Icon",
  data() {
    return {
      isActive: true
    };
  }
};
</script>



<style scoped></style>
