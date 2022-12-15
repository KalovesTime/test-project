<template>
  <section class="add-form_section">
    <h1>
      Enter data and save changes
    </h1>

    <form class="add-form" @submit.prevent="addArticle">
      <div class="form-group">
        <label for="title">
          Title
        </label>
        <input id="title" v-model="newPost.title" type="text" class="form-control" placeholder="Some title...">
      </div>
      <div class="form-group">
        <label for="author">
          Author ID
        </label>
        <input id="author" v-model="newPost.userId" type="number" class="form-control" placeholder="Some id...">
      </div>
      <div class="form-group">
        <label for="body">
          Body
        </label>
        <textarea id="body" v-model="newPost.body" class="form-control" rows="3" placeholder="Some body..." />
      </div>

      <button type="submit" class="btn btn-primary mb-2">
        Add article
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    newPost: {
      userId: null,
      title: '',
      body: ''
    }
  }),

  async fetch ({ store }) {
    if (store.getters['posts/posts'].length === 0) {
      await store.dispatch('posts/fetchPosts')
    }
  },

  methods: {
    async addArticle () {
      await this.$store.dispatch('posts/addArticle', this.newPost)
      this.$router.push('/news')
    }
  }
}
</script>

<style scoped>
.add-form_section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.add-form {
  width: calc(100% - 200px);
}

.add-form .form-group {
  margin: 20px 0;
}
</style>
