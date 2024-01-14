import {  useEffect } from "react";
import { options } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { addUpcomingPlaying } from "../../../StoreSlices/movieSlice";

function useUpcomingMovies() {
  const dispatch = useDispatch();
  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        options
      );
      const jsonData = await response.json();

      
      dispatch(addUpcomingPlaying(jsonData.results));
     
    } catch (error) {
      console.error('Error Fetching TMDB Movies', error);
     throw error;
    }
  }
  useEffect(() => {
    fetchData();
  }, []);


}

export default useUpcomingMovies;
