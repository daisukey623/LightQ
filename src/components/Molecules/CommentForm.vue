<template>
  <article class="media">
    <div class="media-content">
      <div class="field">
        <p class="control">
          <textarea
            class="textarea"
            placeholder="質問の回答を入力してください"
            v-model="comment"
          ></textarea>
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
import { db, auth } from '/src/main.js';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      comment: '',
    };
  },
  created() {
    this.$store.dispatch('getFollows');
  },
  computed: {
    ...mapGetters(['post', 'bestAnswerComment', 'follows']),
  },
  methods: {
    async addComment() {
      if (this.comment !== '') {
        const ref = await db.collection('comments').doc();
        ref.set(
          {
            comment: this.comment,
            post_id: this.$route.params.id,
            user_id: auth.currentUser.uid,
            user_name: auth.currentUser.displayName,
          },
          { marge: true }
        );
        await this.addFollows();
        await this.init();
      } else {
        window.alert('回答が空白です');
      }
    },
    init() {
      this.comment = '';
    },
    async addFollows() {
      let check = this.follows
        .map((item) => item.followed)
        .includes(this.post.user_id);
      if (!check) {
        const ref = await db.collection('follows').doc();
        ref.set(
          {
            id: ref.id,
            following: auth.currentUser.uid,
            followed: this.post.user_id,
          },
          { marge: true }
        );
      }else{
        console.log('セットできません')
      }
    },

  },
};
</script>

<style scoped></style>
