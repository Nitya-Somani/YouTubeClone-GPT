import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CollapseSideBar from "./CollapseSideBar";

const Watch = () => {
  const paramsQuery = useSearchParams();
 

  

  return (
    <div style={{margin:"5.5rem"}}>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+paramsQuery[0].get('v')}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
