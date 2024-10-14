// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDQdE5iyBsgo589I9HG_eo2I8UHjfp4te0",
  authDomain: "quizzr-4bdde.firebaseapp.com",
  projectId: "quizzr-4bdde",
  storageBucket: "quizzr-4bdde.appspot.com",
  messagingSenderId: "853507819482",
  appId: "1:853507819482:web:7180d8c40f88c6622ca2e3",
  measurementId: "G-JC7NM1GJXT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)