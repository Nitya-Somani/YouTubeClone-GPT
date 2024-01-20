import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../StoreSlices/appSlice";
import { toggleTheme } from "../../StoreSlices/themeSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/fireBaseAuth/firebase";
import { useNavigate } from "react-router-dom";
import {
  FontAwesomeIcon,
  faBars,
} from "../../assests/FontAwesomeIcons/FontIcons";
import { SearchSuggestions } from "../componentsIndex";
import { useLocation } from "react-router-dom";
import { SUPPORTED_LANGUAGES } from "../../utils/constants/constants";
import { changeLanguage } from "../../StoreSlices/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userUrl = useSelector((store) => store.user);
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);
  const location = useLocation();
  const isGptView = location.pathname === "/GPT";

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  const handleLogin = () => {
    signOut(auth)
      .then(() => {
        navigate("/Login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const navigateLogin = () => {
    navigate("/Login");
  };

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-lg p-2 ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-slate-50 text-black"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-full md:w-1/2 lg:w-1/4">
          <button
            className="mr-4 p-2 h-12 focus:outline-none"
            onClick={toggleMenuHandler}
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-400" />
          </button>
          <a href="https://youtube-clone-viewtube.netlify.app/">
            <img
              className="h-12"
              src={
                isDarkTheme ? "/youTube-Header-logo.png" : "/youTubeLogo.jpg"
              }
              alt="youtube-logo"
            />
          </a>
        </div>
        {isGptView ? (
          <select
            className="float-right absolute right-[10rem] bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                className="bg-gray-900 text-white"
                key={lang.identifier}
                value={lang.identifier}
              >
                📜 {lang.name}
              </option>
            ))}
          </select>
        ) : (
          <SearchSuggestions />
        )}

        <div className="flex items-center">
          <button
            className={`rounded-full p-2 ${
              isDarkTheme ? "bg-gray-700" : "bg-gray-400"
            }`}
            onClick={toggleThemeHandler}
          >
            {isDarkTheme ? "🌛" : "⛅"}
          </button>
          <button className="p-2 focus:outline-none flex ">
            <img
              className="w-10 h-10 rounded-lg"
              onClick={navigateLogin}
              src={
                userUrl?.photoURL
                  ? userUrl.photoURL
                  : "https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
              }
              alt="Login"
            />

            {userUrl?.photoURL && userUrl.photoURL && (
              <h6 onClick={handleLogin} className="p-1 font-bold ">
                (Sign Out)
              </h6>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
