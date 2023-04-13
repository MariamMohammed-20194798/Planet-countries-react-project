import { useState } from "react";
import classes from "./FilterByRegion.module.css";
const FilterByRegion = ({ onFullURL, blackTheme }) => {
  const [selectedOption, setSelectedData] = useState("");
  const filter = blackTheme ? classes.filterBlack : classes.filterWhite;
  const dropdownHandler = (event) => {
    setSelectedData(event.target.value);
    let region = event.target.value;
    onFullURL(`region/${region}`);
  };
  return (
    <div className={filter}>
      <div className={classes.filtercontrol}>
        <select value={selectedOption} onChange={dropdownHandler}>
          <option value="" hidden>
            Fillter By Region
          </option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
export default FilterByRegion;
