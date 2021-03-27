import Avatar from "@material-ui/core/Avatar";
import Hashtags from "react-highlight-hashtags";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar alt={post.user.displayName} src={post.user.photoURL} />
        <h4>{post.user.username}</h4>
      </div>
      <div className="post__body">
        <img src={post.url} alt="Post" />
      </div>
      <div className="post__footer">
        <h4 className="post__username">{post.user.fullName}</h4>
        <p>
          <Hashtags>{post.caption}</Hashtags>
        </p>
      </div>
    </div>
  );
}
