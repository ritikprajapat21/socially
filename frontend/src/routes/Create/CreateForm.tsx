import { Form } from "react-router-dom";
import styles from "./CreateForm.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const CreateForm = () => {
  const colNumber = window.screen.width <= 425 ? 35 : 55;
  return (
    <Form className={styles.form}>
      <h1>Create a post</h1>
      <textarea
        placeholder="Enter the content of the post"
        name="content"
        rows={15}
        cols={colNumber}
      />
      <Input type="file" name="image" accept="image/*" />
      <Button type="submit">Create</Button>
    </Form>
  );
};

export default CreateForm;
