<template>
  <div>
    <div v-for="(postsList, index) in postsLists" :key="`first-${index}`">
      <div @click="toPosts(index)" class="isPointer">
        <div class="box mb-1">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p class="has-text-left">
                  <!-- <strong>John Smith</strong>
                  <br /> -->
                  {{ postsList.title }}
                </p>
                <div class="is-flex">
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
export default {
  created() {
    this.$store.dispatch('getPostsLists');
  },
  computed: {
    ...mapGetters(['postsLists','postsLists']),
  },
  methods: {
    toPosts(index) {
      // console.log(index);
      // console.log(this.postsLists[index].user_id);
      console.log(this.postsListsId[index])
      this.$store.dispatch('goPost',this.postsListsId[index])
      // this.$store.dispatch('goPost',this.postsLists[index].user_id)
      // this.$router.push({ path: '/signin' });
    },
  },
};
</script>

<style scoped>
.isPointer {
  cursor: pointer;
}
</style>
