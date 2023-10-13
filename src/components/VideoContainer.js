import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShimmerVideoContainer from "./ShimmerVideoContainer";
import useFetchVideos from "../utils/useFetchVideos";

const VideoContainer = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);

  const videos = useFetchVideos();

  if (videos === null) return <ShimmerVideoContainer />;

  return (
    <div
      className={`${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      } flex flex-wrap mt-28`}
    >
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
