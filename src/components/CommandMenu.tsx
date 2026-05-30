"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Search, Laptop, Moon, Sun, Monitor, 
  User, Code2, FolderGit, Award, Briefcase, 
  GraduationCap, Mail, ArrowUpRight,
  Compass, FileDown, Sparkles
} from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import { useGlobal } from "@/app/providers";

interface CommandItem {
  icon: React.ReactNode;
  label: string;
  category: "Navigation" | "Preferences" | "Socials & Links";
  action: () => void;
  shortcut?: string;
}

export default function CommandMenu() {
  const { 
    isCmdMenuOpen, 
    setCmdMenuOpen, 
    theme, 
    toggleTheme, 
    showCursorSpotlight, 
    toggleCursorSpotlight 
  } = useGlobal();

  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCmdMenuOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isCmdMenuOpen]);

  const handleScrollTo = (id: string) => {
    setCmdMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar spacing
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const commandItems: CommandItem[] = [
    {
      icon: <User className="h-4 w-4 text-accent-blue" />,
      label: "Jump to About Section",
      category: "Navigation",
      action: () => handleScrollTo("about")
    },
    {
      icon: <Code2 className="h-4 w-4 text-accent-blue" />,
      label: "Jump to Skills Dashboard",
      category: "Navigation",
      action: () => handleScrollTo("skills")
    },
    {
      icon: <FolderGit className="h-4 w-4 text-accent-blue" />,
      label: "Jump to Featured Projects",
      category: "Navigation",
      action: () => handleScrollTo("projects")
    },
    {
      icon: <Award className="h-4 w-4 text-accent-blue" />,
      label: "Jump to Achievements Timeline",
      category: "Navigation",
      action: () => handleScrollTo("achievements")
    },
    {
      icon: <Briefcase className="h-4 w-4 text-accent-blue" />,
      label: "Jump to Engineering Experience",
      category: "Navigation",
      action: () => handleScrollTo("experience")
    },
    {
      icon: <GraduationCap className="h-4 w-4 text-accent-blue" />,
      label: "Jump to Education Timeline",
      category: "Navigation",
      action: () => handleScrollTo("education")
    },
    {
      icon: <Github className="h-4 w-4 text-accent-blue" />,
      label: "Jump to GitHub Contribution Section",
      category: "Navigation",
      action: () => handleScrollTo("github")
    },
    {
      icon: <Mail className="h-4 w-4 text-accent-blue" />,
      label: "Jump to Contact Form",
      category: "Navigation",
      action: () => handleScrollTo("contact")
    },
    {
      icon: theme === "dark" ? <Sun className="h-4 w-4 text-accent-purple" /> : <Moon className="h-4 w-4 text-accent-purple" />,
      label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Theme`,
      category: "Preferences",
      action: () => {
        toggleTheme();
        setCmdMenuOpen(false);
      },
      shortcut: "T"
    },
    {
      icon: <Sparkles className="h-4 w-4 text-accent-purple" />,
      label: `${showCursorSpotlight ? "Disable" : "Enable"} Spotlight Cursor`,
      category: "Preferences",
      action: () => {
        toggleCursorSpotlight();
        setCmdMenuOpen(false);
      },
      shortcut: "C"
    },
    {
      icon: <FileDown className="h-4 w-4 text-emerald-400" />,
      label: "Download Full Resume",
      category: "Socials & Links",
      action: () => {
        setCmdMenuOpen(false);
        // Resume download trigger
        window.open("#", "_blank");
      }
    },
    {
      icon: <Github className="h-4 w-4 text-white" />,
      label: "Open GitHub Profile",
      category: "Socials & Links",
      action: () => {
        setCmdMenuOpen(false);
        window.open("https://github.com", "_blank");
      }
    },
    {
      icon: <Linkedin className="h-4 w-4 text-blue-500" />,
      label: "Open LinkedIn Profile",
      category: "Socials & Links",
      action: () => {
        setCmdMenuOpen(false);
        window.open("https://linkedin.com", "_blank");
      }
    }
  ];

  // Filter commands by input
  const filteredItems = commandItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (selectedIndex >= filteredItems.length && filteredItems.length > 0) {
      setSelectedIndex(0);
    }
  }, [search, filteredItems.length, selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setCmdMenuOpen(false);
    }
  };

  // Scroll active item into view
  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      const activeElement = listElement.querySelector("[data-active='true']");
      if (activeElement) {
        activeElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isCmdMenuOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#000000]/70 backdrop-blur-md"
            onClick={() => setCmdMenuOpen(false)}
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#0F0F10]/95 backdrop-blur-xl shadow-2xl z-10 flex flex-col font-sans"
          >
            {/* Search Input Bar */}
            <div className="flex items-center space-x-3 px-4 py-4 border-b border-white/5">
              <Search className="h-5 w-5 text-white/40" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search commands or jump to sections... (Esc to exit)"
                className="w-full bg-transparent text-sm text-white placeholder-white/30 border-none outline-none focus:ring-0"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <kbd className="hidden sm:inline-flex select-none items-center gap-0.5 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white/50 shadow-sm">
                <span>ESC</span>
              </kbd>
            </div>

            {/* List Results */}
            <div
              ref={listRef}
              className="flex-1 max-h-[350px] overflow-y-auto px-2 py-3 space-y-4"
            >
              {filteredItems.length === 0 ? (
                <div className="text-center py-8 text-sm text-white/40 font-mono">
                  No commands match "{search}"
                </div>
              ) : (
                // Group items by category
                ["Navigation", "Preferences", "Socials & Links"].map((category) => {
                  const catItems = filteredItems.filter(item => item.category === category);
                  if (catItems.length === 0) return null;

                  return (
                    <div key={category} className="space-y-1">
                      <h3 className="px-3 text-[10px] font-semibold tracking-wider text-accent-blue/70 uppercase">
                        {category}
                      </h3>
                      {catItems.map((item) => {
                        // Find global index in standard filtered list
                        const globalIdx = filteredItems.indexOf(item);
                        const isActive = globalIdx === selectedIndex;

                        return (
                          <button
                            key={item.label}
                            data-active={isActive}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors text-xs md:text-sm ${
                              isActive
                                ? "bg-white/10 text-white"
                                : "text-white/60 hover:bg-white/5 hover:text-white"
                            }`}
                            onClick={() => {
                              item.action();
                            }}
                            onMouseEnter={() => setSelectedIndex(globalIdx)}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="flex-shrink-0">{item.icon}</span>
                              <span className="font-medium">{item.label}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {item.shortcut && (
                                <kbd className="font-mono text-[10px] text-white/30 border border-white/10 px-1 rounded">
                                  {item.shortcut}
                                </kbd>
                              )}
                              <ArrowUpRight className={`h-3 w-3 opacity-0 transition-opacity ${isActive ? "opacity-40" : ""}`} />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </div>

            {/* Hint Footer Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-t border-white/5 text-[10px] text-white/40 font-mono">
              <div className="flex items-center space-x-4">
                <span>↑↓ to navigate</span>
                <span>↵ to select</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>Search powered by</span>
                <Compass className="h-3 w-3 text-accent-blue animate-spin" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
