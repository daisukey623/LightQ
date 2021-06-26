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
            <div class="media-content">
              <div class="content">
                <p class="has-text-left has-text-weight-semibold">
                  <strong> @{{ post.user_name }}</strong>
                  <br />
                  {{ post.title }}
                </p>
                <p class="has-text-left" style="white-space:pre-wrap;">
                  {{ post.body }}
                </p>
                <div class="is-flex">
                  <p class=" has-text-left">
                    <span class="tag mx-1 ">{{ post.status }}</span>
                  </p>
                  <p class=" has-text-left">
                    <span class="tag mx-1 has-text-left">{{ post.tags }}</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <h3 class="title is-3 mt-5">ベストアンサー</h3>
        <p v-if="post.best_answer === ''">ベストアンサーはありません。回答受付中です。</p>
        <div class="box mb-1" v-else >
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p class="has-text-left">@{{ bestAnswerComment.user_name }}</p>
                <p class="has-text-left" style="white-space:pre-wrap;">
                  {{ bestAnswerComment.comment }}
                </p>
                <div class="is-flex"></div>
              </div>
            </div>
          </article>
            </div>
  
        <hr />

        <h3 class="title is-3 mt-5">回答する</h3>

        <CommentForm />
        <hr />

        <h3 class="title is-3 mt-5">回答一覧</h3>
        <CommentFeed />
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
import CommentForm from '../components/Molecules/CommentForm';
import CommentFeed from '../components/Organisms/CommentFeed';
import Modal from '../components/Organisms/Modal';
import Questionnaire from '@/components/Organisms/Questionnaire';


export default {
  components: {
    SideMenu,
    Header,
    CommentForm,
    CommentFeed,
    Modal,
    Questionnaire,
  },
  created() {
    this.$store.dispatch('goPost', this.$route.params.id);
    this.$store.dispatch('getCommentsLists', this.$route.params.id);
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

<style scoped></style>
