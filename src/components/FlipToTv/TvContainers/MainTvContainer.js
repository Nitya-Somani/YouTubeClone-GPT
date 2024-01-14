import React from "react";

import { VideoBackground, VideoTitle } from "../../componentsIndex";

const MainTvContainer = ({ movies }) => {
  const mainMovie = movies[Math.floor(Math.random() * 20)];

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoBackground movieID={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainTvContainer;
