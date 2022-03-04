import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz6F21ivJZWi_XHVijdVC_bX6fkcExVLY",
  authDomain: "instagram-3dd93.firebaseapp.com",
  projectId: "instagram-3dd93",
  storageBucket: "instagram-3dd93.appspot.com",
  messagingSenderId: "425432887210",
  appId: "1:425432887210:web:eb48fcf5cd1f27bcc7c5d3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const db = firebaseApp.firestore();
