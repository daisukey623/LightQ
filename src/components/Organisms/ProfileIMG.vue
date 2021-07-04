<template>
  <div class="modal  is-active" v-show="isShowProfileIMG">
    <div class="modal-background"></div>
    <div class="modal-content columns is-centered">
      <div class="card column is-half ">
        <div class="card-content">
          <p class=" is-size-5 has-text-weight-bold">プロフィール画像を登録してください</p>
          <b-field class="file is-primary m-5 is-centered" :class="{ 'has-name': !!file } ">
            <b-upload v-model="file" class="file-label">
              <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">画像アップロード</span>
              </span>
              <span class="file-name" v-if="file">
                {{ file.name }}
              </span>
            </b-upload>
          </b-field>

          <button class="button" type="submit" @click="send">
            完了して次へ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { db, auth, storage } from '/src/main.js';

export default {
  data() {
    return {
      file: null,
    };
  },
  computed: {
    ...mapGetters(['isShowProfileIMG']),
  },
  methods: {
    closeModal() {
      console.log('クリック');
      this.$store.dispatch('closeModal');
    },
    async send() {
     await this.addProfile()
     await this.$store.dispatch('closeModal');
     await this.$store.dispatch('showQuestionnaireSignUp');
    },
    setProfileIMG() {
      const ref = db.collection('scores').doc();
      ref.set({}, { marge: true });
    },
    async addProfile() {
      let file = this.file;
      const storageRef = storage.ref(`images/ ${file.name}`);
      await storageRef.put(file).then(() => {
        console.log('uploaded file');
      });

      await storageRef.getDownloadURL().then((url) => {
        this.url = url;
        console.log(this.url);
      });

      const user = auth.currentUser;

      await user
        .updateProfile({
          photoURL: this.url,
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
