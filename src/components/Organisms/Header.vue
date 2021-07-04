<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div >
          <a class="navbar-item pb-0"  @click="toHome">
            <img src="@/assets/Logo.png" />
          </a>

          <small class="font-size-small has-text-grey-dark ml-3">
            人事が人事を支援する投稿サイト</small
          >
        </div>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button is-light" @click="logOut()">ログアウト</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { auth } from '/src/main.js';

export default {
  methods: {
    logOut: async function() {
      await auth.signOut().then(this.$store.dispatch('resetStore'));
    },
    toHome() {
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped>
.font-size-small {
  font-size: 10px;
}
</style>
