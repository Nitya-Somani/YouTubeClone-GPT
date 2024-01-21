import React from "react";
import { formatDistanceToNow } from "date-fns";
import { useSelector } from "react-redux";
import {
  FontAwesomeIcon,
  faTowerBroadcast,
} from "../../assests/FontAwesomeIcons/FontIcons";

const SearchVideoCard = ({ info }) => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  if (!info || !info.snippet) {
    return null;
  }
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const publishedAt = new Date(snippet.publishedAt);
  const formattedDate = formatDistanceToNow(publishedAt, { addSuffix: true });

  return (
    <div
      className={`${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      } rounded-lg overflow-hidden  m-2 `}
    >
      <div className="flex ">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-[24rem] h-48  rounded-lg"
        />
        <div className="mt-0 ml-5">
          <div>
            <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>

            <p
              className={
                theme ? "text-gray-400 text-sm" : "text-gray-900 text-sm"
              }
            >
              <span className="flex items-center ">
                <img
                  src={thumbnails.default.url}
                  alt={channelTitle}
                  className="w-9 h-9 rounded-full mr-2 mt-2"
                />{" "}
                &nbsp;&nbsp;{channelTitle}
              </span>
            </p>

            <div
              className={` items-center text-sm mt-2  ${
                theme ? "text-gray-400" : "text-gray-900"
              }`}
            >
              <span>{snippet.description}</span>

              <div className="mt-3">
                {snippet.liveBroadcastContent === "live" ? (
                  <span className="mr-2 bg-red-700 p-[4px] text-white rounded-lg ">
                    <FontAwesomeIcon icon={faTowerBroadcast} /> &nbsp;&nbsp;
                    {snippet.liveBroadcastContent.toUpperCase()}
                  </span>
                ) : null}

                <span className="mx-2">•</span>
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
