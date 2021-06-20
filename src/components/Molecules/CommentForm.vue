<template>
<article class="media">

  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="質問の回答を入力してください" v-model="comment"></textarea>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button" @click="addComment">回答を送信</button>
      </p>
    </div>
  </div>
</article>
</template>

<script>
import { db,auth } from '/src/main.js';

export default {
  data() {
    return {
      comment:'',
  }
  },
  methods:{
    addComment() {
      if(this.comment !== ''){
      db.collection('comments')
        .doc()
        .set(
          {
            comment: this.comment,
            post_id: this.$route.params.id,
            user_id:auth.currentUser.uid
          },
          { marge: true }
        );
      this.init();
      } else{
        window.alert('回答が空白です')
      }
    },
    init(){
      this.comment = '';
    }
  }
};
</script>

<style scoped></style>
