<template>
  <section class="home-info">
    <div class="home-ingo__content">
      <h1>
        {{ pageTitle }}
      </h1>

      <div class="arrow-up">
        <span class="arrow-item" />
        <span class="arrow-item" />
        <span class="arrow-item" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    pageTitle: 'Please select the sections of interest in the navigation'
  })
}
</script>

<style scoped>
.home-info {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-ingo__content {
  margin: 0 100px;
  display: flex;
  align-items: center;
}

.home-ingo__content h1 {
  color: #aaa;
}

.arrow-up {
  margin: 0 0 0 50px;
}

.arrow-item {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid #364a4c;
  border-right: 5px solid #364a4c;
  transform: rotate(225deg);
  margin: -16px;
  animation: arrow-up 2s infinite;
}

.arrow-item:nth-child(2) {
  animation-delay: -0.2s;
}

.arrow-item:nth-child(3) {
  animation-delay: -0.4s;
}

@keyframes arrow-up {
  0% {
    opacity: 0;
    transform: rotate(225deg) translate(-20px,-20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(225deg) translate(20px,20px);
  }
}
</style>
