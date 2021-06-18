<template>
<div class="container">
<div class="columns">
  <aside class="column is-2">
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="home" label="ホーム"> </b-menu-item>

      <b-menu-item icon="account" :active="isActive" expanded>
        <template #label="props">
          マイページ
          <b-icon
            class="is-pulled-right"
            :icon="props.expanded ? 'menu-down' : 'menu-up'"
          ></b-icon>
        </template>
        <b-menu-item label="質問"></b-menu-item>
        <b-menu-item label="回答"></b-menu-item>
        <b-menu-item label="フォロワーの変化"></b-menu-item>
        <b-menu-item label="タグ"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
      </b-menu>
      </aside>
      <div class="columns">
        <article class="media column is-10">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <!--  -->
    <div class="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>

      </div>
      </div>
      </div>
      
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    }
  }
}
</script>



<style scoped>
</style>
