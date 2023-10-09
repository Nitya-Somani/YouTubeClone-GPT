import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {Link} from "react-router-dom";

const Header = () => {

  const dispatch = useDispatch();
  const toggleHandlerMenu = ()=>{
    dispatch(toggleMenu())

  }

  return (
    <header className="bg-gray-900 text-white shadow-lg p-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-1/6">
          <button className="mr-4 p-2 h-12 focus:outline-none" onClick={()=>toggleHandlerMenu()}>
            <FontAwesomeIcon icon={faBars} className="text-gray-400" />
          </button>
          <Link to ="/">
          <img
            className="h-12"
            src="/youTube-Header-logo.png"
            alt="youtube-logo"
          />
          </Link>
        </div>

        <div className="w-1/2">
          <div className="relative">
            <input
              type="text"
              style={{ width: "94.666667%" }}
              className=" h-11 px-4 py-2 border border-r-0 border-gray-600 rounded-l-full focus:outline-none bg-gray-800 text-white"
              placeholder="Search"
            />
            <button
              id="search-icon-legacy"
              className="absolute right-0 top-0 h-full px-3 py-2.5 bg-gray-600 rounded-r-full"
              aria-label="Search"
            >
              🔍
            </button>
          </div>
        </div>

        <div>
          <button className="p-2 focus:outline-none">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-400 p-2 text-xl border border-gray-600 rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
