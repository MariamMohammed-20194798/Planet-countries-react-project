import classes from "./Search.module.css";
import { HiOutlineSearch } from "react-icons/hi";
const Search = ({ onInput, blackTheme }) => {
  const searchText = blackTheme
    ? classes.searchTextBlack
    : classes.searchTextWhite;
  const searchIcon = blackTheme
    ? classes.searchIconBlack
    : classes.searchIconWhite;
  return (
    <div className={classes.searchBox}>
      <HiOutlineSearch className={searchIcon} />
      <input
        className={searchText}
        type="text"
        placeholder="Search for a country..."
        onChange={onInput}
      />
    </div>
  );
};
export default Search;
