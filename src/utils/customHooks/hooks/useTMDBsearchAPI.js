import { options } from "../../constants/constants";

async function useTMDBsearchAPI(movie) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
      options
    );
    const jsonData = await response.json();

    return jsonData.results;
  } catch (error) {
    console.error("Error Fetching TMDB Movies", error);
    throw error;
  }
}

export default useTMDBsearchAPI;
