import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterbtn:false,filterbtnSearch:null
}

const searchSlice = createSlice({
    
    name :"searchcache",
    initialState,
    reducers:{
        cacheResult:(state,action)=>{
           
           return{
            ...state,...action.payload,
           };
        },
        filterSearch:(state,action)=>{
            state.filterbtn = true;
            state.filterbtnSearch = action.payload;
        }
    }
});

export const {cacheResult ,filterSearch} = searchSlice.actions;
export default searchSlice.reducer;
