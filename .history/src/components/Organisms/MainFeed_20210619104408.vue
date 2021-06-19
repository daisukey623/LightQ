<template>
<div>

          <div v-for="(postsList, index) in postsLists" :key="`first-${index}`">
            <div @click="toPosts" class="isPointer">
           

            </div>



  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p class="has-text-left">
            <strong>John Smith</strong>
            <br />
              {{ postsList.title }}
          </p>
          <div class="is-flex">
            <p class=" has-text-left">
              <span class="tag mx-1 ">状態</span>
            </p>
            <p class=" has-text-left">
              <span class="tag mx-1 has-text-left">{{ postsList.tags }}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
          </div>
</div>
</template>

<script>
export default {

};
</script>

<style scoped></style>
