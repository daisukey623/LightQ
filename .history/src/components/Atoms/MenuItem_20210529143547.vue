<template>
<div>
<slot>
        <b-menu-item></b-menu-item>

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
