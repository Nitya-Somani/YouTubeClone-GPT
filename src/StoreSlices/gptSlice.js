import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    languageKey:"en",
}
const gptSlice = createSlice({
  name: "gpt",
  initialState, 
  reducers: {
    changeLanguage :(state,action)=>{
        state.languageKey = action.payload;
    }
  
   
  },
});

export const {changeLanguage } = gptSlice.actions;
export default gptSlice.reducer;
