<template>
  <div>
    <SignIn></SignIn>
  </div>
</template>

<script>
import H2 from '@/components/Atoms/H2.vue';
import SideMenu from '@/components/Organisms/SideMenu.vue';
import Test from '@/components/Organisms/Test.vue';
export default {
  name: 'HelloWorld',
  components: {
    H2,
    // H3,
    // P,
    // Button,
    // Tag,
    // Icon,
    SideMenu,
    Test,
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
