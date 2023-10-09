import React from "react";
import { useSelector } from "react-redux";

const FilterButton = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const btnClass =`p-2 m-2 bg-gray-400 rounded text-black ${theme ? "bg-gray-800  text-white" : "bg-gray-300 text-black " }`;  
  return <div>
    <button className={btnClass}>Button1</button>

  </div>;
};

export default FilterButton;
