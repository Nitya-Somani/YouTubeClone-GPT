import React, { useRef } from "react";
import { useSelector ,useDispatch} from "react-redux";
import lang from "../../utils/constants/languageConstants";
import {usehandleGPTSearchClick} from "../../utils/customHooks/hooksIndex";

const GPTSearchBar = ({ theme }) => {
  const inputBgColor = theme
    ? "bg-gray-700 border border-solid border-black"
    : "bg-white border border-solid border-black";

  const langKey = useSelector((store) => store.gpt.languageKey);
  const searchText = useRef(null);

  const dispatch = useDispatch();

  return (
    <div
      className={`p-4 md:p-8  ${
        theme ? "text-white bg-gray-900" : "text-black bg-white"
      }`}
    >
      <br />
      <h1 className="text-2xl md:text-4xl mb-4 font-semibold mx-auto flex justify-center align-middle items-center">
        {lang[langKey].title} 🚀
      </h1>
      <br />

      <div>
        <p>{lang[langKey].gptDefination}</p>
      </div>

      <br />
      <br />
      <div className="flex justify-center align-middle items-center">
        <div
          className={`flex items-center ${inputBgColor} rounded-full overflow-hidden  w-[94.66%] focus-within:ring-2 focus-within:ring-black-800`}
        >
          <input
            type="text"
            placeholder={lang[langKey].gptPlaceHolder}
            className={`w-[95%] p-3 focus:outline-none  text-black`}
            ref={searchText}
          />
          <span className={`px-4 cursor-pointer   `}>
            <button onClick={()=>usehandleGPTSearchClick(searchText.current.value,dispatch)}> 🚀</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GPTSearchBar;
