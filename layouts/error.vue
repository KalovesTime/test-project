<template>
  <section class="error-section">
    <h1>
      Not found
    </h1>

    <nuxt-link to="/">
      Home
    </nuxt-link>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.error-section {
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
