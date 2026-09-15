"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-2xl mx-auto px-6 py-6"
    >
      <h2 className="text-lg font-display font-semibold text-foreground mb-3">
        About
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        I&apos;m a final-year engineering student at MKSSS Cummins College of Engineering for Women, Pune. I build high-performance backend systems, distributed queue workflows, and intelligent RAG-driven AI pipelines. I&apos;m passionate about software architecture, Java/Spring Boot ecosystems, and bridging the gap between infrastructure and practical AI.
      </p>
    </motion.section>
  );
}
