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
import { ref, onMounted } from 'vue';
import { useNotesStore } from '@/stores/notes.store.js';
import Note from "@/components/notes/Note.vue";
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useWatchCharacters } from '@/composables/useWatchCharacters';

const notesStore = useNotesStore();
const newNote = ref('');
const addEditNoteRef = ref(null);

function handleAddNote() {
  const date = new Date().getTime().toString();
  const note = { date, content: newNote.value };

  notesStore.addNote(note);

  newNote.value = '';
  addEditNoteRef.value.focusTextarea();
}

useWatchCharacters(newNote);

onMounted(() => {
  notesStore.fetchNotes();
});
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .notes {
    padding: 0.5rem 0.75rem;
  }
}
</style>