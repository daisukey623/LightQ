<template>
<div>
<h1>postsページ</h1>
<p>docid：{{$route.params.id}}</p>
<p>タイトル：{{post}}</p>
<button @click="test"></button>
</div>
  
</template>

<script>
import { mapGetters } from "vuex";
export default {

  computed:{
    ...mapGetters(['post'])
  },
  methods:{
    test(){
      console.log(this.post)
    }
  }

  
}
</script>

<style scoped>

</style>