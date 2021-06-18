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
      </aside>

      <article class="column is-8">
      <div class="card">

  <div class="card-content">    
    <div class="content"><a href="#">ここにカードのタイトルが入りますここにカードのタイトルが入りますここにカードのタイトルが入ります</a>

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
      <div class="card">

  <div class="card-content">    
    <div class="content"><a href="#">ここにカードのタイトルが入りますここにカードのタイトルが入りますここにカードのタイトルが入ります</a>

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
export default {
  data() {
    return {
      isActive: true,
    }
  }
}
</script>



<style scoped>
</style>
