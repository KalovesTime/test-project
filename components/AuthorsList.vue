<template>
  <div>
    <div v-for="post of getPosts" :key="post.id" class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../assets/card-image.jpg" class="img-fluid rounded-start">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title font-weight-bold">
              Author ID: {{ post.userId }}
            </h2>
            <h4 class="card-title font-weight-bold">
              {{ ucFirst(post.title) }}
            </h4>
            <p class="card-text">
              {{ ucFirst(post.body) }}
            </p>
            <div class="card-text card-bottom__wrap">
              <small class="text-muted">Last updated 3 mins ago</small>
              <div class="btns-wrap">
                <button class="btn btn-primary" @click.prevent="openPost(post)">
                  Read more articles by this author
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    getPosts: {
      type: Array,
      required: true
    }
  },

  methods: {
    openPost (post) {
      this.$router.push('/authors/' + post.userId)
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
.card-bottom__wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
