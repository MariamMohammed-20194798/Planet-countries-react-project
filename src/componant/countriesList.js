import { Link } from "react-router-dom";
import classes from "./CountriesList.module.css";
import CountryBlock from "./CountryBlock";
import Reveal from "./ui/Reveal";

const CountriesList = ({ data }) => (
  <div className={classes.container}>
    <p className={classes.count} aria-live="polite">
      Showing <strong>{data.length}</strong>{" "}
      {data.length === 1 ? "country" : "countries"}
    </p>
    <ul className={classes.countriesList}>
      {data.map((country, idx) => (
        <li key={country.alpha3Code || country.name}>
          <Reveal delay={Math.min(idx * 40, 320)}>
            <Link
              to={country.alpha3Code}
              className={classes.cardLink}
              aria-label={`View details for ${country.name}`}
            >
              <CountryBlock
                img={country.flags.png}
                capital={country.capital}
                population={country.population}
                name={country.name}
                region={country.region}
              />
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  </div>
);

export default CountriesList;
