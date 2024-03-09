import { NavLink } from "react-router-dom";
import styles from "./Navlinks.module.css";

function Navlinks() {
  const links = [
    { name: "Posts", to: "/" },
    { name: "Create Post", to: "/create" },
    { name: "Followers", to: "/followers" },
    { name: "Following", to: "/following" },
    { name: "Profile", to: "/profile" },
  ];

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <NavLink
          to={link.to}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <div className={styles.link}>{link.name}</div>
        </NavLink>
      ))}
    </div>
  );
}

export default Navlinks;
