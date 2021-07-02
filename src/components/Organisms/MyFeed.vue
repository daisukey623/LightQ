<template>
  <div>
    <div v-for="(postsList, index) in myPosts" :key="`first-${index}`">
      <div @click="toPosts(index)" class="isPointer">
        <div class="box mb-1">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p class="has-text-left">
                  {{ postsList.title }}
                </p>
                <div class="is-flex">
                  <p class=" has-text-left">
                    <span class="tag mx-1 ">@{{ postsList.user_name }}</span>
                  </p>
                  <p class=" has-text-left">
                    <span class="tag mx-1 ">{{ postsList.status }}</span>
                  </p>
                  <p class=" has-text-left">
                    <span class="tag mx-1 has-text-left">{{
                      postsList.tags
                    }}</span>
                  </p>
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
import { mapGetters } from 'vuex';
import { auth } from '/src/main.js';

export default {
  created() {
    this.$store.dispatch('getPostsLists');
  },
  computed: {
    ...mapGetters(['postsLists']),
    myPosts() {
     return this.postsLists.filter(function(myPost) {
        return myPost.user_id === auth.currentUser.uid;
      });
    },
  
  },
  methods: {
    toPosts(index) {
      this.$router.push(`/posts/${this.myPosts[index].id}`);
    },

  },
};
</script>

<style scoped>
.isPointer {
  cursor: pointer;
}
</style>
