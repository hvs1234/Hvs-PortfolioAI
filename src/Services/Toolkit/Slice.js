import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  view: "Home",
  isDropdownOpen: null,
  isMobileDropdownOpen: null,
  scrolled: false,
  animate: {},
  sectionRef: {},
  darkMode: localStorage.getItem("theme") === "dark" ? true : false,
  isVisible: false,
  showPopup: false,
  selectedService: null,
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
    setAnimate: (state, action) => {
      state.animate[action.payload] = true;
    },
    setAnimateRef: (state, action) => {
      const { name, ref } = action.payload;
      state.sectionRef[name] = ref;
    },
    setToggleTheme(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem("theme", state.darkMode ? "dark" : "light");
      if (state.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    setShowPopup(state, action) {
      return { ...state, ...action.payload };
    },
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
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
  setAnimate,
  setAnimateRef,
  setToggleTheme,
  setShowPopup,
  setSelectedService,
} = appSlice.actions;

export default appSlice.reducer;
