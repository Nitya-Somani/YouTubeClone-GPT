import React, { useEffect } from "react";
import { Loader, SearchVideoCard } from "../componentsIndex";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchPage = () => {
  setTimeout(function() {
    <Loader/>
  }, 9000);
  const searchResults = useSelector((store) => store.search.filterbtnSearch);
  const sideBarToggle = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.theme.isDarkTheme);

  useEffect(() => {}, [searchResults]);

  if (searchResults === null) return <Loader />;

  const mainClass = `${
    sideBarToggle
      ? "absolute left-56 ml-8  "
      : "absolute left-12 ml-8 pr-[12rem]"
  }`;
  const themeClass = `${
    theme ? "bg-gray-900 text-white" : "bg-white text-black"
  }`;
  return (
    <div className={`flex flex-col mt-[70px] ${mainClass} ${themeClass}`}>
      {searchResults.map((searchVideo) => (
        <Link
          key={searchVideo.id.videoId}
          to={"/watch?v=" + searchVideo.id.videoId}
        >
          <SearchVideoCard key={searchVideo.id.videoId} info={searchVideo} />
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;
