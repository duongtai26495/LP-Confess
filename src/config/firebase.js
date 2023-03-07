// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkvBgFH3q_fA0mmCociCgCzAySzedadu8",
  authDomain: "syncdiary-a6754.firebaseapp.com",
  databaseURL: "https://syncdiary-a6754-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "syncdiary-a6754",
  storageBucket: "syncdiary-a6754.appspot.com",
  messagingSenderId: "362374479608",
  appId: "1:362374479608:web:b96278f3cead5cb9cc450d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)