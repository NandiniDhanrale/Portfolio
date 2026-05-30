"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface GlobalContextProps {
  theme: Theme;
  toggleTheme: () => void;
  isCmdMenuOpen: boolean;
  setCmdMenuOpen: (open: boolean) => void;
  showCursorSpotlight: boolean;
  toggleCursorSpotlight: () => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isCmdMenuOpen, setCmdMenuOpen] = useState(false);
  const [showCursorSpotlight, setShowCursorSpotlight] = useState(true);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    
    if (initialTheme === "light") {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }

    const savedCursor = localStorage.getItem("portfolio-cursor");
    if (savedCursor !== null) {
      setShowCursorSpotlight(savedCursor === "true");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("portfolio-theme", nextTheme);
      if (nextTheme === "light") {
        document.documentElement.classList.add("light-theme");
      } else {
        document.documentElement.classList.remove("light-theme");
      }
      return nextTheme;
    });
  };

  const toggleCursorSpotlight = () => {
    setShowCursorSpotlight((prev) => {
      const nextVal = !prev;
      localStorage.setItem("portfolio-cursor", String(nextVal));
      return nextVal;
    });
  };

  // Keyboard shortcut Ctrl + K / Cmd + K to toggle command menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCmdMenuOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        isCmdMenuOpen,
        setCmdMenuOpen,
        showCursorSpotlight,
        toggleCursorSpotlight,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
}
