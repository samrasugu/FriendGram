import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "friendgram-ab908.firebaseapp.com",
  projectId: "friendgram-ab908",
  storageBucket: "friendgram-ab908.appspot.com",
  messagingSenderId: "392463231800",
  appId: "1:392463231800:web:1b6c61f5d5a1f1e501efcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
