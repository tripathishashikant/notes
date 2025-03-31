import { defineStore } from 'pinia'

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
    },
    getters: {
        getNoteContent(state) {
            return (id) => {
                return state.notes.filter((note) => note.id === id)[0].content;
            }
        }
    }
});