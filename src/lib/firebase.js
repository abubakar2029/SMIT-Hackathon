// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBsWQhL6KtrhoaYj8F7Q543jw8E0EOSvRc",
  authDomain: "smit-8920b.firebaseapp.com",
  projectId: "smit-8920b",
  storageBucket: "smit-8920b.appspot.com",
  messagingSenderId: "943828708282",
  appId: "1:943828708282:web:a736c7c3b761c416074b83",
  measurementId: "G-TM1JXXSX72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

