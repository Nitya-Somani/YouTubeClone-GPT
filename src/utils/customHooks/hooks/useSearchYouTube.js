import { SEARCH_VIDEOS_PAGE } from "../../constants/constants";

const useSearchYouTube = async ( searchQuery ) => {
  try {
    const response = await fetch(SEARCH_VIDEOS_PAGE + searchQuery + "&part=snippet&type=video&maxResults=50");
    const jsonData = await response.json();
    return jsonData.items;
    
  } catch (error) {
    throw error; 
  }
};

export default useSearchYouTube;
