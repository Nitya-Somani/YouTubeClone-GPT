import { useEffect, useState } from "react";
import { YOUTUBE_API } from "./constants";

const useFetchVideos = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const jsonData = await data.json();
      setVideos(jsonData.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return videos;
};

export default useFetchVideos;
