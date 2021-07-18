<template>
  <div class="container ">
    <Header />

    <H1>詳細ページ</H1>

    <div class="columns  mr-4 ml-4">
      <div class="submenu column is-3 ">
        <SideMenu class="is-hidden-mobile"></SideMenu>
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
                  <small class="has-text-grey">{{ setDate(post) }}</small>
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
                  <small class="has-text-grey">{{
                    setDate(bestAnswerComment)
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

        <H2 class="mt-5">回答する</H2>

        <FormComments />
        <hr />

        <H2 class="mt-5">回答一覧</H2>
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
import H1 from '@/components/Atoms/H1';
import H2 from '@/components/Atoms/H2';

export default {
  components: {
    SideMenu,
    Header,
    FormComments,
    FeedComments,
    Modal,
    Questionnaire,
    H1,
    H2,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('getPost', this.$route.params.id);
    this.$store.dispatch('getComments', this.$route.params.id);
  },

  beforeUpdate() {
    this.$store.dispatch('getBestAnswerComment', this.post.best_answer);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('resetStore');
    next();
  },

  computed: {
    ...mapGetters(['post', 'bestAnswerComment']),

    setDate() {
      return function(item) {
        return `
                ${item.createdAt.toDate().getFullYear()}/
                ${item.createdAt.toDate().getMonth() + 1}/
                ${item.createdAt.toDate().getDate()}
                ${item.createdAt.toDate().getHours()}:
                ${item.createdAt.toDate().getMinutes()}
              `;
      };
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
