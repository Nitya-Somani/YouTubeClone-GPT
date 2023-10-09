import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faFootball, faFire, faTv, faVideo, faBell, faHistory, faPlay, faClock, faThumbsUp, faChevronDown,  faStream, faGamepad,  faMusic, faFilm, faNewspaper, faTshirt, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useSelector } from "react-redux";
import CollapseSideBar from "./CollapseSideBar";

const SideBar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  
  if (!isMenuOpen) {
    return <CollapseSideBar />;
  }
  

  return (
    <aside className="bg-gray-900 text-white w-64 p-4 h-screen fixed top-18 left-0 overflow-y-auto">
     
      <ul className="space-y-2">
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faFire} />
          <span>Trending</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
        <FontAwesomeIcon icon={faTv} />
          <span>Subscriptions</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faVideo} />
          <span>Library</span>
        </li>
      </ul>
      <hr className="my-4 border-t border-gray-800" />
      <ul className="space-y-2">
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faBell} />
          <span>History</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faHistory} />
          <span>Your videos</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faPlay} />
          <span>Watch later</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faClock} />
          <span>History</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>Liked videos</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faChevronDown} />
          <span>Show more</span>
        </li>
      </ul>
      <hr className="my-4 border-t border-gray-800" />
      <div className="text-gray-500">SUBSCRIPTIONS</div>
      <ul className="space-y-2">
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faStream} />
          <span>YouTube Premium</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faGamepad} />
          <span>Gaming</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover-bg-gray-800 p-2 rounded">
        <FontAwesomeIcon icon={faFootball} />
          <span>Sports</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover-bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faMusic} />
          <span>Music</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover-bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faFilm} />
          <span>Movies</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover-bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faNewspaper} />
          <span>News</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover-bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faTshirt} />
          <span>Fashion & Beauty</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover-bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faMicrophone} />
          <span>Podcasts</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover-bg-gray-800 p-2 rounded">
          <FontAwesomeIcon icon={faChevronDown} />
          <span>Show 38 more</span>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
