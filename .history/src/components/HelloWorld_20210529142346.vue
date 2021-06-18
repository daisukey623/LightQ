<template>
  <div>
    <H2 class='sample'>テキスト</H2> 
  </div>
</template>

<script>
import H2 from '@/components/Atoms/H2.vue';
// import H3 from '@/components/Atoms/H3.vue';
// import P from '@/components/Atoms/P.vue';
// import Button from '@/components/Atoms/Button.vue';
// import Tag from '@/components/Atoms/Tag.vue';
// import Input from '@/components/Atoms/Input.vue';
// import Icon from '@/components/Atoms/Icon.vue';
// import SideMenu from '@/components/Atoms/SideMenu.vue';
export default {
  name: 'HelloWorld',
  components: {
    H2,
    // H3,
    // P,
    // Button,
    // Tag,
    // Icon,
    // SideMenu,
  },
  data(){
    return{
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
