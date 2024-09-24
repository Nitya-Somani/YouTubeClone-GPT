import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFetchVideos } from "../../utils/customHooks/hooksIndex";
import { VideoCard, ShimmerVideoContainer } from "../componentsIndex";

const VideoContainer = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const filterBtn = useSelector((store) => store.search.filterbtn);
  const filterbtnSearch = useSelector((store) => store.search.filterbtnSearch);

 
  const { videos, appendPreviousVideos, loading } = useFetchVideos();
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight  && !isFetching && !loading) {
      setIsFetching(true);
      appendPreviousVideos(); 
      setIsFetching(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, [isFetching, loading]);

  if (!videos.length) return <ShimmerVideoContainer />;

  const filteredVideos = filterBtn ? filterbtnSearch : videos;

  return (
    <div
      className={`${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      } flex flex-wrap mt-[60px]`}
    >
      {filteredVideos?.map((video, index) =>
        filterBtn ? (
          <Link key={`${video.id}-${index}`} to={"/watch?v=" + video.id.videoId}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ) : (
          <Link key={`${video.id}-${index}`} to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        )
      )}
      
   
      {loading && <ShimmerVideoContainer />} 
    </div>
  );
};

export default VideoContainer;
