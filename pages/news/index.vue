<template>
  <section>
    <h1 class="page-header">
      {{ pageHeader }}
    </h1>

    <div class="add-new-post">
      <button type="button" class="btn btn-success" @click="openAddFrom">
        Add new post
      </button>
    </div>

    <div v-if="getPosts.length">
      <NewsList :get-posts="getPosts" />
    </div>

    <Pagination :page="page" :total-pages="totalPages" />
  </section>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import NewsList from '@/components/NewsList.vue'

export default {
  components: {
    Pagination,
    NewsList
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
  },

  methods: {
    openAddFrom () {
      this.$router.push('/news/add')
    }
  }
}
</script>

<style scoped>
.add-new-post {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>
