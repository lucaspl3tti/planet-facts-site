<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    methods: {
      onClickHideNavCollapse() {
        const navCollapse = document.querySelector('.navbar-collapse');

        navCollapse.classList.remove('show');
      },
      onClickNavItem(navEl) {
        const navItem = document.querySelector(navEl);
        const activeNavItemCurrent = document.querySelector('.nav-item--active');

        activeNavItemCurrent.classList.remove('nav-item--active');
        navItem.classList.add('nav-item--active');

        this.onClickHideNavCollapse();
      },
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
            <li class="nav-item nav-item--mercury nav-item--active">
              <div class="planet-nav-icon planet-mercury"></div>
              <RouterLink to="/" @click="onClickNavItem('.nav-item--mercury')">Mercury</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item nav-item--venus">
              <div class="planet-nav-icon planet-venus"></div>
              <RouterLink to="/venus" @click="onClickNavItem('.nav-item--venus')">Venus</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item nav-item--earth">
              <div class="planet-nav-icon planet-earth"></div>
              <RouterLink to="/earth" @click="onClickNavItem('.nav-item--earth')">Earth</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item nav-item--mars">
              <div class="planet-nav-icon planet-mars"></div>
              <RouterLink to="/mars" @click="onClickNavItem('.nav-item--mars')">Mars</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item nav-item--jupiter">
              <div class="planet-nav-icon planet-jupiter"></div>
              <RouterLink to="/jupiter" @click="onClickNavItem('.nav-item--jupiter')">Jupiter</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item nav-item--saturn">
              <div class="planet-nav-icon planet-saturn"></div>
              <RouterLink to="/saturn" @click="onClickNavItem('.nav-item--saturn')">Saturn</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item nav-item--uranus">
              <div class="planet-nav-icon planet-uranus"></div>
              <RouterLink to="/uranus" @click="onClickNavItem('.nav-item--uranus')">Uranus</RouterLink>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item nav-item--neptune">
              <div class="planet-nav-icon planet-neptune"></div>
              <RouterLink to="/neptune" @click="onClickNavItem('.nav-item--neptune')">Neptune</RouterLink>
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
