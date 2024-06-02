import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   bhkFilter: "",
   priceFilter: "",
   cityFilter: "",
   dateFilter: "",

}

const filterSlice = createSlice({
   name: "filters",
   initialState,
   reducers: {
      setBHKFilter: (state, action) => {
         state.bhkFilter = action.payload;
      },
      setPriceFilter: (state,action) => {
         state.priceFilter = action.payload;
      },
      setCityFilter: (state,action) => {
         state.cityFilter = action.payload;
      },
      setDateFilter: (state,action) => {
         state.dateFilter = action.payload;
      },
      resetFilters: (state) => {
         state.bhkFilter = "";
         state.cityFilter="";
         state.dateFilter="";
         state.priceFilter="";
      }

   },
});


export const { setBHKFilter, setPriceFilter, setCityFilter, setDateFilter } = filterSlice.actions;

const filterReducer = filterSlice.reducer;
export default filterReducer;