import React from "react";
import { useSelector } from "react-redux";
import lang from "../../utils/constants/languageConstants";

const GPTSearchBar = ({ theme }) => {
  const inputBgColor = theme
    ? "bg-gray-700 border border-solid border-black"
    : "bg-white border border-solid border-black";

  const langKey = useSelector((store) => store.gpt.languageKey);

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
      <form className="flex justify-center align-middle items-center">
        <div
          className={`flex items-center ${inputBgColor} rounded-full overflow-hidden  w-[94.66%] focus-within:ring-2 focus-within:ring-black-800`}
        >
          <input
            type="text"
            placeholder={lang[langKey].gptPlaceHolder}
            className={`w-[95%] p-3 focus:outline-none  text-black`}
          />
          <span className={`px-4 cursor-pointer   `}>
            <button> 🚀</button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;
