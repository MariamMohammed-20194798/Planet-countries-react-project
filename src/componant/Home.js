import useFetch from "./useFetch";
import classes from "./Home.module.css";
import { useContext, useState } from "react";
import CountriesList from "./countriesList";
import Search from "./Search";
import FilterByRegion from "./FilterByRegion";
import { DarkTheme } from "./DarkTheme";
const Home = () => {
  const [fullURL, setFullURL] = useState("all");
  const { data, error, isLoding } = useFetch(
    `https://restcountries.com/v2/${fullURL}`
  );
  const blackTheme = useContext(DarkTheme);
  const errMsg = blackTheme ? classes.errMsgBlack : classes.errMsg;
  const container = blackTheme
    ? classes.containerBlack
    : classes.containerWhite;
  const container2 = blackTheme
    ? classes.container2Black
    : classes.container2White;

  const handleChange = (event) => {
    if (event !== "") {
      setFullURL(`name/${event}`);
    } else {
      setFullURL("all");
    }
  };

  const inputChangeHandler = (event) => {
    handleChange(event.target.value);
  };

  return (
    <div className={container}>
      <div className={container2}>
        <Search onInput={inputChangeHandler} blackTheme={blackTheme} />
        <FilterByRegion onFullURL={setFullURL} blackTheme={blackTheme} />
      </div>
      {isLoding && <div className={errMsg}>Data is Loading</div>}
      {error && <div className={errMsg}>{error}</div>}
      {data && <CountriesList data={data} blackTheme={blackTheme} />}
    </div>
  );
};
export default Home;
