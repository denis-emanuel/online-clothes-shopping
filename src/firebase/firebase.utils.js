import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB247Rj8eaf0ki7VQKh2ERtISHl2QVnLmA",
  authDomain: "online-shop-app-be.firebaseapp.com",
  projectId: "online-shop-app-be",
  storageBucket: "online-shop-app-be.appspot.com",
  messagingSenderId: "31058698885",
  appId: "1:31058698885:web:763ad8849386a42b81bfec",
  measurementId: "G-CEJ0E964F3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
