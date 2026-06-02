import { HiOutlineExclamationCircle, HiOutlineGlobeAlt } from "react-icons/hi";
import styles from "./StatePanel.module.css";

const StatePanel = ({ variant = "error", title, message, children }) => {
  const Icon = variant === "empty" ? HiOutlineGlobeAlt : HiOutlineExclamationCircle;

  return (
    <div
      className={`${styles.panel} ${styles[variant]}`}
      role={variant === "error" ? "alert" : "status"}
    >
      <div className={styles.iconWrap} aria-hidden="true">
        <Icon className={styles.icon} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      {message && <p className={styles.message}>{message}</p>}
      {children}
    </div>
  );
};

export default StatePanel;
