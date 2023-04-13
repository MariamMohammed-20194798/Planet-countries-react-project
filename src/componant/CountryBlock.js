import classes from "./CountryBlock.module.css";
import { useContext } from "react";
import { DarkTheme } from "./DarkTheme";
const CountryBlock = ({ img, capital, population, region, name }) => {
  const blackTheme = useContext(DarkTheme);
  const text = blackTheme ? classes.textBlack : classes.textWhite;
  const text2 = blackTheme ? classes.text2Black : classes.text2White;
  const container = blackTheme
    ? classes.containerBlack
    : classes.containerWhite;
  return (
    <div className={container}>
      <img src={img} className={classes.img} alt="" />
      <h2 className={text}>{name}</h2>
      <div className={text2}>
        {" "}
        <p>
          <strong>Capital 🏙 : </strong>
          {capital}
        </p>
        <p>
          <strong>Region 🌎 : </strong>
          {region}
        </p>
        <p>
          <strong>Population 👪 : </strong>
          {population.toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
};
export default CountryBlock;
