import { createSlice } from "@reduxjs/toolkit";

const initialState = { NowPlaying: null, MovieTrailor: null };

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlaying: (state, action) => {
      state.NowPlaying = action.payload;
    },
    addTrailor: (state, action) => {
      state.MovieTrailor = action.payload;
    },
  },
});

export const { addNowPlaying, addTrailor } = movieSlice.actions;
export default movieSlice.reducer;
