<template>
  <div>
    <NavBar />

    <main>
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

body {
  background: #f2f2f2;
}

*::-webkit-scrollbar-track {
  border-radius: 40px;
  background-color: #e3e4f3;
}

*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  border-radius: 40px;
  background-color: #e3e4f3;
}

*::-webkit-scrollbar-thumb {
  border-radius: 40px;
  background-color: #c6c9e8;
}

main {
  width: 100%;
  height: calc(100vh - 62px);
  font-family: 'Ubuntu', sans-serif;
}

.container {
  height: 100%;
}

h1 {
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cf6f6f;
}
</style>
