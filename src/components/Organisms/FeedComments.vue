<template>
  <section>
    <div v-for="(commentsList, index) in comments" :key="`first-${index}`">
      <div class="isPointer">
        <div class="box mb-1">
          <article class="media">
            <div class="media-left">
              <figure class="mb-3">
                <p class="image  ">
                  <img
                    class="is-rounded isFit"
                    :src="commentsList.user_photoURL"
                  />
                </p>
              </figure>
            </div>
            <div class="media-content ">
              <div class="content">
                <div class="has-text-left">
                  <div class="has-text-right">
                    <button
                      class="delete"
                      @click="deleteComment(commentsList.id)"
                      v-if="auth.currentUser.uid === commentsList.user_id"
                    ></button>
                  </div>
                  <small class="mr-4 has-text-grey"
                    >@{{ commentsList.user_name }}</small
                  >
                  <small class="has-text-grey">{{
                    setDate(commentsList)
                  }}</small>
                </div>
                <p class="has-text-left" style="white-space:pre-wrap;">
                  {{ commentsList.comment }}
                </p>
                <div
                  class="is-flex"
                  v-if="auth.currentUser.uid === post.user_id"
                >
                  <Button
                    class="is-small has-text-left"
                    @click.native="uppdatePostStatus(commentsList.id)"
                    >ベストアンサーにする</Button
                  >
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { auth, db } from '/src/main.js';
import { mapGetters } from 'vuex';
import Button from '@/components/Atoms/Button';
import { ToastProgrammatic as Toast } from 'buefy';

export default {
  data() {
    return {
      auth: auth,
      msg: {
        bestAnswer: 'ベストアンサーにしました！',
        deleteComment: 'コメントを削除しました',
      },
    };
  },
  components: {
    Button,
  },
  computed: {
    ...mapGetters(['comments', 'post']),
  },

  methods: {
    uppdatePostStatus(id) {
      this.$store.dispatch('uppdatePostStatus', {
        postId: this.$route.params.id,
        commentId: id,
      });
      Toast.open(this.msg.bestAnswer);
      this.showQuestionnaire();
    },
    async deleteComment(id) {
      if (window.confirm('コメントを削除しても良いですか？')) {
        await db
          .collection('comments')
          .doc(id)
          .delete();
        Toast.open(this.msg.deleteComment);
      }
    },
    showQuestionnaire() {
      this.$store.dispatch('showQuestionnaire');
    },
    setDate(commentsList) {
      const date = commentsList.createdAt.toDate();
      return `
                ${date.getFullYear()}/
                ${date.getMonth() + 1}/
                ${date.getDate()}
                ${date.getHours()}:
                ${date.getMinutes()}
              `;
    },
  },
};
</script>

<style scoped>
.isPointer {
  cursor: pointer;
}
.isFit {
  width: 64px;
  height: 64px;
  object-fit: cover;
}
</style>
