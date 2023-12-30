// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiWUpI1UcB4AUFXjsE_An0wKjn9MwyYwI",
  authDomain: "clone-335bc.firebaseapp.com",
  projectId: "clone-335bc",
  storageBucket: "clone-335bc.appspot.com",
  messagingSenderId: "1060544593769",
  appId: "1:1060544593769:web:9a62df10d2f1fa861987f8",
  measurementId: "G-741NEPL5Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();

