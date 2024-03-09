import styles from "./Button.module.css";

function Button({
  type,
  onClick,
  children,
}: {
  type: "submit" | "reset" | "button";
} & Omit<React.HTMLProps<HTMLButtonElement>, "type">): React.ReactNode {
  return (
    <div className={styles.container}>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
