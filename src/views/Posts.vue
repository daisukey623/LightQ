<template>
  <div class="container">
    <Header />

    <h2 class="subtitle is-2">詳細ページ</h2>

    <div class="columns">
      <div class="submenu column is-3">
        <SideMenu />
      </div>
      <div class="column is-6">
        <div class="box mb-1">
          <article class="media">
            <div class="media-left">
              <figure class="mb-3">
                <p class="image  ">
                  <img class="is-rounded isFit" :src="post.user_photoURL" />
                </p>
              </figure>
              <span class="tag is-info is-light mx-1 ">{{ post.status }}</span>
            </div>

            <div class="media-content">
              <div class="content">
                <p class="has-text-left">
                  {{ post.title }}
                  <br />
                  <small class="mr-4 has-text-grey"
                    >@{{ post.user_name }}</small
                  >
                  <small class="has-text-grey">{{
                    `${post.createdAt.toDate().getFullYear()}/
                    ${post.createdAt.toDate().getMonth() +
                      1}/${post.createdAt
                      .toDate()
                      .getDate()} ${post.createdAt
                      .toDate()
                      .getHours()}:${post.createdAt.toDate().getMinutes()}
                    `
                  }}</small>
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
        <h3 class="title is-3 mt-5">ベストアンサー</h3>
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
                  <small class="has-text-grey">{{
                    `${bestAnswerComment.createdAt.toDate().getFullYear()}/
                    ${bestAnswerComment.createdAt.toDate().getMonth() +
                      1}/${bestAnswerComment.createdAt
                      .toDate()
                      .getDate()} ${bestAnswerComment.createdAt
                      .toDate()
                      .getHours()}:${bestAnswerComment.createdAt
                      .toDate()
                      .getMinutes()}
                    `
                  }}</small>
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

        <hr />

        <h3 class="title is-3 mt-5">回答する</h3>

        <FormComments />
        <hr />

        <h3 class="title is-3 mt-5">回答一覧</h3>
        <FeedComments />
        <Modal />
        <Questionnaire />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SideMenu from '../components/Organisms/SideMenu';
import Header from '../components/Organisms/Header';
import FormComments from '../components/Molecules/FormComments';
import FeedComments from '../components/Organisms/FeedComments';
import Modal from '../components/Organisms/Modal';
import Questionnaire from '@/components/Organisms/Questionnaire';

export default {
  components: {
    SideMenu,
    Header,
    FormComments,
    FeedComments,
    Modal,
    Questionnaire,
  },
  created() {
    this.$store.dispatch('goPost', this.$route.params.id);
    this.$store.dispatch('getComments', this.$route.params.id);
  },

  beforeUpdate() {
    this.$store.dispatch('getBestAnswerComment', this.post.best_answer);
  },

  computed: {
    ...mapGetters(['post', 'bestAnswerComment']),
  },
  methods: {},
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
