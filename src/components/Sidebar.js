import Avatar from "@material-ui/core/Avatar";
import User from "./User";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          alt="Shaan Alam"
          src="https://instagram.fknu1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/161233805_1742142032840831_4284340814050814656_n.jpg?tp=1&_nc_ht=instagram.fknu1-2.fna.fbcdn.net&_nc_ohc=cRKDaBw0RjAAX-9bOzH&ccb=7-4&oh=dfdb2615e2580a6c3dc51e79d152f4c0&oe=607F4D7F"
        />
        <div className="user__info">
          <h4 className="currentUser__username">__shaanalam__</h4>
          <p className="currentUser__fullName">Shaan Alam</p>
        </div>
      </div>
      <div className="suggestions">
        <h4 className="suggestions">Suggestions for you</h4>
        <User />
      </div>
    </div>
  );
}
