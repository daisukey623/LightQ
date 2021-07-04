<template>
  <div>
    <div v-for="(commentsList, index) in commentsLists" :key="`first-${index}`">
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
                  <div  class="has-text-right">

                  <button
                    class="delete"
                    @click="deleteComment(index)"
                    v-if="auth.currentUser.uid === commentsList.user_id"
                  >
                  </button>
                  </div>
                  <small class="mr-4 has-text-grey"
                    >@{{ commentsList.user_name }}</small
                  >
                  <small class="has-text-grey">{{
                    `${commentsList.createdAt.toDate().getFullYear()}/
                    ${commentsList.createdAt.toDate().getMonth() +
                      1}/${commentsList.createdAt
                      .toDate()
                      .getDate()} ${commentsList.createdAt
                      .toDate()
                      .getHours()}:${commentsList.createdAt
                      .toDate()
                      .getMinutes()}
                    `
                  }}</small>
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
                    ベストアンサーにする
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
      this.showQuestionnaire();
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
    showQuestionnaire() {
      this.$store.dispatch('showQuestionnaire');
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
