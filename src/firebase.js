// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqJ4a9nB5a1K6NamW7RY6B41QrU9YnMjM",
    authDomain: "react-chat-80a83.firebaseapp.com",
    projectId: "react-chat-80a83",
    storageBucket: "react-chat-80a83.appspot.com",
    messagingSenderId: "230676031770",
    appId: "1:230676031770:web:43186c1a10d0ee14d7e4a3",
    measurementId: "G-F1ZRCB94LM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);