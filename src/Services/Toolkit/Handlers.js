/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import {
  toggleMenu,
  setMenuOpen,
  setView,
  setDropdownOpen,
  setMobileDropdownOpen,
  setScrolled,
  setAnimate,
  setAnimateRef,
  setToggleTheme,
} from "./Slice";
import { useCallback, useRef, useEffect, useState, createRef } from "react";

const Handlers = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);
  const { darkMode, sectionRef } = state;

  const sidebarRef = useRef(null);
  const dropdownRef = useRef(null);

  const sectionRefs = useRef({});

  const handleToggleMenu = useCallback(() => {
    dispatch(toggleMenu());
  }, [dispatch]);

  const handleSetMenuOpen = useCallback(
    (value) => {
      dispatch(setMenuOpen(value));
    },
    [dispatch]
  );

  const handleSetView = useCallback(
    (value) => {
      dispatch(setView(value));
    },
    [dispatch]
  );

  const handleSetDropdownOpen = useCallback(
    (value) => {
      dispatch(setDropdownOpen(value));
    },
    [dispatch]
  );

  const handleSetMobileDropdownOpen = useCallback(
    (value) => {
      dispatch(setMobileDropdownOpen(value));
    },
    [dispatch]
  );

  const handleSetScrolled = useCallback(
    (value) => {
      dispatch(setScrolled(value));
    },
    [dispatch]
  );

  const handleNavigation = useCallback(() => {
    window.scrollTo(0, 0);
    dispatch(setMenuOpen(false));
    dispatch(setDropdownOpen(null));
    dispatch(setMobileDropdownOpen(null));
  }, [dispatch]);

  const handleThemeToggle = useCallback(() => {
    dispatch(setToggleTheme());
  }, [dispatch]);

  const getSectionRef = (name) => {
    if (!sectionRefs.current[name]) {
      sectionRefs.current[name] = createRef();
    }
    return sectionRefs.current[name];
  };

  useEffect(() => {
    Object.entries(sectionRefs.current).forEach(([name, ref]) => {
      dispatch(setAnimateRef({ name, ref }));

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            dispatch(setAnimate(name));
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        state.isMenuOpen
      ) {
        dispatch(setMenuOpen(false));
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(setDropdownOpen(null));
        dispatch(setMobileDropdownOpen(null));
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        dispatch(setScrolled(true));
      } else {
        dispatch(setScrolled(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, state.isMenuOpen]);

  return {
    ...state,
    sidebarRef,
    dropdownRef,
    sectionRef,
    handleToggleMenu,
    handleSetMenuOpen,
    handleSetView,
    handleSetDropdownOpen,
    handleSetMobileDropdownOpen,
    handleSetScrolled,
    handleNavigation,
    darkMode,
    handleThemeToggle,
    getSectionRef,
  };
};

export default Handlers;
