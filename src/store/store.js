import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../StoreSlices/appSlice";
import themeSlice from "../StoreSlices/themeSlice";
import searchSlice from "../StoreSlices/searchSlice";
import userSlice from "../StoreSlices/userSlice";
import movieReducer from "../StoreSlices/movieSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    theme: themeSlice,
    search:searchSlice,
    user:userSlice,
    movies:movieReducer

  },
});

export default store;
