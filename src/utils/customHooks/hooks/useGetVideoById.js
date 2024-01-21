import { useEffect } from "react";
import { useSelector } from "react-redux";

const useGetVideoById = (id) => {
  const popularVideos = useSelector((store) => store?.video?.popularVideos);

  const video = popularVideos.filter((video) => video?.id === id)[0];

  useEffect(() => {
    document.title = "Youtube-watch";
  }, []);

  if (!video) return null;

  const { snippet, statistics } = video;
  return { snippet, statistics };
};

export default useGetVideoById;
