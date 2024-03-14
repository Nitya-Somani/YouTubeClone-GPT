import { createSlice } from "@reduxjs/toolkit";
const storedTheme = localStorage.getItem("isDarkTheme");
const initialState = {
    isDarkTheme: storedTheme ? JSON.parse(storedTheme) : true,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem('isDarkTheme', JSON.stringify(state.isDarkTheme));

    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
