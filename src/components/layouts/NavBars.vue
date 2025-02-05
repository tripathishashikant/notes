<template>
  <nav class="navbar is-success mb-5" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Notes
        </div>
  
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{ 'is-active': showMobileNav }"
          @click.prevent="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item" active-class="is-active">Home</RouterLink>
          <RouterLink to="/stats" class="navbar-item" active-class="is-active">Stats</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const showMobileNav = ref(false)
</script>

<style>
a.navbar-item.is-active {
  --bulma-navbar-item-background-l-delta: var(--bulma-navbar-item-hover-background-l-delta);
  --bulma-navbar-item-background-a: 1;
}

@media screen and (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left:0;
    width: 100%;
  }
}
</style>
