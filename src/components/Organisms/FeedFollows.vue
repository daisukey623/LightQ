<template>
  <div>
    <p>フォロー</p>
    <div v-for="(list, index) in follows" :key="`first-${index}`">
      <div class="isPointer box mb-1" @click="toUsers(index)">
        <div class="has-text-right">
          <button
            class="delete"
            @click="deleteFollows(index)"
            v-if="auth.currentUser.uid === list.following"
          ></button>
        </div>
        <article class="media">
          <div class="media-left">
            <figure class="mb-3">
              <p class="image  ">
                <img class="is-rounded isFit" :src="list.followed_photoURL" />
              </p>
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <p class="has-text-left">
                <small class="mr-4 has-text-grey"
                  >@{{ list.followed_name }}</small
                >
              </p>

              <div class="is-flex"></div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '/src/main.js';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      auth: auth,
    };
  },
  created() {},
  computed: {
    ...mapGetters(['follows']),
  },
  methods: {
    async deleteFollows(index) {
      if (window.confirm('フォローを削除しても良いですか？')) {
        await db
          .collection('follows')
          .doc(this.follows[index].id)
          .delete();
        window.alert('削除しました');
      }
    },
      toUsers(index) {
      this.$router.push(`/users/${this.follows[index].followed}`);
    },
  },
};
</script>

<style scoped>
.isPointer {
  cursor: pointer;
}
.isFit {
  width: 64px;
  height: 64px;
  object-fit: cover;
}
</style>
