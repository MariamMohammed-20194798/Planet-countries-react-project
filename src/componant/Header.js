import classes from "./Header.module.css";
import { HiOutlineMoon } from "react-icons/hi";
const Header = ({ blackTheme, setBlackTheme }) => {
  const header = blackTheme ? classes.blackHeader : classes.whiteHeader;
  const h2 = blackTheme ? classes.h2Black : classes.h2White;
  const darkMode = blackTheme ? classes.darkModeText : classes.whiteModeText;
  return (
    <div className={header}>
      <h2 className={h2}>Where in the world?</h2>
      <div className={darkMode}>
        <p onClick={() => setBlackTheme(!blackTheme)}>
          <HiOutlineMoon /> Dark Mode
        </p>
      </div>
    </div>
  );
};
export default Header;
