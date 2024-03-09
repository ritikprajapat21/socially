import Follower from "../../Types/follower";
import styles from "./Followers.module.css";
import Card from "../../components/Card/Card";

const Followers = () => {
  const followers: Follower[] = [
    {
      id: 1,
      name: "Ritik Prajapat",
      username: "ritikprajapat",
      image:
        "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      followers: 25,
      followings: 25,
    },
    {
      id: 2,
      name: "Kushagra Prajapat",
      username: "Kushagraprajapat",
      image:
        "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      followers: 25,
      followings: 25,
    },
    {
      id: 3,
      name: "Surbhit Prajapat",
      username: "surbhit",
      image:
        "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      followers: 25,
      followings: 25,
    },
    {
      id: 4,
      name: "Ritik Prajapat",
      username: "ritikprajapat",
      image:
        "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      followers: 25,
      followings: 25,
    },
  ];

  return (
    <div className={styles.container}>
      {followers.map((follower) => (
        <Card key={follower.id} follower={follower} />
      ))}
    </div>
  );
};

export default Followers;
