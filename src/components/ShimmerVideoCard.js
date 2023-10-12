import React from "react";

const ShimmerVideoCard = () => {
  return (
    <div className="relative">
      <div
        className="bg-gray-200 rounded-lg overflow-hidden shadow-lg m-2 animate-shimmer"
        style={{ width: "24rem", height: "20rem" }}
      >
        <div className="animate-pulse bg-gray-400 w-full h-48 rounded-lg"></div>
        <div className="flex items-center p-3 animate-shimmer">
          <div className="w-12 h-12 rounded-full bg-gray-400 mr-2 animate-pulse"></div>
          <div>
            <h3 className="text-lg font-semibold line-clamp-2 bg-gray-400 animate-pulse rounded ">
              &nbsp;
            </h3>
            <p
              className="text-gray-400 text-sm bg-gray-400 animate-pulse rounded mt-1"
              style={{ width: "18rem" }}
            >
              &nbsp;
            </p>
            <div className="flex items-center text-sm mt-1 text-gray-400">
              <span
                className="bg-gray-400 animate-pulse rounded"
                style={{ width: "9rem" }}
              >
                &nbsp;
              </span>
              <span className="mx-2">•</span>
              <span
                className="bg-gray-400 animate-pulse rounded "
                style={{ width: "9rem" }}
              >
                &nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;
