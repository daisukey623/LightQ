<template>
  <div class="container">
    <Header/>

    <h2 class="subtitle is-2">詳細ページ</h2>

    <div class="columns">
      <div class="submenu column is-3">
        <SideMenu/>
      </div>
      <div class="column is-6">
        <div class="box mb-1">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p class="has-text-left has-text-weight-semibold">
                  <strong>John Smith</strong>
                  <br />
                  {{ post.title }}
                </p>
                <p class="has-text-left">{{ post.body }}</p>
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
        <div class="mt-5">
        <h3 class="title is-3">回答する</h3>
         <CommentForm/>
         <CommentFeed/>
         </div>
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

export default {
  components: {
    SideMenu,
    Header,
    CommentForm,
    CommentFeed
  },
  created() {
    this.$store.dispatch('goPost', this.$route.params.id);
  },

  computed: {
    ...mapGetters(['post']),
  },
  methods: {},
};
</script>

<style scoped></style>
