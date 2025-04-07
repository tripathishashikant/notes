import { defineStore } from 'pinia'
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import db from '@/js/firebase'
import { useAuthStore } from '@/stores/auth.store'

let notesCollectionRef
let notesCollectionQuery
let getNotesSnapshot = null;

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: [],
      notesLoaded: false,
    }
  },
  actions: {
    init() {
      const authStore = useAuthStore();

      notesCollectionRef = collection(db, "users", authStore.user.uid, 'notes');
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

      this.fetchNotes();
    },
    async fetchNotes() {
      this.notesLoaded = false;
      getNotesSnapshot = onSnapshot(notesCollectionQuery, (rawNotes) => {
        let notes = [];

        rawNotes.forEach((doc) => {
          let note = { id: doc.id, content: doc.data().content, date: doc.data().date };

          notes.push(note);
        });
        this.notes = notes;
        this.notesLoaded = true;
      });
    },
    async addNote({ date, content }) {
      await addDoc(notesCollectionRef, {
        date,
        content,
      });
    },
    async deleteNote(id) {
      await deleteDoc(doc(notesCollectionRef, id));
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content,
      });
    },
    clearNotes() {
      this.notes = []
      
      if (getNotesSnapshot) getNotesSnapshot()
    }
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