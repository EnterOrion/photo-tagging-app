import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBd9qIqzD2iaoyOuqVoV4HtRkQ9h85Q8Mg",
    authDomain: "where-is-the-cat.firebaseapp.com",
    projectId: "where-is-the-cat",
    storageBucket: "where-is-the-cat.appspot.com",
    messagingSenderId: "349562676841",
    appId: "1:349562676841:web:2dc0e9d080c1f11406e4f8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
