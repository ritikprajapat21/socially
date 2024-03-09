import { Form, Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import styles from "./Register.module.css";
import Button from "../../components/Button/Button";

function Register() {
  return (
    <div className={styles.container}>
      <Form className={styles.form}>
        <Input type="text" placeholder="Enter your name" />
        <Input type="email" placeholder="Enter your email" />
        <Input type="password" placeholder="Enter your password" />
        <Input type="password" placeholder="Re-enter your password" />
        <Button type="submit">Register</Button>
      </Form>
      <Link to={"/login"}>Already a member? Login</Link>
    </div>
  );
}

export default Register;
