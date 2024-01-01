import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FilterButton } from "../componentsIndex";
import {mapButtons} from "../../utils/constants/constants"

const itemsPerPage = 11;

const ButtonCarousel = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const [currentPage, setCurrentPage] = useState(0);

  const totalButtons = mapButtons.length;
  const totalPages = Math.ceil(totalButtons / itemsPerPage);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + direction;
      return Math.max(0, Math.min(nextPage, totalPages - 1));
    });
  };

  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const containerStyle = `flex top-16 ${
    theme ? "bg-gray-900 text-white" : "bg-white text-black"
  } relative overflow-x-hidden`;

  const arrowStyle = `absolute top-0 bottom-0 flex items-center ${
    theme ? "text-white" : "text-black"
  } cursor-pointer`;

  return (
    <div id="buttonCarousel" className={containerStyle}>
      {currentPage > 0 && (
        <button
          className={`${arrowStyle} left-0`}
          onClick={() => handlePageChange(-1)}
        >
          {"←"}
        </button>
      )}
      <div className="flex space-x-2 overflow-x-auto" style={{ overflowX: "hidden" }}>
        {mapButtons.slice(startIdx, endIdx).map((buttonName) => (
          <div key={buttonName} className="p-2 flex-shrink-0">
            <FilterButton name={buttonName} />
          </div>
        ))}
      </div>
      {currentPage < totalPages - 1 && (
        <button
          className={`${arrowStyle} right-5`}
          onClick={() => handlePageChange(1)}
        >
          {"→"}
        </button>
      )}
    </div>
  );
};

export default ButtonCarousel;
