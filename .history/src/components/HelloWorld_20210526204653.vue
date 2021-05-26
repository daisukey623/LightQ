<template>
  <div>
    <H2 text="テキスト"></H2>

    <H3>
      <h3>こんにちは</h3>
      <button>ボタン</button>
    </H3>  

    <P>やうやう</P> 
    
    <div class="columns">
      <div class="buttons column">
        <Button text="クリック"></Button>
      </div>
    </div>

    <component :is="currentComponent"></component>
    <button @click = "currentComponent = (H3"></button>

  </div>
</template>

<script>
import H2 from '@/components/Atoms/H2.vue';
import H3 from '@/components/Atoms/H3.vue';
import P from '@/components/Atoms/P.vue';
import Button from '@/components/Atoms/Button.vue';
export default {
  name: 'HelloWorld',
  components: {
    H2,
    H3,
    P,
    Button,
  },
  data(){
    return{
      currentComponent:'P'
    }
  }
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
