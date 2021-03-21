import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRkVRsEFfIZqVcdrMa2yfMXPGNqIL9L9Y",
  authDomain: "instagram-f313d.firebaseapp.com",
  projectId: "instagram-f313d",
  storageBucket: "instagram-f313d.appspot.com",
  messagingSenderId: "787484436145",
  appId: "1:787484436145:web:4485cc413fdc44eef32490",
  measurementId: "G-VRLTG5FWF7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const db = firebaseApp.firestore();
