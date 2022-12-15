<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page-item"
        :class="{
          'current-page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },

  methods: {
    changePage (pageNumber) {
      this.$store.commit('posts/setPage', pageNumber)
      this.$store.dispatch('posts/fetchPosts')
    }
  }
}
</script>

<style scoped>
.pagination {
  padding: 5px 0 20px 0;
}
.pagination .page-item {
  padding: 0.5rem 0.75rem;
  color: #7075a7;
  background-color: #fff;
  border: 1px solid #c6c9e8;
  cursor: pointer;
}
.pagination .current-page {
  font-weight: 600;
  color: #4c5be9;
  border: 2px solid #4c5be9;
}
</style>
