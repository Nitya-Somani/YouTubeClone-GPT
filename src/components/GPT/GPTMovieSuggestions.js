import React from "react";
import { useSelector } from "react-redux";
import { Loader, MovieList } from "../componentsIndex";

const GPTMovieSuggestions = () => {
  const { gptMovies, tmdbRes } = useSelector((store) => store.gpt);
  const theme = useSelector((store) => store.theme);
  console.log(gptMovies, "gptmovies");
  
  console.log(tmdbRes, "tmbres");
  if (!gptMovies && theme.isDarkTheme) return <Loader />;
    
    /*START */
    // Comment out the below code If you are using OpenAI 
    const gptMoviesArray = gptMovies.split(',').map((movie) => movie.trim());
    console.log(gptMoviesArray, "gptMoviesArray");
    /*End */
  return (
    <div className={`p-2 font-bold text-2xl ${theme.isDarkTheme ? 'bg-gray-900 text-white ' : 'bg-white text-black'}`}>
      {gptMoviesArray.map((gptMovie,index) => (
        <MovieList 
        key={gptMovie} 
        title={gptMovie} 
        movies={tmdbRes[index]} />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
