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
        <button
          class="button is-info  is-rounded"
          @click="isImageModalActive = true"
        >
          投稿する
        </button>
        <!-- モーダル -->
        <b-modal v-model="isImageModalActive">
          <section>
            <!-- モーダル_タグ入力 -->

            <b-field>
              <b-radio-button
                v-model="tags"
                native-value="採用計画"
                type="is-primary is-light is-outlined"
              >
                採用計画
              </b-radio-button>

              <b-radio-button
                v-model="radioButton"
                native-value="Default"
                type="is-primary is-light is-outlined"
              >
                Default
              </b-radio-button>

              <b-radio-button
                v-model="radioButton"
                native-value="Default"
                type="is-primary is-light is-outlined"
              >
                Default
              </b-radio-button>
            </b-field>
  
          </section>
              <section>
        <b-field label="Enter some tags">
            <b-taginput
                v-model="tags"
                :data="filteredTags"
                autocomplete
                field="user.first_name"
                icon="label"
                placeholder="Add a tag"
                @typing="getFilteredTags">
                <template v-slot="props">
                    <strong>{{props.option.id}}</strong>: {{props.option.user.first_name}}
                </template>
                <template #empty>
                    There are no items
                </template>
            </b-taginput>
        </b-field>
        <pre style="max-height: 400px"><b>Tags:</b>{{ tags }}</pre>
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
  components: {
    // Modal,
  },
  data() {
    return {
      isImageModalActive: false,
      radioButton: '',

                tags: []
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    getFilteredTags(text) {
                this.filteredTags = data.filter((option) => {
                    return option.user.first_name
                        .toString()
                        .toLowerCase()
                        .indexOf(text.toLowerCase()) >= 0
                })
            }
  },
};
</script>

<style scoped></style>
