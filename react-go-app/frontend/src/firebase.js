// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcwWvFnGI8CpwMj7JK-SRm7z3Qs_ZkXhA",
  authDomain: "react-go-firebase-4589d.firebaseapp.com",
  projectId: "react-go-firebase-4589d",
  storageBucket: "react-go-firebase-4589d.appspot.com",
  messagingSenderId: "954327857348",
  appId: "1:954327857348:web:5db2906a791fb52fecf191",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db
export const db = getFirestore(app);
