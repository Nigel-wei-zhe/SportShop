<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': !page.has_pre}">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="getPage(page.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in page.total_pages"
          :key="page"
          :class="{'active': page.current_page === page}"
        >
          <a class="page-link" href="#" @click.prevent="getPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{'disabled': !page.has_next}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getPage(page.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
    },
  },
  methods: {
    getPage(page) {
      const vm = this;
      vm.$emit('changePage', Number(page));
    },
  },
};
</script>
