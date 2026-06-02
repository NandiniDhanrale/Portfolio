"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-12">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center sm:flex-row sm:items-end gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 bg-white/5 flex-shrink-0 shadow-lg shadow-accent-blue/10"
        >
          <Image
            src="/profile.png"
            alt="Nandini Dhanrale"
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center sm:text-left"
        >
          <h1 className="text-3xl font-bold font-display text-foreground tracking-tight">
            Nandini Dhanrale
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Software Developer & AI Systems Builder
          </p>
          <div className="flex items-center gap-2 mt-1.5 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Java • Spring Boot • RAG • Distributed Systems
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
