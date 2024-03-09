import styles from "./Input.module.css";

function Input(props: React.HTMLProps<HTMLInputElement>) {
  return (
    <div className={styles.container}>
      <input {...props} />
    </div>
  );
}

export default Input;
