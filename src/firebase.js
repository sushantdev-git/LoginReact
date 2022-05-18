// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUivw0DrbiE5JfosgMMjbhyoVxeSgUb5o",
  authDomain: "login-app-12ef8.firebaseapp.com",
  projectId: "login-app-12ef8",
  storageBucket: "login-app-12ef8.appspot.com",
  messagingSenderId: "94383243825",
  appId: "1:94383243825:web:dbbeb0efdee5354d878b10",
  measurementId: "G-MT8MT8F6Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);