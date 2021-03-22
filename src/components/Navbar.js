import { useState, useContext } from "react";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";
import { Context } from "../Context/GlobalState";
import UploadModal from "./UploadModal";

export default function Navbar() {
  const { user } = useContext(Context);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <nav>
      <div className="nav__container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
        <div className="nav__menu">
          <HomeSharpIcon />
          <button onClick={() => setOpen(true)}>
            <AddIcon />
          </button>
          {open && <UploadModal open={open} handleClose={handleClose} />}
          <Avatar alt={user?.displayName} src={user?.photoURL} />
        </div>
      </div>
    </nav>
  );
}
