export const state = () => ({
  posts: [],
  page: 1,
  limit: 10,
  totalPages: 0,
  isSuccessAdded: false
})

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  setPage (state, page) {
    state.page = page
  },
  setTotalPages (state, totalPages) {
    state.totalPages = totalPages
  },
  removePost (state, postId) {
    state.posts = state.posts.filter((post) => post.id !== postId)
  },
  setNewPost (state, newPost) {
    state.posts = newPost
  },
  setSuccessAdded (state, isAdded) {
    state.isSuccessAdded = isAdded
  }
}

export const actions = {
  async fetchPosts ({ state, commit }) {
    try {
      const response = await this.$axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: state.page,
          _limit: state.limit
        }
      })
      commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
      commit('setPosts', response.data)
    } catch (e) {
      console.log(e)
    }
  },
  async addArticle ({ state, commit }, newPost) {
    try {
      const response = await this.$axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      commit('setNewPost', [...state.posts, ...[response.data]])
      commit('setSuccessAdded', true)
    } catch (e) {
      console.log(e)
    }
  }
}

export const getters = {
  posts: state => state.posts,
  totalPages: state => state.totalPages,
  page: state => state.page,
  isSuccessAdded: state => state.isSuccessAdded
}
