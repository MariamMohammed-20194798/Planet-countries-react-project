import { Link } from "react-router-dom";
import { HiOutlineGlobeAlt, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import styles from "./Header.module.css";

const Header = ({ blackTheme, setBlackTheme }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <Link to="/" className={styles.brand} aria-label="World Explorer — home">
        <span className={styles.logo}>
          <HiOutlineGlobeAlt className={styles.logoIcon} aria-hidden="true" />
        </span>
        <span className={styles.title}>Where in the world?</span>
      </Link>

      <button
        type="button"
        className={styles.themeToggle}
        onClick={() => setBlackTheme(!blackTheme)}
        aria-pressed={blackTheme}
        aria-label={blackTheme ? "Switch to light mode" : "Switch to dark mode"}
      >
        {blackTheme ? (
          <HiOutlineSun className={styles.themeIcon} aria-hidden="true" />
        ) : (
          <HiOutlineMoon className={styles.themeIcon} aria-hidden="true" />
        )}
        <span className={styles.themeLabel}>
          {blackTheme ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </div>
  </header>
);

export default Header;
