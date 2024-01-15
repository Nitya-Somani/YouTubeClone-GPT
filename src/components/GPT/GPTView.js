import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { useSelector } from "react-redux";
import {Loader} from "../componentsIndex"

const GPTView = () => {
  setTimeout(function() {
    <Loader/>
  }, 6000);
  
 
  const sideBarToggle = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const mainClass = `${
    sideBarToggle ? "absolute left-56 ml-8 bg-white " : "absolute left-12 ml-8"
  }`;

  return (
    <div   className={`${
      theme ? "bg-gray-900 text-white" : "bg-white text-black"
    } flex `}>
    <div  className={mainClass} >
<div className='mt-[60px] '> 
  <GPTSearchBar theme={theme} />
  <GPTMovieSuggestions />
</div>

    </div>
    </div>
  )
}

export default GPTView