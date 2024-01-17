import { useEffect } from "react";
import { options } from "../../constants/constants";
import { useDispatch ,useSelector} from "react-redux";
import { addTopRatedMovies } from "../../../StoreSlices/movieSlice";

function useTopRatedMovies() {
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector((store)=>store.TopRatedMovies);
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
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    !TopRatedMovies && fetchData();
  }, []);
}

export default useTopRatedMovies;
