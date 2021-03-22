import { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import User from "./User";
import { Context } from "../Context/GlobalState";

export default function Sidebar() {
  const { user } = useContext(Context);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar alt={user?.displayName} src={user.photoURL} />
        <div className="user__info">
          <h4 className="currentUser__username">{user?.username}</h4>
          <p className="currentUser__fullName">{user?.displayName}</p>
        </div>
      </div>
      <div className="suggestions">
        <h4 className="suggestions">Suggestions for you</h4>
        <User />
      </div>
    </div>
  );
}
