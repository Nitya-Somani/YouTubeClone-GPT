import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    languageKey:"en",gptMovies:null,tmdbRes:null
}
const gptSlice = createSlice({
  name: "gpt",
  initialState, 
  reducers: {
    changeLanguage :(state,action)=>{
        state.languageKey = action.payload;
    },
    addgptMovieResults:(state,action)=>{
      const {gptMovies,tmdbRes} = action.payload;
      state.gptMovies = gptMovies;
      state.tmdbRes = tmdbRes;
    }
  
   
  },
});

export const {changeLanguage,addgptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
