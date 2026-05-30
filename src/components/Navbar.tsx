"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Search, Sparkles } from "lucide-react";
import { useGlobal } from "@/app/providers";

const NAV_LINKS = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "GitHub", id: "github" },
  { name: "Contact", id: "contact" }
];

export default function Navbar() {
  const { theme, toggleTheme, setCmdMenuOpen } = useGlobal();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Set Active Scrolled State
      setIsScrolled(window.scrollY > 20);

      // 3. Highlight active section by scroll viewport
      const currentScrollY = window.scrollY + 120; // offset
      for (const link of NAV_LINKS) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentScrollY >= offsetTop && currentScrollY < offsetTop + offsetHeight) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "glass-nav py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 font-display text-lg font-bold tracking-wider text-white select-none clickable group"
          >
            <span className="text-accent-blue transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              &lt;
            </span>
            <span className="text-white relative font-sans">
              Nandini
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300 group-hover:w-full" />
            </span>
            <span className="text-accent-purple transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
              /&gt;
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 border border-white/5 bg-black/30 backdrop-blur-md px-2 py-1.5 rounded-full">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 clickable ${
                    isActive ? "text-accent-blue" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-white/5 border border-white/10 z-[-1]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Utilities Buttons */}
          <div className="flex items-center space-x-3">
            {/* Search/Cmd+K Trigger Button */}
            <button
              onClick={() => setCmdMenuOpen(true)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-white/20 transition-all duration-300 text-xs clickable"
              title="Open Command Menu (Ctrl+K)"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden sm:inline font-mono text-[9px] bg-white/10 border border-white/10 px-1.5 rounded">
                Ctrl + K
              </span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/20 transition-colors duration-300 clickable"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-purple-400" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white transition-colors clickable"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-[size:200%_auto] animate-pulse-glow"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-30 bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col p-6 space-y-6 lg:hidden font-sans"
          >
            <div className="flex flex-col space-y-3 pt-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-accent-blue/50 px-3">
                Site Sections
              </span>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="w-full text-left py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/5 flex items-center justify-between clickable"
                >
                  <span>{link.name}</span>
                  <Sparkles className="h-3 w-3 text-accent-blue" />
                </button>
              ))}
            </div>
            <div className="mt-auto border-t border-white/5 pt-6 text-center text-xs text-white/40 font-mono">
              <p>Nandini Dhanrale Portfolio // 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
