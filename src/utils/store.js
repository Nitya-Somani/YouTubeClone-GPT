import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../StoreSlices/appSlice";
import themeSlice from "../StoreSlices/themeSlice";
import searchSlice from "../StoreSlices/searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    theme: themeSlice,
    search:searchSlice,
  },
});

export default store;
