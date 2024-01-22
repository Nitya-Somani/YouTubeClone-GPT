const GOOGLE_API_KEY = "AIzaSyA_UfBQVZ2sHb-cGBuGRoLjc2oWg0jA7KY";//"AIzaSyBQHinZ_fxptqNzg_2wHmhB6RHoJmsnA54"; //=process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const mapButtons = [
  "All",
  "JavaScript",
  "Music",
  "Sports",
  "News",
  "webseries",
  "Live",
  "T-series",
  "Bollywood Music",
  "Game Shows",
  "DataBase",
  "Algorithms",
  "cooking",

  "Comedy",
  "Bollywood Music",
  "New-Age Music",
  "Indian soap operas",
  "Courses",
  "T-series",
  "Game Shows",
  "DataBase",
  "Algorithms",
  "cooking",

  "webseries",

  "New-Age Music",
  "Indian soap operas",
];

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzM3ZmUxNGE4NDQ5ZTkzNWYzMjVjZDBiNmFmMWU3MyIsInN1YiI6IjY1YTI3NGE3YjdiNjlkMDEyMjNiZjMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TPceyd8H_ntSZp7eBIxjSpYbqEHhfDA12NJzAcqH4d8",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const SEARCH_VIDEOS_PAGE =
  "https://www.googleapis.com/youtube/v3/search?key=" + GOOGLE_API_KEY + "&q=";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
export const Light_Like_Thumb =
  "https://toppng.com/uploads/thumbnail/like-thumb-up-vote-comments-vote-icon-11563607354hfsitrepaa.png";

export const Dark_Like_Thumb =
  "https://www.freeiconspng.com/thumbs/like-icon-png/white-like-icon-png-20.png";

export const Light_Unlike_Thumb =
  "https://cdn-icons-png.flaticon.com/512/20/20661.png";

export const Dark_Unlike_Thumb = "https://pngimg.com/d/dislike_PNG27.png";

export const Light_User_Icon =
  "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

export const Dark_User_Icon =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png";

export const OFFSET_LIVE_CHAT = 20;