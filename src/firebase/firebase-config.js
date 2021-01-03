import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDun-9Uekg2RoxNGxPmKWmujqSb95k55pE",
  authDomain: "journalapp-yorest.firebaseapp.com",
  databaseURL: "https://journalapp-yorest.firebaseio.com",
  projectId: "journalapp-yorest",
  storageBucket: "journalapp-yorest.appspot.com",
  messagingSenderId: "270582460633",
  appId: "1:270582460633:web:5072516fd44253ebb78ec8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
