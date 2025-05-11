import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  view: "Home",
  isDropdownOpen: null,
  isMobileDropdownOpen: null,
  scrolled: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
    setDropdownOpen: (state, action) => {
      state.isDropdownOpen = action.payload;
    },
    setMobileDropdownOpen: (state, action) => {
      state.isMobileDropdownOpen = action.payload;
    },
    setScrolled: (state, action) => {
      state.scrolled = action.payload;
    },
  },
});

export const {
  setPath,
  toggleMenu,
  setMenuOpen,
  setView,
  setDropdownOpen,
  setMobileDropdownOpen,
  setScrolled,
} = appSlice.actions;

export default appSlice.reducer;
