<template>
  <div class="field">
    <label class="label">相談したい採用領域</label>
    <div class="control">
      <label class="radio">
        <input
          type="radio"
          name="answer"
          value="採用計画"
          checked
          v-model="tag"
        />
        採用計画
      </label>
      <label class="radio">
        <input type="radio" name="answer" value="母集団形成" v-model="tag" />
        母集団形成
      </label>
      <label class="radio">
        <input type="radio" name="answer" value="選考" v-model="tag" />
        選考
      </label>
      <label class="radio">
        <input
          type="radio"
          name="answer"
          value="内定者フォロー"
          v-model="tag"
        />
        内定者フォロー
      </label>
    </div>

    <label class="label mt-5">タイトル</label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="質問のタイトルを記入してください"
        v-model="title"
      />
    </div>

    <label class="label mt-5">相談内容</label>
    <div class="control">
      <textarea
        class="textarea"
        placeholder="質問の内容を記入してください"
        rows="10"
        v-model="body"
      ></textarea>

      <Button class="mt-5" color="is-info" @click.native="addPost"
        >送信する</Button
      >
    </div>
  </div>
</template>

<script>
import { db, auth } from '/src/main.js';
import Button from '@/components/Atoms/Button';
export default {
  data() {
    return {
      tag: '',
      title: '',
      body: '',
    };
  },
  components: {
    Button,
  },
  methods: {
    async addPost() {
      const ref = await db.collection('posts').doc();
      ref.set(
        {
          id: ref.id,
          user_id: auth.currentUser.uid,
          title: this.title,
          body: this.body,
          tags: this.tag,
          status: '受付中',
          like_count: 0,
          user_name: auth.currentUser.displayName,
          user_photoURL: auth.currentUser.photoURL,
          best_answer: '',
          createdAt: new Date(),
        },
        { marge: true }
      );
      this.init();
    },
    init() {
      this.tag = '';
      this.title = '';
      this.body = '';
      this.$store.dispatch('closeModal');
    },
  },
};
</script>

<style scoped></style>
