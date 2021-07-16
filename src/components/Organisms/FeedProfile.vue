<template>
  <div>
    <div v-for="(postsList, index) in myPosts" :key="`first-${index}`">
      <div @click="toPosts(index)" class="isPointer">
        <div class="box mb-1">
          <article class="media">
            <div class="media-left">
              <figure class="mb-3">
                <p class="image  ">
                  <img
                    class="is-rounded isFit"
                    :src="postsList.user_photoURL"
                  />
                </p>
              </figure>
              <span class="tag is-info is-light mx-1 ">{{
                postsList.status
              }}</span>
            </div>

            <div class="media-content">
              <div class="content">
                <p class="has-text-left">
                  {{ postsList.title }}
                  <br />
                  <small class="mr-4 has-text-grey"
                    >@{{ postsList.user_name }}</small
                  >
                  <small class="has-text-grey">{{ setDate(postsList) }}</small>
                </p>
                <div class="is-flex">
                  <p class=" has-text-left mt-3">
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
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  created() {},

  computed: {
    ...mapGetters(["myPosts"])
  },
  methods: {
    toPosts(index) {
      this.$router.push(`/posts/${this.myPosts[index].id}`);
    },
    setDate(postsList) {
      const date = postsList.createdAt.toDate();
      return `
                ${date.getFullYear()}/
                ${date.getMonth() + 1}/
                ${date.getDate()}
                ${date.getHours()}:
                ${date.getMinutes()}
              `;
    }
  }
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
