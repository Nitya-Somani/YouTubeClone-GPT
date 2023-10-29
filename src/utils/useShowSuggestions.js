import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const useShowSuggestion = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    setShowSuggestions(true);
  };

  const hideSuggestions = () => {
    setShowSuggestions(false);
  };

  return {
    searchQuery,
    suggestions,
    showSuggestions,
    handleSearchQueryChange,
    hideSuggestions,
  };
};

export default useShowSuggestion;
