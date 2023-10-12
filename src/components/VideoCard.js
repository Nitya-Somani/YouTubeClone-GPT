import React from "react";
import numeral from "numeral";
import { formatDistanceToNow } from "date-fns";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  if (!info || !info.snippet) {
    return null;
  }

  console.log(info);
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;
  const formattedViews = numeral(statistics.viewCount).format("0.0a");
  const publishedAt = new Date(snippet.publishedAt);
  const formattedDate = formatDistanceToNow(publishedAt, { addSuffix: true });

  return (
    <div
      className={`${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      } rounded-lg overflow-hidden shadow-lg  m-2 `}
      style={{ width: "24rem" }}
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full h-48  rounded-lg"
      />
      <div className="flex items-center p-3">
        <img
          src={thumbnails.default.url}
          alt={channelTitle}
          className="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
          <p
            className={
              theme ? "text-gray-400 text-sm" : "text-gray-900 text-sm"
            }
          >
            {channelTitle}
          </p>

          <div
            className={`flex items-center text-sm mt-1 ${
              theme ? "text-gray-400" : "text-gray-900"
            }`}
          >
            <span>{formattedViews}</span>
            <span className="mx-2">•</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
