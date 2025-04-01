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
        @click="handleUpdateNote"
      >
        Save Note
      </button>
    </template>
  </AddEditNote>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNotesStore } from '@/stores/notes.store';
import AddEditNote from '@/components/notes/AddEditNote.vue';

const route = useRoute();
const router = useRouter();
const store = useNotesStore();

const noteContent = ref('');

noteContent.value = store.getNoteContent(route.params.id);

function handleUpdateNote() {
  store.updateNote(route.params.id, noteContent.value);
  router.push('/');
}
</script>
