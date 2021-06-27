<template>
  <div>
    <div v-for="(commentsList, index) in commentsLists" :key="`first-${index}`">
      <div class="isPointer">
        <div class="box mb-1">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <div class="has-text-left">
                  <p
                    class="has-text-right"
                    @click="deleteComment(index)"
                    v-if="auth.currentUser.uid === commentsList.user_id"
                  >
                    <a class="tag is-delete "></a>
                  </p>
                  @{{ commentsList.user_name }}
                </div>
                <p class="has-text-left" style="white-space:pre-wrap;">
                  {{ commentsList.comment }}
                </p>
                <div
                  class="is-flex"
                  v-if="auth.currentUser.uid === post.user_id"
                >
                  <button
                    class="button is-small has-text-left"
                    @click="uppdatePostStatus(index)"
                  >
                    ベストアンサー
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '/src/main.js';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      auth: auth,
    };
  },
  created() {},
  computed: {
    ...mapGetters([
      'commentsLists',
      'commentsUsersLists',
      'commentsListsId',
      'post',
    ]),
  },
  methods: {
    uppdatePostStatus(index) {
      this.$store.dispatch('uppdatePostStatus', {
        postId: this.$route.params.id,
        commentId: this.commentsListsId[index],
      });
      this.showQuestionnaire()
    },
    async deleteComment(index) {
      if (window.confirm('コメントを削除しても良いですか？')) {
        await db
          .collection('comments')
          .doc(this.commentsListsId[index])
          .delete();
        window.alert('削除しました');
      }
    },
      showQuestionnaire(){
       this.$store.dispatch('showQuestionnaire');
    }
  },
};
</script>

<style scoped>
.isPointer {
  cursor: pointer;
}
</style>
