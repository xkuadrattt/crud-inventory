import { createSlice } from "@reduxjs/toolkit";
import { SidebarSlice } from "../../model/type";

const initialState: SidebarSlice = {
  toggleMenu: true,
};

const sidebarSlice = createSlice({
  name: "sidebarMenu",
  initialState,
  reducers: {
    handleToggle: (state) => {
      state.toggleMenu = !state.toggleMenu;
      console.log("toggle hit");
    },
  },
});

export const { handleToggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;
