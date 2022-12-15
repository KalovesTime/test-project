<template>
  <section class="current-post">
    <h1 class="current-post__header">
      {{ ucFirst(post.title) }}
    </h1>
    <div class="current-post__content">
      <div class="current-post__author small">
        Posted by author with id - {{ post.userId }}
      </div>

      <div class="current-post__image">
        <img src="../../assets/card-image.jpg" class="img-fluid rounded-start">
      </div>

      <div class="current-post__body">
        {{ ucFirst(post.body) }}
      </div>

      <div class="current-post__btn">
        <button class="btn btn-info btn-lg" @click="editPost(post.id)">
          Edit post
        </button>
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
    const post = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id)

    return { post }
  },

  methods: {
    editPost (id) {
      this.$router.push('/news/edit')
    },
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
.current-post {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.current-post__content {
  width: 70%;
}
.current-post__image {
  margin: 10px 0 30px 0;
}

.current-post__btn {
  margin: 25px 0;
}
</style>
