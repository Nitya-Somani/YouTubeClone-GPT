import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useSearchYouTube } from "../../utils/customHooks/hooksIndex";
import { filterSearch } from "../../StoreSlices/searchSlice";

const FilterButton = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.isDarkTheme);
 const handleFilterSearch = async() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = await useSearchYouTube(props.name);
    dispatch(filterSearch(data));
  };

  const btnClass = `p-2 m-2 bg-gray-200 rounded text-black ${
    theme ? "bg-gray-800  text-white" : "bg-gray-200 text-black "
  }`;

  return (
    <div>
      <button className={btnClass} onClick={handleFilterSearch}>
        {props.name}
      </button>
    </div>
  );
};

export default FilterButton;
