import { useState, createContext } from "react";
import { auth, db } from "../firebase/config";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [user, setUser] = useState({});

  const login = (email, password, redirect) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        db.collection("users")
          .where("uid", "==", result.user.uid)
          .get()
          .then((snapshot) =>
            setUser(snapshot.docs.map((doc) => ({ ...doc.data() }))[0])
          );

        redirect();
      })
      .catch((err) => console.log(err));
  };

  const signup = (email, username, fullName, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Setting the user in firestore
        db.collection("users").add({
          uid: result.user.uid,
          username,
          displayName: fullName,
          photoURL: result.user.photoURL,
        });

        db.collection("users")
          .where("uid", "==", result.user.uid)
          .get()
          .then((snapshot) =>
            setUser(snapshot.docs.map((doc) => ({ ...doc.data() }))[0])
          );
      })
      .catch((err) => console.log(err));
  };

  const value = {
    user,
    setUser,
    signup,
    login,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
