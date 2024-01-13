import React from "react";
import { useSelector } from "react-redux";
import { useMovieTrailor } from "../../../utils/customHooks/hooksIndex";

const VideoBackground = ({ movieID }) => {
  const trailorVideo = useSelector((store) => store.movies.MovieTrailor);
  useMovieTrailor(movieID);

  return (
    <div className=" w-full h-full z-0">
      <iframe
        className="w-full h-[90%] absolute aspect-video"
        src={`https://www.youtube.com/embed/${trailorVideo?.key}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&disablekb=1&cc_lang_pref=en`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
