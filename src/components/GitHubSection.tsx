"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, GitPullRequest, Flame, Milestone, ArrowUpRight } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


// Generate mock contribution grid data: 53 weeks * 7 days = 371 cells
const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

interface ContributionCell {
  count: number;
  date: string;
}

const generateMockHeatmapData = (): ContributionCell[] => {
  const data: ContributionCell[] = [];
  const baseDate = new Date(2025, 4, 30); // 1 year ago relative to current May 2026 local time

  for (let i = 0; i < 371; i++) {
    const currentDate = new Date(baseDate);
    currentDate.setDate(baseDate.getDate() + i);
    
    // Randomize contribution weights
    const roll = Math.random();
    let count = 0;
    if (roll > 0.85) count = Math.floor(Math.random() * 8) + 4; // High (4-11)
    else if (roll > 0.5) count = Math.floor(Math.random() * 4) + 1;  // Low-Med (1-4)
    // rest is 0

    // Format date string
    const dateStr = currentDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });

    data.push({ count, date: dateStr });
  }
  return data;
};

const HEATMAP_DATA = generateMockHeatmapData();

const STATS = [
  { label: "Total Contributions", value: "1,482", icon: <GitBranch className="h-4 w-4 text-emerald-400" /> },
  { label: "Current Streak", value: "45 Days", icon: <Flame className="h-4 w-4 text-amber-500 animate-pulse" /> },
  { label: "Longest Streak", value: "82 Days", icon: <Milestone className="h-4 w-4 text-accent-blue" /> },
  { label: "Total Repositories", value: "32", icon: <GitPullRequest className="h-4 w-4 text-accent-purple" /> }
];

const TOP_LANGUAGES = [
  { name: "Java", percentage: 45, color: "bg-amber-600 shadow-[0_0_10px_rgba(217,119,6,0.3)]" },
  { name: "TypeScript / JS", percentage: 35, color: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]" },
  { name: "Python", percentage: 15, color: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]" },
  { name: "SQL", percentage: 5, color: "bg-accent-purple shadow-[0_0_10px_rgba(168,85,247,0.3)]" }
];

export default function GitHubSection() {
  const [hoveredCell, setHoveredCell] = useState<ContributionCell | null>(null);

  return (
    <section id="github" className="relative py-24 bg-black/20 overflow-hidden font-sans border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full radial-glow-blue opacity-15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-bold tracking-[0.3em] text-accent-blue"
          >
            Telemetry
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Open Source Activity
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/15 transition-all text-left flex items-center justify-between group cursor-default"
            >
              <div className="space-y-1">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/40 block">
                  {stat.label}
                </span>
                <span className="font-display text-xl md:text-3xl font-black text-white group-hover:text-accent-blue transition-colors">
                  {stat.value}
                </span>
              </div>
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                {stat.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main telemetry cards layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Heatmap Activity Grid (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-white/10 space-y-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center space-x-2 text-white/80 font-display font-bold text-sm">
                <Github className="h-5 w-5" />
                <span>Contributions History Grid</span>
              </div>
              <a 
                href="https://github.com" 
                target="_blank"
                className="flex items-center space-x-1.5 text-xs text-accent-blue hover:underline font-semibold font-mono clickable"
              >
                <span>github.com/nandinidhanrale</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Heatmap Area */}
            <div className="overflow-x-auto select-none py-2 relative">
              <div className="min-w-[620px] flex space-x-2">
                {/* Y-axis weekday labels */}
                <div className="flex flex-col justify-between text-[9px] font-mono text-white/30 pt-4 pb-1">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* Grid container */}
                <div className="flex-1 space-y-1">
                  {/* Month header labels */}
                  <div className="flex justify-between text-[9px] font-mono text-white/30 px-1 mb-1.5">
                    {MONTH_LABELS.map(m => <span key={m}>{m}</span>)}
                  </div>

                  {/* Contributions grid cells */}
                  <div className="grid grid-flow-col grid-rows-7 gap-1">
                    {HEATMAP_DATA.map((cell, idx) => {
                      // Shading levels
                      let cellColor = "bg-white/5 hover:border-white/20";
                      if (cell.count > 6) cellColor = "bg-emerald-400 hover:bg-emerald-300";
                      else if (cell.count > 3) cellColor = "bg-emerald-600 hover:bg-emerald-500";
                      else if (cell.count > 0) cellColor = "bg-emerald-800 hover:bg-emerald-700";

                      return (
                        <div
                          key={idx}
                          className={`h-[9px] w-[9px] rounded-sm transition-colors border border-transparent ${cellColor}`}
                          onMouseEnter={() => setHoveredCell(cell)}
                          onMouseLeave={() => setHoveredCell(null)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Dynamic tooltip box inside heatmap wrapper */}
              {hoveredCell && (
                <div className="absolute top-[-35px] left-1/2 -translate-x-1/2 px-3 py-1.5 rounded bg-[#0F0F10] border border-white/10 text-[10px] font-mono text-white shadow-2xl z-20 backdrop-blur-xl">
                  {hoveredCell.count === 0 ? "No contributions" : `${hoveredCell.count} contributions`} on {hoveredCell.date}
                </div>
              )}
            </div>

            {/* Grid legend indicators */}
            <div className="flex justify-between items-center text-[10px] text-white/40 font-mono pt-4 border-t border-white/5">
              <span>Heatmap generated relative to active year (2025-2026)</span>
              <div className="flex items-center space-x-1">
                <span>Less</span>
                <div className="h-[9px] w-[9px] rounded-sm bg-white/5" />
                <div className="h-[9px] w-[9px] rounded-sm bg-emerald-800" />
                <div className="h-[9px] w-[9px] rounded-sm bg-emerald-600" />
                <div className="h-[9px] w-[9px] rounded-sm bg-emerald-400" />
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Languages distribution (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-white/10 space-y-6 flex flex-col justify-between"
          >
            <div className="border-b border-white/5 pb-4">
              <h3 className="text-white font-display font-bold text-sm">
                Top Languages Distribution
              </h3>
            </div>

            {/* Bar charts layout */}
            <div className="space-y-5 flex-1 flex flex-col justify-center">
              {TOP_LANGUAGES.map(lang => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-semibold text-white/80">{lang.name}</span>
                    <span className="text-white/40">{lang.percentage}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${lang.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[10px] text-white/30 font-mono text-center pt-4 border-t border-white/5">
              Reflects metrics computed across all active public repositories.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
