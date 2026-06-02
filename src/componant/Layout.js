import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import styles from "./Layout.module.css";

const Layout = ({ blackTheme, setBlackTheme }) => (
  <div className={styles.shell}>
    <Header blackTheme={blackTheme} setBlackTheme={setBlackTheme} />
    <main className={styles.main} id="main-content">
      <PageTransition>
        <Outlet />
      </PageTransition>
    </main>
    <Footer />
  </div>
);

export default Layout;
