<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          class="button is-link has-background-success"
          :disabled="newNote === ''"
          @click="handleAddNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note"
    /> 
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNotesStore } from '@/stores/notes.store.js';
import Note from "@/components/notes/Note.vue";
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useWatchCharacters } from '@/composables/useWatchCharacters';

const notesStore = useNotesStore();
const newNote = ref('');
const addEditNoteRef = ref(null);

function handleAddNote() {
  const id = new Date().getTime().toString();
  const note = { id, content: newNote.value };

  notesStore.addNote(note);

  newNote.value = '';
  addEditNoteRef.value.focusTextarea();
}

useWatchCharacters(newNote);
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .notes {
    padding: 0.5rem 0.75rem;
  }
}
</style>