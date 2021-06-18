<template>
  <div>
    <aside>
      <p class="menu-label p-3  has-background-light">
        Menu
      </p>
      <ul class="menu-list">
        <li><a>ホーム</a></li>
        <li><a>マイページ</a>
        <ul>
          <li><a>プロフィール</a></li>
          <li><a>質問</a></li>
          <li><a>回答</a></li>
          <li><a>フォロワーの変化</a></li>
        </ul></li>
        <li><a>つながり</a></li>
        <li><a>タグ</a></li>
      </ul>
      <button class="button mt-6 " @click="$emit(open)">質問する</button>
    </aside>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
