import useFetch from "./useFetch";
import classes from "./Home.module.css";
import { useState } from "react";
import CountriesList from "./countriesList";
import Search from "./Search";
import FilterByRegion from "./FilterByRegion";
import StatePanel from "./ui/StatePanel";
import { CountryGridSkeleton } from "./ui/Skeleton";
import Reveal from "./ui/Reveal";

const Home = () => {
  const [fullURL, setFullURL] = useState("region/africa");
  const { data, error, isLoding } = useFetch(
    `https://restcountries.com/v2/${fullURL}`
  );

  const handleChange = (value) => {
    if (value !== "") {
      setFullURL(`name/${value}`);
    } else {
      setFullURL("all");
    }
  };

  const inputChangeHandler = (event) => {
    handleChange(event.target.value);
  };

  const countries = Array.isArray(data) ? data : data ? [data] : [];

  return (
    <div className={classes.page}>
      <Reveal>
        <section className={classes.toolbar} aria-label="Search and filter">
          <Search onInput={inputChangeHandler} />
          <FilterByRegion onFullURL={setFullURL} />
        </section>
      </Reveal>

      {isLoding && (
        <div className={classes.content}>
          <CountryGridSkeleton count={12} />
        </div>
      )}

      {error && !isLoding && (
        <StatePanel
          variant="error"
          title="Something went wrong"
          message={error}
        />
      )}

      {!isLoding && !error && countries.length === 0 && (
        <StatePanel
          variant="empty"
          title="No countries found"
          message="Try adjusting your search or selecting a different region."
        />
      )}

      {!isLoding && !error && countries.length > 0 && (
        <CountriesList data={countries} />
      )}
    </div>
  );
};

export default Home;
