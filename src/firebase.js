import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAUivw0DrbiE5JfosgMMjbhyoVxeSgUb5o",
  authDomain: "login-app-12ef8.firebaseapp.com",
  projectId: "login-app-12ef8",
  storageBucket: "login-app-12ef8.appspot.com",
  messagingSenderId: "94383243825",
  appId: "1:94383243825:web:dbbeb0efdee5354d878b10",
  measurementId: "G-MT8MT8F6Z0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password, setError) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    setError(null);
  } catch (err) {
    console.error(err);
    setError(err.message);
  }
};

const registerWithEmailAndPassword = async ( email, password, setError) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users/"+user.uid), {
      uid: user.uid,
      email,
    });
    setError("Successfull")
  } catch (err) {
    console.error(err);
    setError(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};