
import {Error} from "../../../components/componentsIndex";
import {useTMDBsearchAPI} from "../hooksIndex";
import { addgptMovieResults } from "../../../StoreSlices/gptSlice";

const usehandleGPTSearchClick = async (targetSearch,dispatch) => {
  console.log(targetSearch);

  if (targetSearch === null || targetSearch === undefined) {
    return <Error/>;
  }
  //  *********************** For now I   am using Dummy gpt feel free to use your secret key for openAI gpt and uncomment out below code.********************

  // const gptQuery =
  //   "Act as a movie recommendation system and suggest some movies for the query:" +
  //   searchText.current.value +
  //   "only give me names of 6 movies,comma separted like the example result given ahead.Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gya";

  // const gptResults = await openai.chat.completions.create({
  //   messages: [{ role: "user", content: gptQuery }],
  //   model: "gpt-3.5-turbo",
  // });

  // if(!gptResults.choices) return <Error/>
  // const gptDummtResults = gptResults.choices?.[0]?.message?.content.split(",");

  /****************Dummy GPT Starts *********************/
  let gptDummyResults;

  

  if (targetSearch.includes("horror")) {
    gptDummyResults = "Raaz, Bhoot, 1920, Talaash, Ragini MMS, Pari";
  } else if (targetSearch.includes("family")) {
    gptDummyResults =
      "Hera Pheri, Andaz Apna Apna, Chupke Chupke, Bhool Bhulaiyaa, Coolie No. 1, Dhol";
  } else if (targetSearch.includes("action")) {
    gptDummyResults =
      "Dhoom,  Baahubali, Dilwale, Don, Die Hard, Terminator 2, Mad Max: Fury Road, John Wick, The Dark Knight";
  } else if (targetSearch.includes("comedy")) {
    gptDummyResults =
      "3 Idiots, Golmaal, Chup Chup Ke, Hera Pheri, Andaz Apna Apna, Dumb and Dumber, Superbad, Anchorman, Bridesmaids, Step Brothers";
  } else if (targetSearch.includes("drama")) {
    gptDummyResults =
      "Dil Chahta Hai, Kabhi Khushi Kabhie Gham, Lagaan, Swades, Taare Zameen Par, The Shawshank Redemption, The Godfather, Schindler's List, Forrest Gump, The Green Mile";
  } else if (targetSearch.includes("romantic")) {
    gptDummyResults =
      "Dilwale Dulhania Le Jayenge, Jab Tak Hai Jaan, The Notebook, Titanic, La La Land, Before Sunrise, Pride and Prejudice, A Walk to Remember, Casablanca, Pretty Woman";
  } else {

    gptDummyResults = "No specific genre matched. Try searching for horror, family, action, comedy, drama, or romantic movies!";
  }
  
/************************Dummy GPT ENDS *********************************************/
  
  const dummyGpt = gptDummyResults.split(",");
  const promiseALL =dummyGpt.map((movie)=> useTMDBsearchAPI(movie));
  const tmdbResults = await Promise.all(promiseALL);
  console.log(tmdbResults);

  dispatch(addgptMovieResults({gptMovies:gptDummyResults,tmdbRes:tmdbResults}));


 

};

export default usehandleGPTSearchClick;
