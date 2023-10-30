import React from "react";
import useShowSuggestion from "../utils/useShowSuggestions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {handleArrowNavigation,handleSuggestionSelection} from "../utils/SuggestionsHelpers";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchSuggestions = () => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const {
    searchQuery,
    suggestions,
    showSuggestions,
    handleSearchQueryChange,
    hideSuggestions,
  } = useShowSuggestion();

  useEffect(() => {
    setSelectedSuggestionIndex(-1);
  }, [suggestions]);

  const searchInputClassName = isDarkTheme
    ? "bg-gray-800 text-white border-gray-600"
    : "bg-white text-black border-gray-400";

  const suggestionClassName = isDarkTheme
    ? "bg-gray-900 text-white border-gray-700"
    : "bg-slate-50 text-black border-gray-100";

  const suggestionListItemClassName = isDarkTheme
    ? "hover:bg-gray-600"
    : "hover:bg-gray-200";

  const handleKeyDown = (e) => {
    handleArrowNavigation(e, suggestions, setSelectedSuggestionIndex);
    if (e.key === "Enter" && selectedSuggestionIndex >= 0) {
      handleSuggestionSelection(
        suggestions[selectedSuggestionIndex],
        handleSearchQueryChange,
        hideSuggestions
      );
    }
  };

  return (
    <div className="w-1/2">
      <div className="relative">
        <input
          type="text"
          style={{ width: "94.666667%" }}
          className={`h-11 px-4 py-2 border border-r-0 rounded-l-full focus:outline-none ${searchInputClassName}`}
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => handleSearchQueryChange(e.target.value)}
          onFocus={() => handleSearchQueryChange(searchQuery)}
          onBlur={hideSuggestions}
          onKeyDown={handleKeyDown}
        />
        <button
          id="search-icon-legacy"
          className={`absolute right-0 top-0 h-full px-3 py-2.5 border rounded-r-full ${searchInputClassName}`}
          aria-label="Search"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {showSuggestions && (
          <div
            className={`fixed ${suggestionClassName} mt-1 py-2 border rounded-lg z-100 w-[44.5rem] shadow-lg`}
          >
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={s}
                  className={`${suggestionListItemClassName} py-1 px-3 cursor-pointer ${
                    index === selectedSuggestionIndex ? "bg-gray-400" : ""
                  }`}
                  onClick={() => {
                    handleSuggestionSelection(
                      s,
                      handleSearchQueryChange,
                      hideSuggestions
                    );
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} /> &nbsp;&nbsp;{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSuggestions;
