// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
type ModalSliceType = {
  siteMapModalVisibility: boolean;
};
const initialState: ModalSliceType = {
  siteMapModalVisibility: true,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    switchSiteMapModalVisibility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
  },
});

export default modalSlice.reducer;
export const { switchSiteMapModalVisibility } = modalSlice.actions;
