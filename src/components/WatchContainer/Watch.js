import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../../StoreSlices/appSlice";
import { CommBase ,ChatBox} from "../componentsIndex";

const Watch = () => {
  const paramsQuery = useSearchParams();
  const videoId = paramsQuery[0].get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ margin: "5.5rem" }} >
     <div className="flex">
      <div>
      <iframe
        width="1000"
        height="580"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div className="w-full ">
      <ChatBox/>
    </div>
    </div>
      <CommBase />
    </div>
  );
};

export default Watch;
