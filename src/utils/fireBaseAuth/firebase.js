// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQHinZ_fxptqNzg_2wHmhB6RHoJmsnA54",
  authDomain: "deft-landing-411703.firebaseapp.com",
  projectId: "deft-landing-411703",
  storageBucket: "deft-landing-411703.appspot.com",
  messagingSenderId: "890033744850",
  appId: "1:890033744850:web:cb0d269901771ecc9cf60b",
  measurementId: "G-XEKT6024FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();
