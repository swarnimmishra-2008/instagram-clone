import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzE0n7_mljIlmvwgWlYXiJQ4SPAApZE_c",
  authDomain: "instagram-c68d0.firebaseapp.com",
  projectId: "instagram-c68d0",
  storageBucket: "instagram-c68d0.appspot.com",
  messagingSenderId: "558238019752",
  appId: "1:558238019752:web:942ea41e14c8a860e2129d",
  measurementId: "G-V5Q8FEMMRS"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const db = firebaseApp.firestore();
