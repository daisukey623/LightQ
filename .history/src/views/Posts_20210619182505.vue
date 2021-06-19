<template>
<div>
<h1>postsページ</h1>
<p>docid：{{$route.params.id}}</p>
<p>docid：{{}}</p>
<p>タイトル：</p>

</div>
  
</template>

<script>
import { mapGetters } from "vuex";
export default {

  computed:{
    ...mapGetters(['post'])
  },

  
}
</script>

<style scoped>

</style>