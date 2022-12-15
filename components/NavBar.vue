<template>
  <nav class="navbar navbar-expand-lg text-light">
    <div class="container-fluid">
      <nuxt-link to="/">
        <img class="logo-icon" src="../assets/news-icon.svg" width="46" height="46">
      </nuxt-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link exact no-prefetch active-class="active text-light" class="nav-link" to="/">
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active text-light" class="nav-link" to="/news">
              News
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active text-light" class="nav-link" to="/authors">
              Authors
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    background: #aea2a2;
    box-shadow: rgb(32 33 36 / 34%) 0px 4px 6px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  .navbar .logo-icon {
    margin: 0 20px;
    cursor: pointer;
  }

  .navbar-nav .nav-link {
    font-size: 18px;
  }

</style>
