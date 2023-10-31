import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    
    name :"searchcache",
    initialState:{

    },
    reducers:{
        cacheResult:(state,action)=>{
           
           return{
            ...state,...action.payload,
           };
        }
    }
});

export const {cacheResult} = searchSlice.actions;
export default searchSlice.reducer;
