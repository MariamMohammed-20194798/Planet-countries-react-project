import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import classes from "./FilterByRegion.module.css";

const REGIONS = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const DEFAULT_REGION = "africa";

const FilterByRegion = ({ onFullURL }) => {
  const [selectedOption, setSelectedOption] = useState(DEFAULT_REGION);

  const dropdownHandler = (event) => {
    const region = event.target.value;
    setSelectedOption(region);
    onFullURL(`region/${region}`);
  };

  return (
    <div className={classes.filter}>
      <label htmlFor="region-filter" className="sr-only">
        Filter by region
      </label>
      <HiOutlineChevronDown className={classes.chevron} aria-hidden="true" />
      <select
        id="region-filter"
        className={classes.select}
        value={selectedOption}
        onChange={dropdownHandler}
      >
        {REGIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByRegion;
