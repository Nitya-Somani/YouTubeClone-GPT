import { useEffect } from "react";
import { options } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../../StoreSlices/movieSlice";

function useTopRatedMovies() {
  const dispatch = useDispatch();
  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        options
      );
      const jsonData = await response.json();

      dispatch(addTopRatedMovies(jsonData.results));
    } catch (error) {
      console.error("Error Fetching TMDB Movies", error);
      throw error;
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
}

export default useTopRatedMovies;
