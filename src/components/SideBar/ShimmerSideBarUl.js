import React from "react";

const ShimmerSideBarUl = () => {
  return (
    <div>
      <ul className="space-y-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded"
          >
            <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
            <div className="w-1/2 h-8 bg-gray-700 rounded"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShimmerSideBarUl;
