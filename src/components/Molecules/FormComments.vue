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
          <Button color="is-info" @click.native="addComment">回答を送信</Button>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import { db, auth } from '/src/main.js';
import { mapGetters } from 'vuex';
import Button from '@/components/Atoms/Button';
import { ToastProgrammatic as Toast } from 'buefy';

export default {
  data() {
    return {
      comment: '',
      msg: {
        postAnswer: '回答しました！',
        addFollows: 'この投稿ユーザーをフォローしました',
      },
    };
  },
  components: {
    Button,
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
            id: ref.id,
            comment: this.comment,
            post_id: this.$route.params.id,
            user_id: auth.currentUser.uid,
            user_name: auth.currentUser.displayName,
            createdAt: new Date(),
            user_photoURL: auth.currentUser.photoURL,
          },
          { marge: true }
        );
        Toast.open(this.msg.postAnswer);
        if (this.post.user_id !== auth.currentUser.uid) {
          await this.addFollows();
        }

        await this.init();
      } else {
        window.alert('回答が空白です');
      }
    },
    init() {
      this.comment = '';
    },
    async addFollows() {
      let checkMyfollws = this.follows
        .map((item) => item.followed)
        .includes(this.post.user_id);

      if (!checkMyfollws) {
        const ref = await db.collection('follows').doc();
        ref.set(
          {
            id: ref.id,
            following: auth.currentUser.uid,
            followed: this.post.user_id,
            followed_name: this.post.user_name,
            followed_photoURL: this.post.user_photoURL,
          },
          { marge: true }
        );
        Toast.open(this.msg.addFollows);
      } else {
        console.log('セットできません');
      }
    },
  },
};
</script>
<style scoped></style>
