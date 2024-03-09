import PostType from "../../Types/Post";
import styles from "./Post.module.css";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src={post.user.image} alt="profile photo" />
          <div className={styles.info}>
            <p>{post.user.name}</p>
            <p>@{post.user.username}</p>
          </div>
        </div>
        <div className={styles.body}>
          {post.content?.desc && <p>{post.content.desc}</p>}
          {post.content?.image && <img src={post.content.image} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
