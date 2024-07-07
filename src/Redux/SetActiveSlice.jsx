import { createSlice } from "@reduxjs/toolkit";

const SetActiveSlice = createSlice({
  name: "setActive",
  initialState: {
    setActive: false
  },
  reducers: {
    SetActive: (state, action) => {
      state.setActive = action.payload
    },
  }
});
export const { SetActive } = SetActiveSlice.actions;
export default SetActiveSlice.reducer