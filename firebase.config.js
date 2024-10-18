// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "grievance-portal-trial.firebaseapp.com",
  projectId: "grievance-portal-trial",
  storageBucket: "grievance-portal-trial.appspot.com",
  messagingSenderId: "138737008060",
  appId: "1:138737008060:web:ee8c1fd885774277f6ffb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
