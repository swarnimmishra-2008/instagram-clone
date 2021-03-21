import { useState, useEffect, useContext } from "react";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import Avatar from "@material-ui/core/Avatar";
import { Context } from "../Context/GlobalState";
import { db } from "../firebase/config";

export default function Navbar() {

  const [user, setUser] = useState({});

  const {
    user: { uid },
  } = useContext(Context);

  // useEffect(() => {
  //   console.log(db.collection('users').where("uid", '==', uid));
  // }, [uid]);

  return (
    <nav>
      <div className="nav__container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
        <div className="nav__menu">
          <HomeSharpIcon />
          <Avatar alt={user?.displayName} src={user?.photoURL} />
        </div>
      </div>
    </nav>
  );
}
