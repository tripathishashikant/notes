import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotesStore = defineStore('notesStore', {
    state: () => {
        return {
            notes: [],
        }
    },
    actions: {
        addNote(newNote) {
            this.notes.unshift(newNote);
        },
        deleteNote(id) {
            this.notes = this.notes.filter(note => note.id !== id);
        }
    }
});