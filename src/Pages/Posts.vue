<template>
  <section>
    <div class="bg-color"></div>
    <div class="container ">
      <Header />

      <H1>詳細ページ</H1>

      <div class="columns  mr-4 ml-4">
        <div class="submenu column is-3 ">
          <SideMenu class="is-hidden-mobile"></SideMenu>
        </div>
        <div class="column is-6">
          <Post></Post>

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
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import SideMenu from '../components/Organisms/SideMenu';
import Header from '../components/Organisms/Header';
import FormComments from '../components/Molecules/FormComments';
import FeedComments from '../components/Organisms/FeedComments';
import Modal from '../components/Organisms/Modal';
import Questionnaire from '@/components/Organisms/Questionnaire';
import Post from '@/components/Organisms/Post';
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
    Post,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('getPost', this.$route.params.id);
    this.$store.dispatch('getComments', this.$route.params.id);
  },

  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('resetStore');
    next();
  },

  computed: {
    ...mapGetters(['bestAnswerComment', 'post']),
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
