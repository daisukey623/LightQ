<template>
  <section>
    <Header />
    <section  class="hero bg-color columns p-6">
    <div class="hero-body column is-half p-6">
      <p class="title has-text-white">人事が人事を支援する投稿型コミュニティー</p>
      <p class="subtitle has-text-white">LIght Q</p>
      <p class="has-text-white">
        LightQは、人事担当者に業務の疑問を、気軽質問できる投稿型コミュニティーです。
        社内外の境界なく現場の知見を共有し、フォローし合うことで、業務の疑問を解決できます。
      </p>
    </div>
    </section>
  </section>
</template>

<script>
import Header from '../components/Organisms/Header';
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.bg-color{
    background: linear-gradient(135deg, #1FA2FF,#12D8FA,#A6FFCB);
}
</style>
