const GOOGLE_API_KEY =process.env.REACT_APP_GOOGLE_API_KEY;

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
  "Comedy",
  "Live",
  "T-series",
  "Game Shows",
  "DataBase",
  "Algorithms",
  "cooking",
  "movies",
  "webseries",
  "Bollywood Music",
  "New-Age Music",
  "Indian soap operas",
  "Courses",
  "T-series",
  "Game Shows",
  "DataBase",
  "Algorithms",
  "cooking",
  "movies",
  "webseries",
  "Bollywood Music",
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

//need to develope this
const searchQuery = "songs";
export const SEARCH_VIDEOS_PAGE =
  "https://www.googleapis.com/youtube/v3/search?key=" +
  GOOGLE_API_KEY +
  "&q=" +
  searchQuery +
  "&part=snippet&type=video";

  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
 
  ];

  export const OPEN_AI_KEY =process.env.REACT_APP_OPEN_AI_KEY;