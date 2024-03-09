import PostType from "../../Types/Post";
import Post from "../Post/Post";
import styles from "./PostPage.module.css";

const PostPage = () => {
  const posts: PostType[] = [
    {
      id: 1,
      user: {
        name: "Ritik Prajapat",
        username: "Ritik",
        image:
          "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      content: {
        desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        image:
          "https://images.pexels.com/photos/3585090/pexels-photo-3585090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    },
    {
      id: 2,
      user: {
        name: "Ritik Prajapat",
        username: "Ritik",
        image:
          "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      content: {
        desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      },
    },
    {
      id: 3,
      user: {
        name: "Ritik Prajapat",
        username: "Ritik",
        image:
          "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      content: {
        image:
          "https://images.pexels.com/photos/3585090/pexels-photo-3585090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    },
    {
      id: 4,
      user: {
        name: "Ritik Prajapat",
        username: "Ritik",
        image:
          "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      content: {
        desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        image:
          "https://images.pexels.com/photos/3585090/pexels-photo-3585090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    },
    {
      id: 5,
      user: {
        name: "Ritik Prajapat",
        username: "Ritik",
        image:
          "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      content: {
        desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        image:
          "https://images.pexels.com/photos/3585090/pexels-photo-3585090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    },
    {
      id: 6,
      user: {
        name: "Ritik Prajapat",
        username: "Ritik",
        image:
          "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      content: {
        desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        image:
          "https://images.pexels.com/photos/3585090/pexels-photo-3585090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    },
  ];

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostPage;
