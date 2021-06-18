<template>
  <div class="container">
    <div class="columns">
      <aside class="column is-2">
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="home" label="ホーム"> </b-menu-item>

            <b-menu-item icon="account" :active="isActive" expanded>
              <template #label="props">
                マイページ
                <b-icon
                  class="is-pulled-right"
                  :icon="props.expanded ? 'menu-down' : 'menu-up'"
                ></b-icon>
              </template>
              <b-menu-item label="質問"></b-menu-item>
              <b-menu-item label="回答"></b-menu-item>
              <b-menu-item label="フォロワーの変化"></b-menu-item>
              <b-menu-item label="タグ"></b-menu-item>
            </b-menu-item>
          </b-menu-list>
        </b-menu>
         <button class="button is-info  is-rounded" @click="isImageModalActive = true" >投稿する</button>
         <!-- モーダル -->
         <b-modal v-model="isImageModalActive">
               <section>
         <!-- モーダル_タグ入力 -->

        <b-field>

            <b-radio-button v-model="tags"
                native-value="採用計画"
                type="is-primary is-light is-outlined">
                採用計画
            </b-radio-button>

            <b-radio-button v-model="radioButton"
                native-value="Default"
                type="is-primary is-light is-outlined">
                Default
            </b-radio-button>

            <b-radio-button v-model="radioButton"
                native-value="Default"
                type="is-primary is-light is-outlined">
                Default
            </b-radio-button>


        </b-field>
        <p class="content">
            <b>Selection:</b>
            {{ radioButton }}
        </p>
    </section>
            <section>
        <b-field label="Add some tags">
            <b-taginput
                v-model="tags"
                ellipsis
                icon="label"
                placeholder="Add a tag"
                aria-close-label="Delete this tag">
            </b-taginput>
        </b-field>
        <p class="content"><b>Tags:</b> {{ tags }}</p>
    </section>
        </b-modal>
      </aside>

      <article class="column is-8">

        <div class="card mb-3">
          <div class="card-content">
            <div class="content">
              <a href="#"
                >ここにカードのタイトルが入りますここにカードのタイトルが入りますここにカードのタイトルが入ります</a
              >
            </div>
            <b-field>
              <b-taglist>
                <b-tag>受付中</b-tag>
                <b-tag>Tag label</b-tag>
                <b-tag>Tag label</b-tag>
              </b-taglist>
            </b-field>
          </div>
        </div>

      </article>
    </div>
  </div>
</template>

<script>
// import Modal from '@/components/Organisms/Modal';
export default {
  components:{ 
    // Modal,
  },
  data() {
    return {
      isImageModalActive:false,
      radioButton: '',
      tags: [
            'Auckland',
            'Wellington',
            'Very long string that would overflow'
                ]
    };
  },
  methods:{
    openModal() {
      this.modal = true
    },
  }
};
</script>

<style scoped></style>
