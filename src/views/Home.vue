<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">{{ test }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data() {
    return {
      test: process.env.VUE_APP_TITLE,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
