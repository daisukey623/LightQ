<template>
  <div>
    <div v-for="(commentsList, index) in commentsLists" :key="`first-${index}`">
      <div class="isPointer">
        <div class="box mb-1">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p class="has-text-left">
                  @{{commentsList.user_name}}
                </p>
                <p class="has-text-left" style="white-space:pre-wrap;">
                  {{ commentsList.comment }}
                </p>
                <div class="is-flex"  v-if="auth.currentUser.uid === post.user_id">
                  <button class="button is-small has-text-left"
                  @click="uppdatePostStatus(index)" >ベストアンサー</button>
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
import { auth } from '/src/main.js';
import { mapGetters } from 'vuex';
export default {
  data(){
    return{
      auth:auth
    }
  },
  created() {
  },
  computed: {
    ...mapGetters(['commentsLists','commentsUsersLists','commentsListsId','post']),

  },
  methods: {
    uppdatePostStatus(index){
      this.$store.dispatch('uppdatePostStatus',{postId:this.$route.params.id,commentId:this.commentsListsId[index]})
    },
  },
};
</script>

<style scoped>
.isPointer {
  cursor: pointer;
}
</style>
