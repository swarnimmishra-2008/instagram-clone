import { useState, createContext } from "react";
import { auth, db } from "../firebase/config";
import firebase from "firebase";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [user, setUser] = useState({});

  const login = (email, password, redirect, disableLoading) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        db.collection("users")
          .where("uid", "==", result.user.uid)
          .get()
          .then((snapshot) => {
            setUser(
              snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0]
            );
            disableLoading();
            redirect();
          });
      })
      .catch((err) => {
        console.log(err);
        disableLoading();
      });
  };

  const signup = (email, username, fullName, password, redirect) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Setting the user in firestore
        db.collection("users").add({
          uid: result.user.uid,
          username,
          fullName,
          photoURL: result.user.photoURL,
        });

        // Setting user to state from users collection
        db.collection("users")
          .where("uid", "==", result.user.uid)
          .get()
          .then((snapshot) => {
            setUser(snapshot.docs.map((doc) => ({ ...doc.data() }))[0]);
            // Redirect to home component
            redirect();
          });
      })
      .catch((err) => console.log(err));
  };

  const logout = (redirect) => {
    auth
      .signOut()
      .then(() => {
        // Signing out user
        setUser({});

        // redirect back to login page
        redirect();
      })
      .catch((err) => alert(err));
  };

  const loginWithGoogle = (redirect) => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        // Setting the user in firestore
        db.collection("users").add({
          uid: result.user.uid,
          username: "",
          fullName: "",
          photoURL: result.user.photoURL,
        });

        // Setting user to state from users collection
        db.collection("users")
          .where("uid", "==", result.user.uid)
          .get()
          .then((snapshot) => {
            setUser(
              snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0]
            );
            
            // Redirect to home component
            redirect();
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value = {
    user,
    setUser,
    signup,
    login,
    logout,
    loginWithGoogle,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
