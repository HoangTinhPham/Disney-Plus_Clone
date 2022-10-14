import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB1KrqWzVc7-Hi1_hsIJ2S1JlKEGduoZjE",
  authDomain: "disneyplus-clone-c1b8d.firebaseapp.com",
  projectId: "disneyplus-clone-c1b8d",
  storageBucket: "disneyplus-clone-c1b8d.appspot.com",
  messagingSenderId: "476985770896",
  appId: "1:476985770896:web:9f2376f1ac37a5fb486915",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;