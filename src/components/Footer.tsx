"use client";

import React from "react";
import { useGlobal } from "@/app/providers";
import { ArrowUp, Terminal, Search } from "lucide-react";

export default function Footer() {
  const { setCmdMenuOpen } = useGlobal();

  return (
    <footer className="relative border-t border-white/5 bg-black/40 py-12 text-white/50 font-sans text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Logo */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-1.5 font-display font-bold text-white text-base select-none clickable group"
          >
            <span className="text-accent-blue font-semibold group-hover:rotate-12 transition-transform">&lt;</span>
            <span>Nandini</span>
            <span className="text-accent-purple font-semibold group-hover:-rotate-12 transition-transform">/&gt;</span>
          </button>
          <p className="text-[10px] text-white/30 font-mono">
            &copy; {new Date().getFullYear()} Nandini Dhanrale. All rights reserved.
          </p>
        </div>

        {/* Center: Tech Stack Telemetry */}
        <div className="flex items-center space-x-1.5 text-center text-[10px] font-mono text-white/30">
          <Terminal className="h-3.5 w-3.5 text-accent-blue" />
          <span>Next.js 15 &bull; React 19 &bull; TS &bull; Framer Motion &bull; Tailwind CSS v4</span>
        </div>

        {/* Right Side: Scroll to Top & Cmd Menu */}
        <div className="flex items-center space-x-4">
          {/* Quick Command menu clicker */}
          <button
            onClick={() => setCmdMenuOpen(true)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-colors text-[10px] font-mono clickable"
          >
            <Search className="h-3 w-3 text-accent-blue" />
            <span>Wake Menu (⌘K)</span>
          </button>

          {/* Scroll top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors clickable"
            title="Scroll to Top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
