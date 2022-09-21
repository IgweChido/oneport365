import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  // name
  name: "modal",

  // Initial State
  initialState: {
    mSlice: false,
    pSlice: false,
  },

  // Reducer method
  reducers: {
    ShowModal: (state, action) => {
      state.mSlice = action.payload;
    },
    ShowNav: (state, action) => {
      state.pSlice = action.payload;
    },
  },
});
export const { ShowModal, ShowNav } = ModalSlice.actions;
export default ModalSlice.reducer;
