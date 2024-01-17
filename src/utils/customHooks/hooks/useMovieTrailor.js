import  { useEffect } from "react";
import { options } from "../../../utils/constants/constants";
import { useDispatch ,useSelector} from "react-redux";
import {addTrailor} from '../../../StoreSlices/movieSlice'

const useMovieTrailor = (movieID) => {
    const dispatch = useDispatch();
    const useTrailorRedux = useSelector((store)=>store.MovieTrailor);
    
  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
        options
      );
      const jsonData = await response.json();
      const filterData = jsonData.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length
        ? filterData[Math.floor(Math.random() * filterData.length)]
        : jsonData.results[Math.floor(Math.random() * jsonData.results.length)];
        dispatch(addTrailor(trailer));

    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };
// eslint-disable-next-line no-unused-vars
  useEffect(() => {
    
    !useTrailorRedux &&  getMovieVideos();
  }, []);

}

export default useMovieTrailor