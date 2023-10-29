import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../StoreSlices/appSlice";
import { toggleTheme } from "../StoreSlices/themeSlice";
import useShowSuggestion from "../utils/useShowSuggestions";

const Header = () => {
  const {
    searchQuery,
    suggestions,
    showSuggestions,
    handleSearchQueryChange,
    hideSuggestions,
  } = useShowSuggestion();
  const dispatch = useDispatch();
  const toggleHandlerMenu = () => {
    dispatch(toggleMenu());
  };
  const toggleDay = () => {
    dispatch(toggleTheme());
  };
  const theme = useSelector((store) => store.theme.isDarkTheme);

  return (
    <header
      className={`  fixed top-0 left-0 right-0 z-50  shadow-lg p-2 ${
        theme ? "bg-gray-900 text-white" : "bg-slate-50 text-black"
      } `}
    >
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center w-1/6">
          <button
            className="mr-4 p-2 h-12 focus:outline-none"
            onClick={() => toggleHandlerMenu()}
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-400" />
          </button>

          <a href="https://youtube-clone-viewtube.netlify.app/">
            <img
              className="h-12"
              src={theme ? "/youTube-Header-logo.png" : "/youTubeLogo.jpg"}
              alt="youtube-logo"
            />
          </a>
        </div>

        <div className="w-1/2">
          <div className="relative">
            <input
              type="text"
              style={{ width: "94.666667%" }}
              className={`h-11 px-4 py-2 border border-r-0  rounded-l-full focus:outline-none ${
                theme
                  ? "bg-gray-800 text-white border-gray-600"
                  : "bg-white  text-black border-gray-400"
              }`}
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearchQueryChange(e.target.value)}
              onFocus={() => handleSearchQueryChange(searchQuery)}
              onBlur={hideSuggestions}
            />
            <button
              id="search-icon-legacy"
              className={`absolute right-0 top-0 h-full px-3 py-2.5 border  rounded-r-full ${
                theme
                  ? "bg-gray-600 border-gray-600"
                  : "bg-gray-200 border-gray-400"
              }`}
              aria-label="Search"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            {showSuggestions && (
              <div
                className={`fixed ${
                  theme
                    ? "bg-gray-900 text-white border-gray-700 "
                    : "bg-slate-50 text-black border-gray-100 "
                } mt-1 py-2 border rounded-lg z-100 w-[44.5rem] shadow-lg`}
              >
                <ul>
                  {suggestions.map((s) => (
                    <li
                      key={s}
                      className={`${
                        theme ? "hover:bg-gray-600" : "hover-bg-gray-200"
                      } py-1 px-3 cursor-pointer`}
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
            className={`rounded-full p-2 ${
              theme ? "bg-gray-700" : "bg-gray-400"
            }`}
            onClick={() => {
              toggleDay();
            }}
          >
            {" "}
            {theme ? "DARK🌛" : "LIGHT ⛅"}{" "}
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
