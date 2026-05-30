"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star, ShieldAlert, Sparkles, Compass } from "lucide-react";
import confetti from "canvas-confetti";

interface Achievement {
  id: string;
  type: "first" | "participation";
  title: string;
  event: string;
  year: string;
  description: string;
  details?: string[];
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "codigo",
    type: "first",
    title: "🏆 First Place Winner",
    event: "Code Club CODIGO 3.1 Hackathon",
    year: "2025",
    description: "Competed against 150+ developers to build a high-performance system, scoring top marks for backend design, scalability, and presentation.",
    details: ["Optimized relational indexing", "Built resilient session auth flow", "Designed responsive layout"]
  },
  {
    id: "loopbuffer",
    type: "first",
    title: "🏆 First Place Winner",
    event: "Loop Buffer 5.0 Hackathon",
    year: "2024",
    description: "Led the development of a real-time collaborative system, engineering low-latency background state sync loops.",
    details: ["Utilized advanced queue systems", "Managed web sockets syncing", "Achieved 99.8% uptime during load testing"]
  }
];

const PARTICIPATIONS = [
  { name: "Synapse ML Hackathon", detail: "Built dynamic LLM agent interfaces" },
  { name: "Vizathon 2.0", detail: "Designed geospatial data models" },
  { name: "Dassault Hackathon", detail: "Developed structural model trackers" },
  { name: "ACM Code-IT", detail: "Solved complex algorithmic challenges" },
  { name: "DSA Craft", detail: "Optimized complex tree algorithms" },
  { name: "Hacktoberfest", detail: "Contributed to open source systems" }
];

export default function Achievements() {
  const triggerConfetti = (type: "blue" | "purple") => {
    const colors = type === "blue" ? ["#00D2FF", "#3B82F6", "#FFFFFF"] : ["#A855F7", "#D946EF", "#FFFFFF"];
    
    // Custom confetti burst
    confetti({
      particleCount: 55,
      spread: 60,
      origin: { y: 0.7 },
      colors: colors,
      disableForReducedMotion: true
    });
  };

  return (
    <section id="achievements" className="relative py-24 bg-black/40 overflow-hidden font-sans border-t border-white/5">
      {/* Glow rings */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[350px] h-[350px] rounded-full radial-glow-blue opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[350px] h-[350px] rounded-full radial-glow-purple opacity-25 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-bold tracking-[0.3em] text-accent-blue"
          >
            Milestones
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Prizes & Achievements
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"
          />
        </div>

        {/* First Place Winners Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              onMouseEnter={() => triggerConfetti(idx === 0 ? "blue" : "purple")}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group select-none cursor-pointer"
            >
              {/* Decorative side accent */}
              <div className={`absolute top-0 bottom-0 left-0 w-[4px] transition-all duration-300 ${
                idx === 0 ? "bg-accent-blue shadow-neon-blue" : "bg-accent-purple shadow-neon-purple"
              }`} />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                      <Trophy className={`h-6 w-6 ${idx === 0 ? "text-accent-blue" : "text-accent-purple"}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-base md:text-lg font-extrabold text-white">
                        {ach.title}
                      </h3>
                      <p className={`text-xs font-mono font-bold uppercase ${idx === 0 ? "text-accent-blue" : "text-accent-purple"}`}>
                        {ach.event}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-white/40 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                    {ach.year}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                  {ach.description}
                </p>

                {/* Sub details highlights */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                    Execution Highlights
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/75 font-mono">
                    {ach.details?.map(d => (
                      <div key={d} className="flex items-center space-x-1.5">
                        <Star className={`h-3 w-3 ${idx === 0 ? "text-accent-blue" : "text-accent-purple"}`} />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] text-white/40 font-mono">
                  <span>Hover to trigger celebration</span>
                  <Sparkles className={`h-3.5 w-3.5 animate-pulse ${idx === 0 ? "text-accent-blue" : "text-accent-purple"}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Participation Timeline Grid */}
        <div className="space-y-6 pt-8">
          <h3 className="text-center font-display text-lg font-bold text-white/80">
            Hackathons & Coding Participations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTICIPATIONS.map((part, idx) => (
              <motion.div
                key={part.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="glass-panel p-4 rounded-xl text-center space-y-1 hover:border-white/15 transition-all cursor-default"
              >
                <h4 className="font-display text-xs font-bold text-white tracking-tight">
                  {part.name}
                </h4>
                <p className="text-[10px] text-white/50 font-mono">
                  {part.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
