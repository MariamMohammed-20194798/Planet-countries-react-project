import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import img from "../img/25px-U+2190.svg.png";
import classes from "./CountryInfo.module.css";
import { useContext } from "react";
import { DarkTheme } from "./DarkTheme";

const CountryInfo = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoding } = useFetch(
    `https://restcountries.com/v2/alpha/${code}`
  );
  const blackTheme = useContext(DarkTheme);
  const text2 = blackTheme ? classes.text2Black : classes.text2White;
  const text = blackTheme ? classes.textBlack : classes.textWhite;
  const container = blackTheme
    ? classes.containerBlack
    : classes.containerWhite;
  const btn = blackTheme ? classes.btnBlack : classes.btnWhite;
  const link = blackTheme ? classes.linkBlack : classes.linkWhite;
  const errMsg = blackTheme ? classes.errMsgBlack : classes.errMsg;
  return (
    <div className={container}>
      <div className={classes.btnBlock}>
        <button className={btn} onClick={() => navigate(-1)}>
          <img className={classes.arrow} src={img} alt="" />
          Back
        </button>
      </div>
      {isLoding && <div className={errMsg}>Data is loading</div>}
      {error && <div className={errMsg}>{error}</div>}
      {data && (
        <div className={classes.container2}>
          <div className={classes.imgBlock}>
            <img className={classes.img} src={data.flag} alt="" />
          </div>
          <div className={classes.textBlock}>
            <div className={text}>{data.name}</div>
            <div className={classes.textGrid}>
              <p className={text2}>
                <strong>Native Name: </strong>
                {data.nativeName}
              </p>
              <p className={text2}>
                <strong>Population: </strong>
                {data.population.toLocaleString("en-US")}
              </p>
              <p className={text2}>
                {" "}
                <strong>Region: </strong>
                {data.region}
              </p>
              <p className={text2}>
                <strong>Sub Region: </strong> {data.subregion}
              </p>
              <p className={text2}>
                <strong>Capital: </strong>
                {data.capital}
              </p>
              <p className={text2}>
                <strong>Top Level Domaine: </strong>
                {data.topLevelDomain}
              </p>
              <p className={text2}>
                <strong>Currencies: </strong>
                {data.currencies.map((currency) => currency.name)}
              </p>
              <p className={text2}>
                <strong>Languages: </strong>
                {data.languages.map((language) => language.name + ", ")}
              </p>
              <p className={text2}>
                <strong>Area: </strong>
                {data.area.toLocaleString("en-US")} km²
              </p>
            </div>
            {data.borders && (
              <p className={text2}>
                <strong>Border Countries: </strong>
                {data.borders.map((border, id) => (
                  <Link to={`/${border}`} key={id} className={link}>
                    <strong>{border} </strong>
                  </Link>
                ))}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
