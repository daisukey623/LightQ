<template>
  <div class="modal  is-active" v-show="isShowProfileIMG">
    <div class="modal-background"></div>
    <div class="modal-content columns is-centered">
      <div class="card column is-half ">
        <div class="card-content">
          <p class=" is-size-5 has-text-weight-bold">
            プロフィール画像を登録してください
          </p>

          <div class="block m-5">
            <b-radio name="name" native-value="man" @input="setMan()">
              man
            </b-radio>
            <b-radio name="name" native-value="woman" @input="setWoman()">
              woman
            </b-radio>
            <b-radio name="name" native-value="original" @input="setFile()">
              original
            </b-radio>
          </div>
          <b-field
            class="file  m-5 is-centered is-light"
            :class="{ 'has-name': !!file }"
            v-if="original"
          >
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

          <figure v-if="radio" class="columns is-centered">
            <p class="image  is-size-7">
              <img class="is-rounded isFit" :src="radio" />
            </p>
          </figure>

          <button
            class="button is-info"
            type="submit"
            @click="sentProfileImg()"
          >
            完了して次へ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { auth, storage } from '/src/main.js';

export default {
  data() {
    return {
      man: require('@/assets/user_man.png'),
      woman: require('@/assets/user_woman.png'),
      original: '',
      file: null,
      radio: '',
      refIMG: '',
    };
  },
  created() {
    this.getMan();
  },
  computed: {
    ...mapGetters(['isShowProfileIMG']),
  },
  methods: {
    setMan() {
      this.radio = this.man;
      this.original = null;
    },
    setWoman() {
      this.radio = this.woman;
      this.original = null;
    },
    setFile() {
      this.original = true;
      this.radio = null;
    },
    closeModal() {
      console.log('クリック');
      this.$store.dispatch('closeModal');
    },

    async sentProfileImg() {
      if (this.file) {
        await this.addProfileFile();
        await this.$store.dispatch('closeModal');
        await this.$store.dispatch('showQuestionnaireSignUp');
      } else {
        await this.addProfile();
        await this.$store.dispatch('closeModal');
        await this.$store.dispatch('showQuestionnaireSignUp');
      }
    },
    async addProfileFile() {
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

    async addProfile() {
      if (this.radio === this.man) {
        const getStorageRef = await storage.refFromURL(
          'gs://lightq-e5c74.appspot.com/images/ user_man.png'
        );

        this.refIMG = getStorageRef;
      } else {
        const getStorageRef = await storage.refFromURL(
          'gs://lightq-e5c74.appspot.com/images/ user_woman.png'
        );
        this.refIMG = getStorageRef;
      }

      await this.refIMG.getDownloadURL().then((url) => {
        this.url = url;
        console.log(this.url);
      });

      await auth.currentUser
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

<style scoped>
.isFit {
  width: 64px;
  height: 64px;
  object-fit: cover;
}
</style>
