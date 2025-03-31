<template>
  <AddEditNote
    v-model="noteContent"
    bgColor="info"
    placeholder="Edit note"
    label="Edit Note"
  >
    <template #buttons>
      <button
        class="button is-link has-background-info mr-5"
        @click="$router.back()"
      >
        Cancel
      </button>
      <button
        class="button is-link has-background-info"
        :disabled="noteContent === ''"
      >
        Save Note
      </button>
    </template>
  </AddEditNote>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useNotesStore } from '@/stores/notes.store';
import AddEditNote from '@/components/notes/AddEditNote.vue';

const route = useRoute();
const store = useNotesStore();

const noteContent = ref('');

noteContent.value = store.getNoteContent(route.params.id);
</script>
