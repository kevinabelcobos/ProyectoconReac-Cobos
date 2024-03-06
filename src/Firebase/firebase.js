import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs4J1uXIu8IkKsKxngAYNqjj2kzUF7L4M",
  authDomain: "pruebaconreacjs.firebaseapp.com",
  projectId: "pruebaconreacjs",
  storageBucket: "pruebaconreacjs.appspot.com",
  messagingSenderId: "718357786145",
  appId: "1:718357786145:web:14030d58deb4a01c46fd60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const bd = getFirestore(app);