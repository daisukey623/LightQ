<template>
  <div>
    <Header></Header>
    <section class="hero bg-color  pr-6 pl-6 pt-5 pb-5 mt-1">
      <div class="container">
        <div class="columns ">
          <div class="hero-body column is-half">
            <p class="title has-text-white has-text-left">
              人事が人事を支援する<br />投稿型コミュニティー Light Q
            </p>

            <p class="has-text-white has-text-left">
              LightQは、人事担当者に業務の疑問を、気軽質問できる投稿型コミュニティーです。
              社内外の境界なく現場の知見を共有し、フォローし合うことで、業務の疑問を解決できます。
            </p>
            <button
              class="button is-white is-rounded mt-6 "
              @click="toSignUp()"
            >
              <span class="icon color">
                <i class="fas fa-paper-plane"></i>
              </span>
              <span class="font">新規登録する</span>
            </button>
          </div>
          <div class="column is-half">
            <img :src="main" class="mr-6" />
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-6">
      <H2>Light Qにできること</H2>

      <div class="columns mt-6 mr-4 ml-4">
        <div class="column">
          <H3>{{ able01.title }}</H3>
          <p class="has-text-left">{{ able01.description }}</p>
          <div class="content has-text-left">
            <ul>
              <li>採用計画</li>
              <li>母集団形成</li>
              <li>選考</li>
              <li>内定者フォロー</li>
            </ul>
          </div>
        </div>

        <div class="column">
          <img :src="able01.img" class="mr-6 " />
        </div>
      </div>

      <div class="columns mt-6 mr-4 ml-4">
        <div class="column">
          <H3>{{ able02.title }}</H3>
          <p class="has-text-left">
            疑問が解決されたタイミングで、事領域の成熟度を振り返りましょう。振り返りは自己採点です。疑問が解消し、業務でできることが増えるにつれて、同時に疑問増えるでしょう。
          </p>
          <p class="has-text-left mt-4">
            右肩上がりの直線的ではなく、上がり下がりのある日々の変化を記録することで、客観的に変化を理解し、継続的に業務に取り込む援助になります。変化に気づき、緩やかな成長に期待しましょう。
          </p>
        </div>
        <div class="column">
          <img :src="able02.img" class="mr-6 " />
        </div>
      </div>

      <div class="columns mt-6 mr-4 ml-4">
        <div class="column">
          <img :src="able03.img" class="mr-6 " />
        </div>
        <div class="column">
          <H3>{{ able03.title }}</H3>
          <p class="has-text-left">
            他の人事担当者の業務の疑問に、あなたの力が必要かもしれません。
            投稿内容を確認して、疑問を解決できるようにコメントしてみましょう。
          </p>

          <p class="has-text-left mt-4">
            アウトプットをするこで、自身の成長にも繋がります。
          </p>
        </div>
      </div>

      <div class="columns mt-6 mr-4 ml-4">
        <div class="column">
          <img :src="able04.img" class="mr-6 " />
        </div>
        <div class="column">
          <H3>{{ able04.title }}</H3>
          <p class="has-text-left">
            他の人事担当者の業務の疑問にコメントすると、自動でその担当者をフォローします。あなたがフォローした人事担当者の日々の振り返りによる変化、そして成長を見守ることができます。
          </p>

          <p class="has-text-left mt-4">
            フォローした担当者の投稿も確認するができるので、もし力に慣れそうであれば継続してフォローすることもできます。
          </p>
        </div>
      </div>
    </div>

    <section class="hero bg-color  pr-6 pl-6 pt-5 pb-5 mt-1">
      <div class="container">
        <div class="hero-body ">
          <p class="title has-text-white has-text-left">
            人事が人事を支援する<br />投稿型コミュニティー Light Q
          </p>

          <p class="has-text-white has-text-weight-bold">
            登録して気軽に質問してみましょう！
          </p>
          <button class="button is-white is-rounded mt-6 " @click="toSignUp()">
            <span class="icon color">
              <i class="fas fa-paper-plane"></i>
            </span>
            <span class="font">新規登録する</span>
          </button>
        </div>
      </div>
    </section>
    <footer class="footer has-text-centered">
      <strong>Light Q</strong> by Yokoyama Disuke
    </footer>
  </div>
</template>

<script>
import Header from '../components/Organisms/Header';
import H2 from '@/components/Atoms/H2';
import H3 from '@/components/Atoms/H3';

export default {
  components: {
    Header,
    H2,
    H3,
  },
  data() {
    return {
      main: require('@/assets/LIghtQ_main.png'),
      able01: {
        title: '1. 些細な疑問も気軽に質問',
        description:
          '人事業務でわからないところが質問できます。現在は採用領域で以下の業務内容に的絞って質問することができます。あらかじめ的が絞られていることで、言語化しにくい疑問も気軽に質問しやすくなります。',
        img: require('@/assets/LIghtQ_able01.png'),
      },
      able02: {
        title: '2. 変化の振り返り',
        img: require('@/assets/LIghtQ_able02.png'),
      },
      able03: {
        title: '3.悩んでいる人事を支援',
        img: require('@/assets/LIghtQ_able03.png'),
      },
      able04: {
        title: '4.支援した人事の成長を見守る',
        img: require('@/assets/LIghtQ_able04.png'),
      },
    };
  },
  methods: {
    toSignUp() {
      this.$router.push('/signup');
    },
  },
};
</script>

<style scoped>
.bg-color {
  background: linear-gradient(135deg, #167DF0, #12d8fa, #a6ffcb);
}
.font {
  color: #56cbe1;
  font-weight: bold;
}
.color {
  color: #56cbe1;
}
</style>
