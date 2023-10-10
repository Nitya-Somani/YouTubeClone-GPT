import React, { useEffect ,useState} from 'react'
import {YOUTUBE_API} from '../utils/constants';
import VideoCard from './VideoCard';
import { useSelector } from "react-redux";
//import ShimmerVideoCard from './ShimmerVideoCard';

const VideoContainer = () => {
  
  const theme = useSelector((store) => store.theme.isDarkTheme);

  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    getVideos();

  },[])

  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setVideos(jsonData.items);

  }
  // const shimmerCards = [];
  // for (let i = 0; i <= 15; i++) {
  //   shimmerCards.push(<ShimmerVideoCard key={i} />);
  // }

  return (
    <div className={`${theme ? "bg-gray-900 text-white" : "bg-white text-black"} flex flex-wrap mt-28`}>
       {videos.map((video)=><VideoCard key ={video.id} info ={video}/>)} 
      {/* {shimmerCards} */}

    </div>
  )
}

export default VideoContainer;