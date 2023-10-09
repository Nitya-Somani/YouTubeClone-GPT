import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBolt, faTv, faVideo } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

const CollapseSideBar = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const containerClasses = `  bg-${theme ? 'gray-900' : 'slate-50'} text-${theme ? 'white' : 'black'}`;
  const listItemClasses = `flex flex-col items-center space-x-4 cursor-pointer  ${theme ? "hover:bg-gray-800" : "hover:bg-gray-300"} p-2 rounded h-16`;

  return (
    <aside className={`w-20 p-1 h-screen fixed top-18 left-0 overflow-y-auto ${containerClasses}`}>
      <ul className="space-y-2">
        <li className={listItemClasses}>
          <div className="flex items-center flex-col m-2">
            <FontAwesomeIcon className="text-xl" icon={faHome} />
            <span className='text-xs mt-2 text-center'>Home</span>
          </div>
        </li>

        <li className={listItemClasses}>
          <div className="flex items-center flex-col m-1">
            <FontAwesomeIcon className="text-xl" icon={faBolt} />
            <span className='text-xs mt-2 text-center'>Shorts</span>
          </div>
        </li>

        <li className={listItemClasses}>
          <div className="flex items-center flex-col m-1">
            <FontAwesomeIcon className="text-xl" icon={faTv} />
            <span className='text-xs mt-2 text-center'>Subscriptions</span>
          </div>
        </li>

        <li className={listItemClasses}>
          <div className="flex items-center flex-col m-1">
            <FontAwesomeIcon className="text-xl" icon={faVideo} />
            <span className='text-xs mt-2 text-center'>Videos</span>
          </div>
        </li>
      </ul>
    </aside>
  )
}

export default CollapseSideBar;
