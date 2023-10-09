import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../StoreSlices/appSlice";
import themeSlice from "../StoreSlices/themeSlice"
const store = configureStore({

    reducer:{
        app:appSlice,
        theme:themeSlice,
    }
})

export default store;