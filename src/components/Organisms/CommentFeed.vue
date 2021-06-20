<template>
  <div>
    <div v-for="(commentsList, index) in commentsLists" :key="`first-${index}`">
      <div class="isPointer">
        <div class="box mb-1">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p class="has-text-left">
                  <!-- <strong>John Smith</strong>
                  <br /> -->
                  {{ commentsList.comment }}
                </p>
                <div class="is-flex">

                  <button class="button is-small has-text-left">この回答で解決</button>

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
    this.$store.dispatch('getCommentsLists',this.$route.params.id);
  },
  computed: {
    ...mapGetters(['commentsLists']),
  },
  methods: {

  },
};
</script>

<style scoped>
.isPointer {
  cursor: pointer;
}
</style>
