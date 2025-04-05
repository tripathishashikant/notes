<template>
  <NavBars></NavBars>
  <main class="container is-max-desktop mb-5">
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNotesStore } from './stores/notes.store';
import NavBars from '@/components/layouts/NavBars.vue'

const store = useNotesStore()

onMounted(() => {
  store.fetchNotes();
});
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>