// import firebase from "firebase";
// // import { initializeApp } from "firebase/app";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "API_KEY",
//   authDomain: "AUTH_DOMAIN",
//   projectId: "PROJECT_ID",
//   storageBucket: "STORAGE_BUCKET",
//   messagingSenderId: "MESSAGING_SENDER_ID",
//   appId: "APP_ID",
//   measurementId: "MEASUREMENT_ID",
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
   apiKey: "API_KEY",
   authDomain: "AUTH_DOMAIN",
   projectId: "PROJECT_ID",
   storageBucket: "STORAGE_BUCKET",
   messagingSenderId: "MESSAGING_SENDER_ID",
   appId: "APP_ID",
   measurementId: "MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export default app;
