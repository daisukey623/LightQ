<template>
<div>
<h1>postsページ</h1>
<p>docid：{{$route.params.id}}</p>
<p>タイトル：{{this.post}}</p>

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