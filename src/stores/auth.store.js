import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, 
} from "firebase/auth"
import { auth } from '@/js/firebase'
import { useNotesStore } from '@/stores/notes.store'

export const useAuthStore = defineStore('useAuthStore', {
  state: () => {
    return {
      user: {}
    }
  },
  actions: {
    init() {
      const notesStore = useNotesStore();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.email = user.email;
          this.user.uid = user.uid;
          this.router.push('/')
          notesStore.init()
        } else {
          this.user = {}
          this.router.replace('/auth')
          notesStore.clearNotes()
        }
      });
    },
    registerUser({ email, password }) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
    },
    loginUser({ email, password }) {
      signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.error(error.message)
      });
    },
    logoutUser() {
      signOut(auth).then(() => {
        console.log('Sign-out successful.');
      }).catch((error) => {
        console.log('An error happened ', error.message);
      });
    }
  },
});
