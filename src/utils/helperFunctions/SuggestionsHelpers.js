

export const handleArrowNavigation = (event, suggestions, setSelectedSuggestionIndex) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };
  
  export const handleSuggestionSelection = (suggestion, handleSearchQueryChange, hideSuggestions) => {
    handleSearchQueryChange(suggestion);
    hideSuggestions();
  };
  