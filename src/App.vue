<template>
  <NavBars></NavBars>
  <main class="container is-max-desktop">
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import NavBars from '@/components/layouts/NavBars.vue'
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>