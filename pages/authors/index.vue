<template>
  <section>
    <h1 class="page-header">
      {{ pageHeader }}
    </h1>

    <div v-if="getPosts.length">
      <AuthorsList :get-posts="getPosts" />
    </div>

    <Pagination :page="page" :total-pages="totalPages" />
  </section>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import AuthorsList from '@/components/AuthorsList.vue'

export default {
  components: {
    Pagination,
    AuthorsList
  },

  data: () => ({
    pageHeader: 'Check out the latest news'
  }),

  async fetch ({ store }) {
    if (store.getters['posts/posts'].length === 0) {
      await store.dispatch('posts/fetchPosts')
    }
  },

  computed: {
    getPosts () {
      return this.$store.getters['posts/posts']
    },
    totalPages () {
      return this.$store.getters['posts/totalPages']
    },
    page () {
      return this.$store.getters['posts/page']
    }
  }
}
</script>
