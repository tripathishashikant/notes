<template>
  <div class="notes">
    <AddEditNote
      ref="addEditNoteRef"
      v-model="content"
    >
      <template #buttons>
        <button
          class="button is-link has-background-success"
          :disabled="content === ''"
          @click="handleAddNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!notesStore.notesLoaded"
      class="progress is-success"
      max="100"
    />

    <template v-else>
      <Note
        v-for="note in notesStore.notes"
        :key="note.id"
        :note="note"
      /> 
    </template>

    <div
      v-if="!notesStore.notes.length"
      class="is-size-6 has-text-centered has-text-grey-light is-family-monospace py-6"
    >
      <p>No notes yet...</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNotesStore } from '@/stores/notes.store.js';
import Note from "@/components/notes/Note.vue";
import AddEditNote from '@/components/notes/AddEditNote.vue';

const notesStore = useNotesStore();
const content = ref('');
const addEditNoteRef = ref(null);

function handleAddNote() {
  const date = new Date().getTime().toString();
  const note = { date, content: content.value };

  notesStore.addNote(note);
  content.value = '';
  addEditNoteRef.value.clearEditorContent();
  addEditNoteRef.value.setFocusOnEditor();
}
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .notes {
    padding: 0.5rem 0.75rem;
  }
}
</style>