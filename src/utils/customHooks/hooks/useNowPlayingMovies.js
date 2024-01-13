import { useState, useEffect } from "react";
import { options } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../../../StoreSlices/movieSlice";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        options
      );
      const jsonData = await response.json();

      
      dispatch(addNowPlaying(jsonData.results));
     
    } catch (error) {
      console.error('Error Fetching TMDB Movies', error);
     throw error;
    }
  }
  useEffect(() => {
    fetchData();
  }, []);


}

export default useNowPlayingMovies;
