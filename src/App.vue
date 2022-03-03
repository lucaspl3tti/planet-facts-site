<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    methods: {
        onClickHideNavCollapse() {
            const navCollapse = document.querySelector('.navbar-collapse');

            navCollapse.classList.remove('show');
        }
    },
}
</script>

<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">The Planets</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 container-fluid">
            <li class="nav-item">
              <div class="planet-nav-icon planet-mercury"></div>
              <RouterLink to="/" @click="onClickHideNavCollapse">Mercury</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item">
              <div class="planet-nav-icon planet-venus"></div>
              <RouterLink to="/venus" @click="onClickHideNavCollapse">Venus</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item">
              <div class="planet-nav-icon planet-earth"></div>
              <RouterLink to="/earth" @click="onClickHideNavCollapse">Earth</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item">
              <div class="planet-nav-icon planet-mars"></div>
              <RouterLink to="/mars" @click="onClickHideNavCollapse">Mars</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item">
              <div class="planet-nav-icon planet-jupiter"></div>
              <RouterLink to="/jupiter" @click="onClickHideNavCollapse">Jupiter</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item">
              <div class="planet-nav-icon planet-saturn"></div>
              <RouterLink to="/saturn" @click="onClickHideNavCollapse">Saturn</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item">
              <div class="planet-nav-icon planet-uranus"></div>
              <RouterLink to="/uranus" @click="onClickHideNavCollapse">Uranus</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item">
              <div class="planet-nav-icon planet-neptune"></div>
              <RouterLink to="/neptune" @click="onClickHideNavCollapse">Neptune</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "@/scss/main.scss";
</style>
