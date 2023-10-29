import React from "react";
import FilterButton from "./FilterButton";
import { useSelector } from "react-redux";

const mapButtons = ["All","JavaScript","Music","Sports","News","Comedy","Live","T-series","Game Shows","DataBase","Algorithms","cooking","movies","webseries","➤"];

const ButtonList = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div className={`fixed top-16     flex ${theme ? "bg-gray-900 text-white" : "bg-white text-black"}`} style={{width:"92rem"}}>
    {mapButtons.map((buttonName,index)=>(
      <FilterButton key={index} name={buttonName}/>  
    ))}
    
    </div>
  );
};

export default ButtonList;
