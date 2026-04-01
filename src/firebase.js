import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsBmL6T2De-Fj47LLqjynDFmZSKIM5VZw",
  authDomain: "upload-images-15c1b.firebaseapp.com",
  projectId: "upload-images-15c1b",
  storageBucket: "upload-images-15c1b.firebasestorage.app",
  messagingSenderId: "784365172633",
  appId: "1:784365172633:web:fa1a8c2ca19f6939b18508",
  measurementId: "G-2SKZW2ZY64"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);