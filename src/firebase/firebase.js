// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWmYZlatlhG3fAZgirZuVb7Oql9_YWGsY",
  authDomain: "migrainetracker-6d9ce.firebaseapp.com",
  projectId: "migrainetracker-6d9ce",
  storageBucket: "migrainetracker-6d9ce.appspot.com",
  messagingSenderId: "799971877221",
  appId: "1:799971877221:web:1ae683c59108bda4c9c18c",
  measurementId: "G-FR0FJX8NY7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);