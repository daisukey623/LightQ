<template>
  <div>
    <p>フォロー</p>
    <div v-for="(list, index) in follows" :key="`first-${index}`">
      <div class="isPointer box mb-1">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <div class="has-text-left">
                <p
                  class="has-text-right"
                  @click="deleteComment(index)"
                  v-if="auth.currentUser.uid === list.following"
                >
                  <a class="tag is-delete "></a>
                </p>
                @{{ list.followed_name }}
              </div>
            </div>
          </div>
        </article>
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
  created(
    
  ) {},
  computed: {
    ...mapGetters([
      'follows',
    ]),
  },
  methods: {

    async deleteComment(index) {
      if (window.confirm('コメントを削除しても良いですか？')) {
        await db
          .collection('comments')
          .doc(this.commentsListsId[index])
          .delete();
        window.alert('削除しました');
      }
    },

  },
};
</script>

<style scoped>
.isPointer {
  cursor: pointer;
}
</style>
