<template>
  <section class="cards-authors">
    <h1>
      Check out the latest news by author Id - {{ $route.params.id }}
    </h1>
    <div v-for="post of postsByAuthors" :key="post.id" class="card" style="width: 35rem;">
      <img class="card-img-top" src="../../assets/card-image.jpg">
      <div class="card-body">
        <h2 class="card-title font-weight-bold">
          Author ID: {{ post.userId }}
        </h2>
        <h2 class="card-title font-weight-bold">
          {{ ucFirst(post.title) }}
        </h2>
        <p class="card-text">
          {{ ucFirst(post.body) }}
        </p>
        <div class="card-text card-bottom__wrap">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  async asyncData ({ $axios, params }) {
    const postsByAuthors = await $axios.$get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)

    return { postsByAuthors }
  },

  data: () => ({
    pageHeader: 'Check out the latest news by authors'
  }),

  methods: {
    ucFirst (str) {
      if (!str) {
        return str
      }

      return str[0].toUpperCase() + str.slice(1)
    }
  }
}
</script>

<style scoped>
.cards-authors {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.cards-authors .card {
  margin: 20px 0;
}
</style>
