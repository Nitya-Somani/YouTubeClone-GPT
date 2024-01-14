import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NowPlaying: null,
  MovieTrailor: null,
  PopularMovies: null,
  TopRatedMovies: null,
  UpcomingMovies: null,
};

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
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingPlaying: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlaying,
  addTrailor,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingPlaying,
} = movieSlice.actions;
export default movieSlice.reducer;
