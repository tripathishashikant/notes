import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, 
} from "firebase/auth"
import { auth } from '@/js/firebase'

export const useAuthStore = defineStore('useAuthStore', {
  state: () => {
    return {
      user: {}
    }
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.email = user.email;
          this.user.uid = user.uid;
          this.router.push('/')
        } else {
          this.user = {}
          this.router.replace('/auth')
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
      .then((userCredential) => {
        console.log('user logged in: ', userCredential.user);
      })
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
