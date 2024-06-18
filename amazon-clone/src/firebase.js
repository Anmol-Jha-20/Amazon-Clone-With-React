// import firebase from "firebase";
// // import { initializeApp } from "firebase/app";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBEAS7Hw06fiCvi5tvkC6otjssrCIY1XbQ",
//   authDomain: "clone-7ffa7.firebaseapp.com",
//   projectId: "clone-7ffa7",
//   storageBucket: "clone-7ffa7.appspot.com",
//   messagingSenderId: "471946209529",
//   appId: "1:471946209529:web:5b208b9773fd3877609a28",
//   measurementId: "G-M9BRJX3WTR",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEAS7Hw06fiCvi5tvkC6otjssrCIY1XbQ",
  authDomain: "clone-7ffa7.firebaseapp.com",
  projectId: "clone-7ffa7",
  storageBucket: "clone-7ffa7.appspot.com",
  messagingSenderId: "471946209529",
  appId: "1:471946209529:web:5b208b9773fd3877609a28",
  measurementId: "G-M9BRJX3WTR",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export default app;
