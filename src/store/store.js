import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../StoreSlices/appSlice";
import themeSlice from "../StoreSlices/themeSlice";
import searchSlice from "../StoreSlices/searchSlice";
import userSlice from "../StoreSlices/userSlice";
import movieReducer from "../StoreSlices/movieSlice";
import popularReducer from "../StoreSlices/movieSlice";
import topRatedReducer from "../StoreSlices/movieSlice";
import upcomingReducer from "../StoreSlices/movieSlice";
import gptReducer from "../StoreSlices/gptSlice";
import videoReducer from "../StoreSlices/videoSlice";
import chatReducer from "../StoreSlices/chatSlice";


const store = configureStore({
  reducer: {
    app: appSlice,
    theme: themeSlice,
    search:searchSlice,
    user:userSlice,
    movies:movieReducer,
    popularMovies :popularReducer,
    topRatedMovies:topRatedReducer,
    upcomingMovies:upcomingReducer,
    gpt:gptReducer,
    video:videoReducer,
    chat:chatReducer

  },
});

export default store;
