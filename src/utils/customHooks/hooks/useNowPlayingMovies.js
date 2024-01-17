import {  useEffect } from "react";
import { options } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../../../StoreSlices/movieSlice";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  const nowPlayingRedux = useSelector((store)=>store.NowPlaying);

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
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    !nowPlayingRedux && fetchData();
  }, []);


}

export default useNowPlayingMovies;
