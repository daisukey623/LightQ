<template>
  <div>
    <aside>
      <p class="menu-label p-3  has-background-light">
        Menu
      </p>
      <ul class="menu-list">
        <li><a>ホーム</a></li>
        <li><a>マイページ</a>
        <ul>
          <li><a>プロフィール</a></li>
          <li><a>フォロワー</a></li>
        </ul></li>


      </ul>
      <button class="button mt-6 " @click="showModal">質問する</button>
    </aside>
  </div>
</template>

<script>
export default {
  methods:{
    showModal(){
       this.$store.dispatch('showModal');
    }
  }
};
</script>

<style scoped></style>
