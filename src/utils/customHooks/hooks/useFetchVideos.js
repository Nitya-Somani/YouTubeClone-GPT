import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../constants/constants";

const useFetchVideos = () => {
  const [videos, setVideos] = useState([]); 
  const [loading, setLoading] = useState(false); 
  useEffect(() => {
    getVideos(); 
  }, []);


  const getVideos = async () => {
    setLoading(true); 
    try {
      const data = await fetch(YOUTUBE_API);
      const jsonData = await data.json();
      setVideos(jsonData.items); 
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false); 
    }
  };

 
  const appendPreviousVideos = () => {
    setLoading(true); 
    setTimeout(() => {
      setVideos((prevVideos) => [...prevVideos, ...prevVideos]); 
      setLoading(false); 
    }, 1000); 
  };

  return { videos, appendPreviousVideos, loading };
};

export default useFetchVideos;
