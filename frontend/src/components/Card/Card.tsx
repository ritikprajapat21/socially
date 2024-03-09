import Follower from "../../Types/follower";
import styles from "./Card.module.css";

const Card = ({ follower }: { follower: Follower }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={follower.image} alt="Profile Photo" />
        <div className={styles.info}>
          <p>{follower.name}</p>
          <p>@{follower.username}</p>
        </div>
      </div>
      <div className={styles.cardBody}>
        <p>
          {follower.followers}{" "}
          {follower.followers < 1 ? "Follower" : "Followers"}
        </p>
        <p>
          {follower.followings}{" "}
          {follower.followings < 1 ? "Follower" : "Followers"}
        </p>
      </div>
    </div>
  );
};

export default Card;
