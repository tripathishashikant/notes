<template>
  <NavBars></NavBars>
  <main class="container is-max-desktop mb-5">
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import NavBars from '@/components/layouts/NavBars.vue'

const authStore = useAuthStore()

onMounted(() => {
  authStore.init();
});
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>