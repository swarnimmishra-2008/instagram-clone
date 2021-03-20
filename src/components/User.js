import Avatar from "@material-ui/core/Avatar";

export default function User() {
  return (
    <div className="user">
      <Avatar
        alt="Tanay Pratap"
        src="https://instagram.fpat1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/90181421_510156213222489_6690442420095549440_n.jpg?tp=1&_nc_ht=instagram.fpat1-1.fna.fbcdn.net&_nc_ohc=L5lHKQztCH4AX-oHZQp&ccb=7-4&oh=c39c44f144da2a1c3cb713bed1f0bd3e&oe=607F4CC3"
      />
      <div className="user__info">
        <h5>tanaypratap</h5>
        <p>Tanay Pratap</p>
      </div>
    </div>
  );
}
