import { useState, createContext } from "react";
import { auth, db } from "../firebase/config";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [user, setUser] = useState({});

  const signup = (email, username, fullName, password) => {
    auth.createUserWithEmailAndPassword(email, password).then((result) => {
      setUser(result.user);
      db.collection("users").add({
        username,
        displayName: fullName,
        photoURL: result.user.photoURL,
      });
    });
  };

  const value = {
    user,
    setUser,
    signup,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
