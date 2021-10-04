import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCW3WpcUf_K36J6yV3NSPztjw6hOXIAqR8",
    authDomain: "svelte-notes.firebaseapp.com",
    databaseURL: "https://svelte-notes.firebaseio.com",
    projectId: "svelte-notes",
    storageBucket: "svelte-notes.appspot.com",
    messagingSenderId: "181738645754",
    appId: "1:181738645754:web:531a492d795bd245554143",
    measurementId: "G-PNCBGSW25M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
