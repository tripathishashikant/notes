<template>
  <div class="notes">
    <div class="card has-background-primary-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
            v-model="newNote"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success" :disabled="newNote === ''" @click="handleAddNote">Add New Note</button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from "@/components/notes/Note.vue"
import { useNotesStore } from '@/stores/notes.store.js'

const newNote = ref('');
const notesStore = useNotesStore();
const newNoteRef = ref(null);

function handleAddNote() {
  const id = new Date().getTime().toString();
  const note = { id, content: newNote.value };

  notesStore.addNote(note);

  newNote.value = '';
  newNoteRef.value.focus();
}
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .notes {
    padding: 0.5rem 0.75rem;
  }
}
</style>