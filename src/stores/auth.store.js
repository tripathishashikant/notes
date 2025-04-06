import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/js/firebase'

export const useAuthStore = defineStore('useAuthStore', {
  state: () => {
    return {}
  },
  actions: {
    registerUser({ email, password }) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  },
});
