import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navlinks from "../Navlinks/Navlinks";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to={"/"}>
          <h1>Socially</h1>
        </Link>
      </div>
      <Navlinks />
      {/* Create */}
      {/* Liked Posts */}
      {/* Commented Posts */}
      {/* Followers */}
      {/* Following */}
      {/* Settings */}
      <Footer />
      {/* Footer  */}
      {/* Login: If not Login */}
      {/* Logout: If login */}
    </div>
  );
}

export default Sidebar;
