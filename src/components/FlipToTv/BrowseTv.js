import React from "react";
import {useNowPlayingMovies,usePopularMovies,useTopRatedMovies,useUpcomingMovies} from "../../utils/customHooks/hooksIndex";
import { MainTvContainer, SecondryTvContainer,Loader } from "../componentsIndex";
import { useSelector } from 'react-redux';

const BrowseTv = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  const movies = useSelector((store)=>store.movies?.NowPlaying);
  const popularmovies = useSelector((store)=>store.movies?.PopularMovies);
  const TopRatedMovies = useSelector((store)=>store.movies?.TopRatedMovies);
  const upcomingMovies = useSelector((store)=>store.movies?.UpcomingMovies);
  
  if(movies === null ||popularmovies === null ||TopRatedMovies === null ||upcomingMovies === null) return <Loader/> ;

  return (
    
  <div>
   <MainTvContainer  movies ={movies}/>
  <SecondryTvContainer /> 
</div>

     
    
  );
};

export default BrowseTv;
