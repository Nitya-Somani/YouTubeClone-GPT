import { useEffect } from "react";
import { options } from "../../constants/constants";
import { useDispatch ,useSelector} from "react-redux";
import { addPopularMovies } from "../../../StoreSlices/movieSlice";

function usePopularMovies() {
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store)=>store.PopularMovies);
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
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    !PopularMovies && fetchData();
  }, []);
}

export default usePopularMovies;
