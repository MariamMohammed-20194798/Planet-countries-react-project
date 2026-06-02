import classes from "./Search.module.css";
import { HiOutlineSearch } from "react-icons/hi";

const Search = ({ onInput }) => (
  <div className={classes.searchBox}>
    <label htmlFor="country-search" className="sr-only">
      Search for a country
    </label>
    <HiOutlineSearch className={classes.searchIcon} aria-hidden="true" />
    <input
      id="country-search"
      className={classes.searchInput}
      type="search"
      placeholder="Search for a country…"
      onChange={onInput}
      autoComplete="off"
    />
  </div>
);

export default Search;
