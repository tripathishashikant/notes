import { defineStore } from 'pinia'
import db from '@/js/firebase'

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
        },
        updateNote(id, content) {
            const index = this.notes.findIndex((note) => note.id === id);

            if (index !== -1)
                this.notes[index].content = content;
            else
                console.error(`Note with id ${id} is not present.`);
        },
    },
    getters: {
        getNoteContent() {
            return (id) => {
                return this.notes.filter((note) => note.id === id)[0].content;
            }
        },
        getNumberOfNotes() {
            return this.notes.length;
        },
        getTotalCharacterCount() {
            return this.notes.reduce((char, note, i) => char + note.content.length, 0);
        },
    }
});