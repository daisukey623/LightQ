<template>
  <nav
    class="navbar fixed pr-5 pl-5 pb-5 pt-5 "
    role="navigation"
    aria-label="main navigation "
  >
    <div class="navbar-brand">
      <div>
        <a class="navbar-item pb-0 " @click="toTop" v-if="!auth">
          <img src="@/assets/Logo.png" />
        </a>
        <a class="navbar-item pb-0" @click="toHome" v-if="auth">
          <img src="@/assets/Logo.png" />
        </a>

        <small class="font-size-small has-text-grey-dark ml-3">
          人事が人事を支援する投稿サイト</small
        >
      </div>

      <a
        v-if="auth"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        v-on:click="changeBurgerVisibillity"
        v-bind:class="{ 'is-active': burgerVisibillity }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

      <a
        v-if="!auth"
        role="button"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        v-on:click="changeBurgerVisibillity"
        v-bind:class="{ 'is-active': burgerVisibillity }"
      >
        <button
          class="button is-light ml-6 mt-3 is-hidden-desktop"
          @click="logIn()"
        >
          ログイン
        </button>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      v-bind:class="{ 'is-active': burgerVisibillity }"
    >
      <div class="navbar-start">
        <SideMenu class="is-hidden-desktop"></SideMenu>
        <button class="button is-light is-hidden-desktop" @click="logOut()">
          ログアウト
        </button>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item" v-if="auth">
        <button class="button is-light is-hidden-mobile" @click="logOut()">
          ログアウト
        </button>
      </div>
      <div class="navbar-item" v-if="!auth">
        <button class="button is-light is-hidden-mobile" @click="logIn()">
          ログイン
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from '/src/main.js';
import SideMenu from '@/components/Organisms/SideMenu';

export default {
  components: {
    SideMenu,
  },
  data() {
    return {
      auth: auth.currentUser,
      burgerVisibillity: false,
    };
  },

  methods: {
    async logOut() {
      await auth.signOut();
      await this.$store.dispatch('resetStore');
    },
    toTop() {
      this.$router.push('/');
    },
    toHome() {
      this.$router.push('/home');
    },
    changeBurgerVisibillity() {
      this.burgerVisibillity = !this.burgerVisibillity;
    },
    logIn() {
      this.$router.push('/signin');
    },
  },
};
</script>

<style scoped>
.font-size-small {
  font-size: 10px;
}
.fixed {
  position: -webkit-sticky;
  position: sticky;
  top: -20px;
}
</style>
