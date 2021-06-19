<template>
          <div v-for="(postsList, index) in postsLists" :key="`first-${index}`">
            <div @click="toPosts" class="isPointer">
              <br />
              <div>タイトル：{{ postsList.title }}</div>
              <div>tag：{{ postsList.tags }}</div>
            </div>
          </div>
  <div class="box">




    <article class="media">
      <div class="media-content">
        <div class="content">
          <p class="has-text-left">
            <strong>John Smith</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur sit amet massa fringilla egestas. Nullam condimentum
            luctus turpis.
          </p>
          <div class="is-flex">
            <p class=" has-text-left">
              <span class="tag mx-1 ">状態</span>
            </p>
            <p class=" has-text-left">
              <span class="tag mx-1 has-text-left">tag</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped></style>
