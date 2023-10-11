import React, { useEffect ,useState} from 'react'
import {YOUTUBE_API} from '../utils/constants';
import VideoCard from './VideoCard';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ShimmerVideoContainer from './ShimmerVideoContainer';



const VideoContainer = () => {
  
  const theme = useSelector((store) => store.theme.isDarkTheme);

  const [videos,setVideos] = useState(null);

  useEffect(()=>{
    getVideos();

  },[])

  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setVideos(jsonData.items);

  }

   if(videos === null ) return <ShimmerVideoContainer/>;

  return (
    <div className={`${theme ? "bg-gray-900 text-white" : "bg-white text-black"} flex flex-wrap mt-28`}>
       {videos.map((video)=>(
       <Link to = {"/watch?v="+video.id}>
          <VideoCard key ={video.id} info ={video}/>
          </Link>))} 
   
  
    </div>
  )
}

export default VideoContainer;