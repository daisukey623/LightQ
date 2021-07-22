<template>
  <nav class="fixed menu">
    <p class="menu-label p-3  has-background-light ">
      Menu
    </p>

    <div>
      <figure class="image">
        <img
          class="is-rounded isFit  isCenter"
          :src="auth.currentUser.photoURL"
        />
      </figure>
      <p class="m-3">
        <small>{{ auth.currentUser.displayName }}</small>
      </p>
    </div>
    <div class=" mt-5 columns is-mobile is-centered">
      <ul class="menu-list ">
        <li @click="toHome" class="has-text-left">
          <a>
            <span class="icon-text">
              <span class="icon mr-3"> <i class="fas fa-home"></i></span
              ><span>ホーム</span>
            </span></a
          >
        </li>

        <li @click="toUsers" class="has-text-left">
          <a>
            <span class="icon-text">
              <span class="icon mr-3"> <i class="fas fa-user"></i></span
              ><span>プロフィール</span>
            </span></a
          >
        </li>

        <li @click="toFollows" class="has-text-left">
          <a>
            <span class="icon-text">
              <span class="icon mr-3"> <i class="fas fa-user-friends"></i></span
              ><span>フォロー</span>
            </span></a
          >
        </li>
      </ul>
    </div>

    <Button color="is-info mt-6 is-hidden-mobile" @click.native="showModal">
      <span class="icon color">
        <i class="fas fa-paper-plane "></i>
      </span>

      <span>質問する</span></Button
    >
  </nav>
</template>

<script>
import { auth } from '/src/main.js';
import Button from '@/components/Atoms/Button';

export default {
  data() {
    return {
      auth: auth,
    };
  },
  components: {
    Button,
  },
  methods: {
    showModal() {
      this.$store.dispatch('showModal');
    },
    toHome() {
      this.$router.push('/home');
    },
    toUsers() {
      this.$router.push(`/users/${auth.currentUser.uid}`);
    },
    toFollows() {
      this.$router.push(`/follows/${auth.currentUser.uid}`);
    },
  },
};
</script>

<style scoped>
.isFit {
  width: 64px;
  height: 64px;
  object-fit: cover;
}
.isCenter {
  margin: 0 auto;
}
.fixed {
  position: -webkit-sticky;
  position: sticky;
  top: 150px;
}
</style>
