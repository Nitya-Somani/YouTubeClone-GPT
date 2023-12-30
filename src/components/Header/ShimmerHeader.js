import React from "react";
import {Loader} from "../componentsIndex";

const ShimmerHeader = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg p-2">
         <Loader/>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-1/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" text-gray-700 animate-pulse mr-4 p-2 h-12 w-12 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>

          <div className="animate-pulse w-20 h-12 rounded-full bg-gray-700" />
        </div>

        <div className="w-1/2">
          <div className="relative">
            <div
              className="animate-pulse h-11 bg-gray-700 rounded-l-full  "
              style={{ width: "91.666667%" }}
            />
            <div className="animate-pulse absolute right-0 top-0 h-full w-16 bg-gray-700 rounded-r-full" />
          </div>
        </div>

        <div>
          <div className="animate-pulse p-2">
            <div className="animate-pulse w-12 h-12 bg-gray-700 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShimmerHeader;
