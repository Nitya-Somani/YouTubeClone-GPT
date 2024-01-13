import React from "react";
import {useNowPlayingMovies} from "../../utils/customHooks/hooksIndex";
import { MainTvContainer, SecondryTvContainer } from "../componentsIndex";

const BrowseTv = () => {
  useNowPlayingMovies();

  return (
    <>
    <div>
       <MainTvContainer />
      <SecondryTvContainer />
    </div>
     
    </>
  );
};

export default BrowseTv;
