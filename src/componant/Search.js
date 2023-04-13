import classes from "./Search.module.css";
const Search = ({ onInput, blackTheme }) => {
  const searchText = blackTheme
    ? classes.searchTextBlack
    : classes.searchTextWhite;
  return (
    <div className={classes.searchBox}>
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
