import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {FontAwesomeIcon,faVideo,faTv,faBolt,faHome} from '../../assests/FontAwesomeIcons/FontIcons'


const CollapseSideBar = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const containerClasses = `  bg-${theme ? "gray-900" : "slate-50"} text-${
    theme ? "white" : "black"
  }`;
  const listItemClasses = `flex flex-col items-center space-x-4 cursor-pointer  ${
    theme ? "hover:bg-gray-800" : "hover:bg-gray-300"
  } p-2 rounded h-16`;

  return (
    <aside
      className={` fixed top-16  z-50 w-20 p-1 h-screen  top-18 left-0 overflow-y-auto ${containerClasses}`}
    >
      <ul className="space-y-2">
        <Link to="/">
          {" "}
          <li className={listItemClasses}>
            <div className="flex items-center flex-col m-2">
              <FontAwesomeIcon className="text-xl" icon={faHome} />
              <span className="text-xs mt-2 text-center">Home</span>
            </div>
          </li>
        </Link>

        <li className={listItemClasses}>
          <div className="flex items-center flex-col m-1">
            <FontAwesomeIcon className="text-xl" icon={faBolt} />
            <span className="text-xs mt-2 text-center">Shorts</span>
          </div>
        </li>

        <li className={listItemClasses}>
          <div className="flex items-center flex-col m-1">
            <FontAwesomeIcon className="text-xl" icon={faTv} />
            <span className="text-xs mt-2 text-center">Subscriptions</span>
          </div>
        </li>

        <li className={listItemClasses}>
          <div className="flex items-center flex-col m-1">
            <FontAwesomeIcon className="text-xl" icon={faVideo} />
            <span className="text-xs mt-2 text-center">Videos</span>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default CollapseSideBar;
