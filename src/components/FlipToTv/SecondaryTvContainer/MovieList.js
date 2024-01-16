import React, { useState, useRef } from "react";
import { MovieCard } from "../../componentsIndex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  const location = useLocation();

  const isGPTPage = location.pathname === "/GPT";
  const itemsPerPage = isGPTPage ? 6 : 7;

  const [currentPage, setCurrentPage] = useState(0);
  const totalPageCount = Math.ceil(movies.length / itemsPerPage);

  const prevSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage - 1 < 0 ? totalPageCount - 1 : prevPage - 1
    );
  };

  const nextSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 === totalPageCount ? 0 : prevPage + 1
    );
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleMovies = movies.slice(startIndex, startIndex + itemsPerPage);

  const firstCardRef = useRef(null);
  const lastCardRef = useRef(null);
  const widthView = isGPTPage ? "w-[1190px]" : "w-[1490px]";
  return (
    <div>
      {isGPTPage ? (
        <h1 className="text-lg  m-4 ">{title}</h1>
      ) : (
        <h1 className="text-lg text-white m-4 ">{title}</h1>
      )}

      <div className="relative">
        <div className={`flex overflow-hidden ${widthView} mx-4`}>
          {visibleMovies.map((moviecard, index) => (
            <div
              key={moviecard.id}
              ref={
                index === 0
                  ? firstCardRef
                  : index === visibleMovies.length - 1
                  ? lastCardRef
                  : null
              }
              className={`transform transition-transform duration-300`}
            >
              <MovieCard posterPath={moviecard?.poster_path} />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute  text-white top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-30 p-3 rounded-[50%]"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute text-white top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-30 p-3 rounded-[50%]"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
