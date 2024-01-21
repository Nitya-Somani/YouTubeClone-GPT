// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import { closeMenu } from "../../StoreSlices/appSlice";
// import {VideoDetails} from "../componentsIndex";
// import {useGetVideoById} from "../../utils/customHooks/hooksIndex"
// import { getMinimizedNum } from "../../utils/helperFunctions/watchContainerHelper";

// const Watch = () => {
//   const paramsQuery = useSearchParams();
//   const dispatch = useDispatch();
//   const [searchParams] = useSearchParams();
//   const id = searchParams.get("v");
//   const videoDetails = useGetVideoById(id);
//   useEffect(() => {
//     dispatch(closeMenu());
//   }, []);

//   if (!videoDetails) return;

//   const { snippet, statistics } = videoDetails;
//   const { likeCount, viewCount,/**  commentCount*/ } = statistics;
//   const { publishedAt, description, title, channelTitle } = snippet;
//   const descArray = description.split("\n\n");
//   const publishedDate = publishedAt.split("T")[0];

  
//   const likes = getMinimizedNum(likeCount);
//   const details = {
//     title,
//     likes,
//     viewCount,
//     descArray,
//     publishedDate,
//     channelTitle,
//   };



//   return (
//     <div style={{ margin: "5.5rem" }}>
//       <iframe
//         width="1000"
//         height="500"
//         src={"https://www.youtube.com/embed/" + paramsQuery[0].get("v")}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//       ></iframe>
//         <VideoDetails details={details} />
//       {/* <Comments/> */}
//           </div>
//   );
// };

// export default Watch;
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../../StoreSlices/appSlice";

const Watch = () => {
  const paramsQuery = useSearchParams();
  const videoId = paramsQuery[0].get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
   
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ margin: "5.5rem" }}>
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}` }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
