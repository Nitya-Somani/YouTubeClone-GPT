import { useEffect } from "react";
import { options } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../../StoreSlices/movieSlice";

function usePopularMovies() {
  const dispatch = useDispatch();
  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        options
      );
      const jsonData = await response.json();

      dispatch(addPopularMovies(jsonData.results));
    } catch (error) {
      console.error("Error Fetching TMDB Movies", error);
      throw error;
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
}

export default usePopularMovies;
