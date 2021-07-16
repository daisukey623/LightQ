<template>
  <aside class="fixed">
    <p class="menu-label p-3  has-background-light">
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

    <ul class="menu-list ">
      <li @click="toHome"><a>ホーム</a></li>
      <li>
        <a>マイページ</a>
        <ul>
          <li @click="toUsers"><a>プロフィール</a></li>
          <li @click="toFollows"><a>フォロー</a></li>
        </ul>
      </li>
    </ul>
    <Button color="is-info mt-6 is-hidden-mobile" @click.native="showModal"
      >質問する</Button
    >
  </aside>
</template>

<script>
import { auth } from "/src/main.js";
import Button from "@/components/Atoms/Button";

export default {
  data() {
    return {
      auth: auth
    };
  },
  components: {
    Button
  },
  methods: {
    showModal() {
      this.$store.dispatch("showModal");
    },
    toHome() {
      this.$router.push("/home");
    },
    toUsers() {
      this.$router.push(`/users/${auth.currentUser.uid}`);
    },
    toFollows() {
      this.$router.push(`/follows/${auth.currentUser.uid}`);
    }
  }
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
  top: 100px;
}
</style>
