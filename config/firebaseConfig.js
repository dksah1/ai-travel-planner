// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC0HdpqJwDHNdzxJTDcDHjb41G0_w3qFI",
  authDomain: "ai-travel-planner-80f4d.firebaseapp.com",
  projectId: "ai-travel-planner-80f4d",
  storageBucket: "ai-travel-planner-80f4d.appspot.com",
  messagingSenderId: "718931100608",
  appId: "1:718931100608:web:e12d555770ec50cdabfe25",
  measurementId: "G-RD7095QN6N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
