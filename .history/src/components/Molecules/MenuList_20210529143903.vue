<template>
<div>
<slot>
  src/components/Atoms/MenuItem.vue
      <b-menu-item icon="account" label="My Account">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>

    </b-menu-list>
     </slot>
</div>
</template>

<script>
import MenuItem from '@component/components/Atoms/MenuItem'
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
