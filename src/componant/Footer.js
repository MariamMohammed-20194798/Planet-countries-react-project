import { Link } from "react-router-dom";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import styles from "./Footer.module.css";

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <HiOutlineGlobeAlt className={styles.logoIcon} aria-hidden="true" />
          <span className={styles.brandName}>World Explorer</span>
        </div>
        <p className={styles.tagline}>
          Discover countries, regions, and cultures — powered by REST Countries API.
        </p>
        <nav className={styles.nav} aria-label="Footer navigation">
          <Link to="/" className={styles.link}>
            All Countries
          </Link>
          <a
            href="https://restcountries.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            API Source
          </a>
        </nav>
        <p className={styles.copy}>
          © 2022 World Explorer. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
