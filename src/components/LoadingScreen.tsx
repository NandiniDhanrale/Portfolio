"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "Initializing developer profile...",
  "Loading core: Java SDK, Spring Boot, Node.js v22",
  "Optimizing SpecVLM: KV Cache and distributed tensor routing",
  "Mounting Vector DB: Semantic search index & pgvector hooks",
  "Spawning NexFlow automation: Webhook triggers & BullMQ clusters",
  "Architecting system layers: Student → Builder → Engineer → Architect",
  "System fully assembled. Launching environment...",
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [phase, setPhase] = useState<"logs" | "brand" | "done">("logs");

  useEffect(() => {
    // Check if user has already loaded in this session to skip loading screen
    const hasLoaded = sessionStorage.getItem("portfolio-loaded");
    if (hasLoaded === "true") {
      onComplete();
      return;
    }

    // Step 1: Terminal Log Simulation
    if (currentLogIndex < BOOT_LOGS.length) {
      const delay = currentLogIndex === 0 ? 300 : currentLogIndex === BOOT_LOGS.length - 1 ? 800 : 250;
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, BOOT_LOGS[currentLogIndex]]);
        setCurrentLogIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Step 2: Transition to Brand Mon Monogram
      const timer = setTimeout(() => {
        setPhase("brand");
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentLogIndex, onComplete]);

  useEffect(() => {
    if (phase === "brand") {
      const timer = setTimeout(() => {
        setPhase("done");
        sessionStorage.setItem("portfolio-loaded", "true");
        // Extra padding before removing overlay
        setTimeout(onComplete, 800);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0A0A0A] font-mono text-white p-4 select-none"
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {phase === "logs" ? (
            <div className="w-full max-w-2xl px-6 py-8 rounded-lg border border-white/5 bg-[#0F0F0F]/60 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center space-x-2 border-b border-white/5 pb-3 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-white/40 ml-2">nandini@terminal ~ portfolio-boot.sh</span>
              </div>
              <div className="space-y-2 text-xs md:text-sm leading-relaxed max-h-[300px] overflow-y-auto">
                {logs.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={
                      index === BOOT_LOGS.length - 1
                        ? "text-accent-blue font-semibold"
                        : "text-white/80"
                    }
                  >
                    <span className="text-accent-purple mr-2">❯</span> {log}
                  </motion.div>
                ))}
                <span className="inline-block h-4 w-2 bg-accent-blue animate-pulse ml-1" />
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* Glow ring in background */}
                <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple opacity-20 blur-3xl animate-pulse" />
                <h1 className="relative font-display text-4xl md:text-6xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
                  NANDINI DHANRALE
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xs md:text-sm tracking-[0.4em] uppercase text-accent-blue"
              >
                Future Software Architect
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 240 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                className="h-[1px] bg-gradient-to-r from-transparent via-accent-blue to-transparent mx-auto"
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
