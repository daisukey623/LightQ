<template>
<div>
<h1>postsページ</h1>
<p>docid：{{$route.params.id}}</p>
<p>タイトル：{{post.title}}</p>
<button @click="test">ボタン</button>
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
      console.log($$route.params.id)
    }
  },


}
</script>

<style scoped>

</style>