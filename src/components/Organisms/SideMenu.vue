<template>
  <div>
    <aside>
      <p class="menu-label p-3  has-background-light">
        Menu
      </p>
      <ul class="menu-list">
        <li @click="toHome"><a>ホーム</a></li>
        <li><a>マイページ</a>
        <ul>
          <li @click="toUsers"><a>プロフィール</a></li>
          <li @click="toFollows"><a>フォロワー</a></li>
        </ul></li>


      </ul>
      <button class="button mt-6 " @click="showModal">質問する</button>
    </aside>
  </div>
</template>

<script>
import { auth, } from '/src/main.js';
export default {
  methods:{
    showModal(){
       this.$store.dispatch('showModal');
    },
    toHome(){
      this.$router.push('/home')
    },
    toUsers() {
      this.$router.push(`/users/${auth.currentUser.uid}`);
    },
    toFollows() {
      this.$router.push(`/follows/${auth.currentUser.uid}`);
    },
  }
};
</script>

<style scoped></style>
