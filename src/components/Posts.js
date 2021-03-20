import Post from "./Post";

export default function Posts() {
  return (
    <div className="posts">
      <Post
        url={
          "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/6/21/original/20060425_SHA_0079-3_-_Copy.jpg"
        }
      />
      <Post url={"https://pbs.twimg.com/media/EinVetBUMAAx3cj.jpg:large"} />
    </div>
  );
}

