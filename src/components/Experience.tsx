"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "AI & Distributed Systems Builder",
    company: "MKSSS Cummins CoE (Systems Development)",
    duration: "2024 - Present",
    description: "Built SpecVLM speculative decoding pipeline for Vision-Language Models, achieving 1.8x latency reduction. Created PraxisAI RAG platform with pgvector and Supabase. Optimized KV Cache memory with paged attention.",
  },
  {
    role: "Full Stack & Backend Architect",
    company: "Developer Core (Independent Portfolio)",
    duration: "2023 - 2024",
    description: "Designed NexFlow event-driven workflow automation with BullMQ and Redis. Engineered secure REST APIs with Spring Boot and Hibernate. Built interactive frontends with Next.js 15.",
  },
];

export default function Experience() {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="max-w-2xl mx-auto px-6 py-6"
    >
      <h2 className="text-lg font-display font-semibold text-foreground mb-4">
        Experience
      </h2>
      <div className="space-y-4">
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="glass-card rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Briefcase className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{exp.role}</h3>
                <p className="text-xs text-muted-foreground">{exp.company} · {exp.duration}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
