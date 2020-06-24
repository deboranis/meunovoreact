  
import React from "react";
import "./FilterOptions.css";

const FilterOptions = ({ filters, onClick }) => {
  return (
    <div className="filterOptions--container">
      {filters.map(item => {
        return (
          <div className="filterOptions--filter" onClick={onClick}>
            <h3 id={item}>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;