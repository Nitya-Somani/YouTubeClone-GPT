import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../StoreSlices/appSlice";
import { toggleTheme } from "../StoreSlices/themeSlice";
import useShowSuggestion from "../utils/useShowSuggestions";
import { handleArrowNavigation, handleSuggestionSelection } from "../utils/SuggestionsHelpers";

const Header = () => {
  const {
    searchQuery,
    suggestions,
    showSuggestions,
    handleSearchQueryChange,
    hideSuggestions,
  } = useShowSuggestion();
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

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
      handleSuggestionSelection(suggestions[selectedSuggestionIndex], handleSearchQueryChange, hideSuggestions);
    }
  };

  useEffect(() => {
    setSelectedSuggestionIndex(-1);
  }, [suggestions]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-lg p-2 ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-slate-50 text-black"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-1/6">
          <button
            className="mr-4 p-2 h-12 focus:outline-none"
            onClick={toggleMenuHandler}
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-400" />
          </button>
          <a href="https://youtube-clone-viewtube.netlify.app/">
            <img
              className="h-12"
              src={isDarkTheme ? "/youTube-Header-logo.png" : "/youTubeLogo.jpg"}
              alt="youtube-logo"
            />
          </a>
        </div>

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
                      className={`${
                        suggestionListItemClassName
                      } py-1 px-3 cursor-pointer ${
                        index === selectedSuggestionIndex ? "bg-gray-400" : ""
                      }`}
                      onClick={() => {
                        handleSuggestionSelection(s, handleSearchQueryChange, hideSuggestions);
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

        <div className="flex items-center">
          <button
            className={`rounded-full p-2 ${isDarkTheme ? "bg-gray-700" : "bg-gray-400"}`}
            onClick={toggleThemeHandler}
          >
            {isDarkTheme ? "DARK🌛" : "LIGHT ⛅"}
          </button>
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
