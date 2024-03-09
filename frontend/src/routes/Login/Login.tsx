import { Form, Link } from "react-router-dom";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import styles from "./Login.module.css";

function Login() {
  return (
    <>
      <div className={styles.container}>
        <Form className={styles.form}>
          <Input type="text" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
          <Button type="submit">Login</Button>
        </Form>
        <Link to={"/register"}>Not a member? Register</Link>
      </div>
    </>
  );
}

export default Login;
