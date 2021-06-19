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

    <label class="label">タイトル</label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="Text input"
        v-model="title"
      />
    </div>

    <label class="label">相談内容</label>
    <div class="control">
      <textarea
        class="textarea"
        placeholder="10 lines of textarea"
        rows="10"
        v-model="body"
      ></textarea>

      <p>{{ tag }}</p>
      <button class="button" type="submit" @click="addPost">送信</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: '',
      title: '',
      body: '',
    };
  },
  methods: {
    addPost() {
      console.log(this.tag, this.title, this.body);
      this.$s
      this.tag = '';
      this.title = '';
      this.body = '';
      this.$store.dispatch('closeModal');
    },
  },
};
</script>

<style scoped></style>
