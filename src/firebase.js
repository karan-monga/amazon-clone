// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCKrNiK8wgwXypucQxGVlue9bAjzDmQck",
  authDomain: "amzn-clone-km.firebaseapp.com",
  projectId: "amzn-clone-km",
  storageBucket: "amzn-clone-km.appspot.com",
  messagingSenderId: "430095431223",
  appId: "1:430095431223:web:9c15d1fe61fe07ae86b1b2",
  measurementId: "G-TGS87RTXXE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

