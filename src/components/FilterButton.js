import React from "react";
import { useSelector } from "react-redux";

const FilterButton = (props) => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const btnClass = `p-2 m-2 bg-gray-200 rounded text-black ${
    theme ? "bg-gray-800  text-white" : "bg-gray-200 text-black "
  }`;
  return (
    <div>
      <button className={btnClass}>{props.name}</button>
    </div>
  );
};

export default FilterButton;
