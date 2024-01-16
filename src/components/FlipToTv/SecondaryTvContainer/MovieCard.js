import React from "react";
import { IMG_CDN_URL } from "../../../utils/constants/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 pr-2 ">
      <img src={IMG_CDN_URL + posterPath} alt="moviecard" />
    </div>
  );
};

export default MovieCard;
