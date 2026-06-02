import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "secondary",
  className = "",
  type = "button",
  ...props
}) => (
  <button
    type={type}
    className={`${styles.button} ${styles[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
