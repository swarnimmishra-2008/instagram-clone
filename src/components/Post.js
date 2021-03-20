import Avatar from "@material-ui/core/Avatar";
import Hashtags from "react-highlight-hashtags";

export default function Post({ url }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          alt="sadhguru"
          src="https://instagram.fknu1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/58695761_2907416679298304_5868135566515634176_n.jpg?tp=1&_nc_ht=instagram.fknu1-2.fna.fbcdn.net&_nc_ohc=TZfhaj879FcAX-EAd3c&ccb=7-4&oh=735f06c05dbe33f25f7367a7fccf73ad&oe=60801FF7"
        />
        <h4>sadhguru</h4>
      </div>
      <div className="post__body">
        <img
          src={url}
          alt="Post"
        />
      </div>
      <div className="post__footer">
        <p>
          <h4 className="post__username">sadhguru</h4>
          <Hashtags>
            Karma means to take charge of your life. By making your karma a more
            conscious process, you become the master of your own destiny.
            #SadhguruQuotes
          </Hashtags>
        </p>
      </div>
    </div>
  );
}
