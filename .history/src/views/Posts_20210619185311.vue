<template>
<div>
<h1>postsページ</h1>
<p>docid：{{$route.params.id}}</p>
<p>タイトル：{{post}}</p>
<button @click="test">ボタン</button>
</div>
  
</template>

<script>
import { mapGetters } from "vuex";
import createPersistedState from "vuex-persistedstate";
export default {

  computed:{
    ...mapGetters(['post'])
  },
  methods:{
    test(){
      console.log(this.post)
    }
  }

    plugins: [createPersistedState()] 
}
</script>

<style scoped>

</style>