import { Link } from "react-router-dom";
import classes from "./CountriesList.module.css";
import CountryBlock from "./CountryBlock";
const CountriesList = ({ data, blackTheme }) => {
  const darkModeHandler = blackTheme
    ? classes.countryDarkBlock
    : classes.countryWhiteBlock;

  return (
    <div className={classes.container}>
      <div className={classes.countriesList}>
        {data.map((country, idx) => (
          <Link to={country.alpha3Code} key={idx} className={darkModeHandler}>
            <CountryBlock
              key={country.name}
              img={country.flags.png}
              capital={country.capital}
              population={country.population}
              name={country.name}
              region={country.region}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
