import { useState } from "react";
import { getMinimizedNum } from "../../utils/helperFunctions/watchContainerHelper";
import { useSelector } from "react-redux";
import {
  Dark_Like_Thumb,
  Dark_Unlike_Thumb,
  Dark_User_Icon,
  Light_Like_Thumb,
  Light_Unlike_Thumb,
  Light_User_Icon,
} from "../../utils/constants/constants";

const Btn = ({ title }) => {
  return (
    <button className=" bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-gray-200 transition-all duration-200 ease-linear rounded-full px-4 py-1.5">
      {title}
    </button>
  );
};

const VideoDetails = ({ details }) => {
  const theme = useSelector((store) => store.app.theme);
  const [showDetails, setShowDetails] = useState(false);
  const { title, likes, descArray, publishedDate, viewCount, channelTitle } =
    details;

  return (
    <div className="mt-2.5 ">
      <h2 className="text-base sm:text-xl font-semibold">{title}</h2>

      <div className="font-semibold mt-1.5 sm:mt-2.5 gap-x-2 sm:gap-x-2.5 text-sm sm:text-base items-center flex-wrap gap-y-3 flex">
        <img
          src={theme === "light" ? Light_User_Icon : Dark_User_Icon}
          alt="User"
          className="h-8 cursor-pointer"
        />
        <div className="mr-3 sm:mr-5">
          <h3 className=" cursor-pointer">{channelTitle}</h3>
          <p className="text-xs sm:text-xs dark:text-gray-400 text-gray-600">
            123K subscribers
          </p>
        </div>
        <button className="border hover:bg-gray-200 transition-all duration-200 ease-linear dark:border-neutral-800 dark:hover:bg-neutral-800 border-gray-200 rounded-full px-4 py-1.5">
          Join
        </button>
        <Btn title={"Subscribe"} />
        <button className="flex bg-gray-100 dark:bg-neutral-800 rounded-full">
          <span className="flex px-4 py-1.5 border-r border-gray-200 dark:border-neutral-700 border-solid gap-x-2.5 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all duration-200 ease-linear rounded-l-full">
            <img
              src={theme === "light" ? Light_Like_Thumb : Dark_Like_Thumb}
              alt="Like"
              className="h-4 sm:h-5"
            />
            <span>{likes}</span>
          </span>
          <span className="pl-3 pr-4 py-1.5 flex hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-r-full transition-all duration-200 ease-linear">
            <img
              src={theme === "light" ? Light_Unlike_Thumb : Dark_Unlike_Thumb}
              alt="Unlike"
              className="h-5 sm:h-6"
            />
          </span>
        </button>
        <Btn title={"Share"} />
        <Btn title={"Download"} />
        <Btn title={"Clip"} />
      </div>
      <div className="w-full bg-gray-100 dark:bg-neutral-800 mt-4 rounded-xl p-2 sm:p-3">
        <div className="text-xs sm:text-sm font-medium mb-1 sm:mb-0">
          <span className="mr-2.5">
            {showDetails ? viewCount : getMinimizedNum(viewCount)} views
          </span>
          <span>{publishedDate}</span>
        </div>
        <div className="w-full text-sm sm:text-[15px]">
          {showDetails ? (
            descArray.map((element) => {
              if (element !== "") {
                return (
                  <p key={element} className="mb-3 sm:mb-6">
                    {element}
                  </p>
                );
              }
              return null;
            })
          ) : (
            <div>
              <p>
                {descArray?.[0].length < 160
                  ? descArray?.[0]
                  : descArray?.[0].slice(0, 160)}{" "}
                <span
                  className="font-bold cursor-pointer hover:opacity-90 transition-opacity duration-100 ease-linear"
                  onClick={() => setShowDetails(true)}
                >
                  ...more
                </span>
              </p>
            </div>
          )}
        </div>
        {showDetails && (
          <div
            className="font-bold text-sm sm:text-[15px] cursor-pointer hover:opacity-90 transition-opacity duration-100 ease-linear"
            onClick={() => setShowDetails(false)}
          >
            See less
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoDetails;