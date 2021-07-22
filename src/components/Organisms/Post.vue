<template>
  <div>
    <div class="box mb-1">
      <article class="media">
        <div class="media-left">
          <figure class="mb-3">
            <p class="image  ">
              <img class="is-rounded isFit" :src="post.user_photoURL" />
            </p>
          </figure>
          <span
            class="tag is-info is-light mx-1 is-rounded"
            v-if="post.status === '受付中'"
            >{{ post.status }}</span
          >
          <span class="tag  is-light mx-1 is-rounded" v-else>{{
            post.status
          }}</span>
        </div>

        <div class="media-content">
          <div class="content">
            <p class="has-text-left">
              {{ post.title }}
              <br />
              <small class="mr-4 has-text-grey">@{{ post.user_name }}</small>
              <small class="has-text-grey">{{ postDate }}</small>
            </p>
            <p class="has-text-left" style="white-space:pre-wrap;">
              {{ post.body }}
            </p>
            <div class="is-flex">
              <p class=" has-text-left mt-3">
                <span class="tag mx-1 has-text-left">{{ post.tags }}</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
    <H2 class="mt-5">ベストアンサー</H2>
    <p v-if="post.best_answer === ''">
      ベストアンサーはありません。回答受付中です。
    </p>
    <div class="box mb-1" v-else>
      <article class="media">
        <div class="media-left">
          <figure class="mb-3">
            <p class="image  ">
              <img
                class="is-rounded isFit"
                :src="bestAnswerComment.user_photoURL"
              />
            </p>
          </figure>
        </div>

        <div class="media-content">
          <div class="content">
            <p class="has-text-left">
              <br />
              <small class="mr-4 has-text-grey"
                >@{{ bestAnswerComment.user_name }}</small
              >
              <small class="has-text-grey">{{ bestAnswerCommentDate }}</small>
            </p>
            <p class="has-text-left" style="white-space:pre-wrap;">
              {{ bestAnswerComment.comment }}
            </p>
            <div class="is-flex">
              <p class=" has-text-left mt-3"></p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import H2 from '@/components/Atoms/H2';

export default {
  components: {
    H2,
  },
  data() {
    return {
      postDate: 2020 / 1 / 1,
      bestAnswerCommentDate: 2020 / 1 / 1,
    };
  },
  created() {
    this.$store.dispatch('getPost', this.$route.params.id);
  },

  async beforeUpdate() {
    this.$store.dispatch('getBestAnswerComment', this.post.best_answer);
    this.setDate();
  },
  updated() {},

  computed: {
    ...mapGetters(['bestAnswerComment', 'post']),
  },
  methods: {
    setDate() {
      this.postDate = this.setPostDate();
      this.bestAnswerCommentDate = this.setBestAnswerCommentDate();
    },

    setPostDate() {
      const date = this.post.createdAt.toDate();
      return `
                ${date.getFullYear()}/
                ${date.getMonth() + 1}/
                ${date.getDate()}
                ${date.getHours()}:
                ${date.getMinutes()}
              `;
    },
    setBestAnswerCommentDate() {
      const date = this.bestAnswerComment.createdAt.toDate();
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
