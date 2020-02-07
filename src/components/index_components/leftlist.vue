<template>
  <div class="sticky-top">
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action"
        v-for="(item, index) in categories"
        :key=index
      >
        <i class="fas fa-basketball-ball mr-1"></i>{{ item }}
      </a>
      <a
        href="#"
        class="list-group-item list-group-item-action disabled"
        tabindex="-1"
        aria-disabled="true"
      >已售完</a>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('getProducts');
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>
