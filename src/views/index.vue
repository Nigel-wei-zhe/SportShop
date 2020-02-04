<template>
  <div class="home">
    <navbar />
    <router-view/>
    <myFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '../components/index_components/navbar.vue';
import myFooter from '../components/index_components/footer.vue';

export default {
  name: 'home',
  components: {
    navbar,
    myFooter,
  },
};
</script>
