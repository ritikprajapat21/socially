import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Footer.module.css";

function Footer() {
  const isLogin = false;

  if (isLogin) {
    return (
      <div className={styles.container}>
        <Link to={"/logout"}>
          <Button type="button">Logout</Button>
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Link to={"/login"}>
        <Button type="button">Login</Button>
      </Link>
    </div>
  );
}

export default Footer;
