// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMmgJecsqOPIhUjv8Rl87rC3S6vXIwH-A",
  authDomain: "fir-practice-afa4b.firebaseapp.com",
  projectId: "fir-practice-afa4b",
  storageBucket: "fir-practice-afa4b.appspot.com",
  messagingSenderId: "462417019951",
  appId: "1:462417019951:web:4e7c9d78f2624733f7b2da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;