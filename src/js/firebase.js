import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPDN3j7llt0uXhaLMLXK9pDjQPUQXPMZ8",
  authDomain: "notes-fa640.firebaseapp.com",
  projectId: "notes-fa640",
  storageBucket: "notes-fa640.firebasestorage.app",
  messagingSenderId: "139907762131",
  appId: "1:139907762131:web:99fe5fed3c388f93afd126"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
