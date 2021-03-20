import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import Avatar from "@material-ui/core/Avatar";

export default function Navbar() {
  return (
    <nav>
      <div className="nav__container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
        <div className="nav__menu">
          <HomeSharpIcon />
          <Avatar
            alt="Shaan Alam"
            src="https://instagram.fknu1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/161233805_1742142032840831_4284340814050814656_n.jpg?tp=1&_nc_ht=instagram.fknu1-2.fna.fbcdn.net&_nc_ohc=cRKDaBw0RjAAX-9bOzH&ccb=7-4&oh=dfdb2615e2580a6c3dc51e79d152f4c0&oe=607F4D7F"
          />
        </div>
      </div>
    </nav>
  );
}
