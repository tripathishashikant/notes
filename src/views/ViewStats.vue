<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <td>Stats</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes:</td>
          <td>{{ store.getNumberOfNotes }}</td>
        </tr>
        <tr>
          <td>Number of Characters(of all notes):</td>
          <td>{{ store.getTotalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNotesStore } from '@/stores/notes.store.js';

const store = useNotesStore();
</script>
