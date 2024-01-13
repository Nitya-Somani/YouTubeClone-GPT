import React from 'react';
import { useSelector } from 'react-redux';
import {VideoBackground,VideoTitle} from '../../componentsIndex';

const MainTvContainer = () => {
  const movies = useSelector((store)=>store.movies?.NowPlaying);
  
  if(movies === null) return ;
  const mainMovie = movies[Math.floor(Math.random() * 20)];
  
  const {original_title,overview,id} = mainMovie;
    return (
    <>
    <div >
    <VideoBackground movieID ={id}/>
    <VideoTitle title ={original_title} overview ={overview}/>
    
    </div>
    
    </>
  )
}

export default MainTvContainer