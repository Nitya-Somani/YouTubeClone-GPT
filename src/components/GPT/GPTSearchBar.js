import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../../utils/constants/languageConstants";
import openai from "../../utils/openAI/openAI";
import {Error} from "../componentsIndex"

const GPTSearchBar = ({ theme }) => {
  const inputBgColor = theme
    ? "bg-gray-700 border border-solid border-black"
    : "bg-white border border-solid border-black";

  const langKey = useSelector((store) => store.gpt.languageKey);
  const searchText = useRef(null);
  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      "only give me names of 6 movies,comma separted like the example result given ahead.Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices) return <Error/>
    const gptDummyResults = "Hera Pheri, Andaz Apna Apna, Chupke Chupke, Bhool Bhulaiyaa, Coolie No. 1, Dhol";
    const dummyGpt = gptDummyResults.split(",");
    

  };

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
            <button onClick={handleGPTSearchClick}> 🚀</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GPTSearchBar;
