import { createSlice } from "@reduxjs/toolkit";

const NameSlice = createSlice({
  name: "name",
  initialState: {
    SetName: ''
  },
  reducers: {
    SetName: (state, action) => {
      state.SetName = action.payload
    },
  }
});
export const { SetName } = NameSlice.actions;
export default NameSlice.reducer