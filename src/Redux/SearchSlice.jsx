import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    search: ""
  },
  reducers: {
    SetSearch: (state, action) => {
      state.search = action.payload;
    },
  }
});
export const { SetSearch } = SearchSlice.actions;
export default SearchSlice.reducer