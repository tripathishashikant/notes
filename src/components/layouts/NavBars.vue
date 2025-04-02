<template>
  <nav class="navbar is-success mb-5" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <RouterLink
          to="/"
          class="navbar-item is-size-4 is-family-monospace"
        >
          Notes
        </RouterLink>
  
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navBarBurgerRef"
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
        ref="navBarRef"
      >
        <div class="navbar-end">
          <RouterLink
            @click="showMobileNav = false"
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Home
          </RouterLink>
          <RouterLink
            @click="showMobileNav = false"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { onClickOutside } from '@vueuse/core';

const showMobileNav = ref(false)
const navBarRef = ref(null)
const navBarBurgerRef = ref(null)

onClickOutside(navBarRef, () => {
  showMobileNav.value = false;
}, {
  ignore: [navBarBurgerRef]
});
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
