"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Server, Cpu, Workflow } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  tagline: string;
  icon: React.ReactNode;
  highlights: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ai-engineer",
    role: "AI & Distributed Systems Builder",
    company: "MKSSS Cummins CoE (Systems Development)",
    duration: "2024 - Present",
    location: "Pune, MH, India",
    tagline: "Engineering speculative decoding models and vector search clusters.",
    icon: <Cpu className="h-5 w-5 text-accent-blue" />,
    skills: ["Speculative Decoding", "CUDA", "vLLM", "pgvector", "RAG Pipeline", "Python"],
    highlights: [
      "Built SpecVLM, a speculative decoding inference pipeline for Vision-Language Models, achieving a 1.8x reduction in multimodal latency using PyTorch and vLLM.",
      "Optimized KV Cache memory maps, leveraging SGLang Paged Attention schemes to completely eliminate GPU fragmentations during long concurrent sessions.",
      "Created PraxisAI, integrating OpenAI embedding models with pgvector and Row-Level Security rules in Supabase to provide secure enterprise retrieval."
    ]
  },
  {
    id: "backend-developer",
    role: "Full Stack & Backend Architect",
    company: "Developer Core (Independent Portfolio)",
    duration: "2023 - 2024",
    location: "Pune, MH, India",
    tagline: "Architecting event-driven queues and secure REST microservices.",
    icon: <Server className="h-5 w-5 text-accent-purple" />,
    skills: ["Spring Boot", "Java", "Redis", "BullMQ", "PostgreSQL", "Next.js", "Docker"],
    highlights: [
      "Designed and deployed NexFlow, an event-driven workflow automation platform that processes webhook events asynchronously via BullMQ workers and Redis caching.",
      "Engineered secure modular REST API routes using Spring Boot, securing token auth filters, mapping complex relationships with Hibernate ORM, and writing robust PL/SQL stored procedures.",
      "Developed interactive frontends with Next.js 15 App Router, bundling strict type schemas, global providers, and fast Edge API routes."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-black/20 overflow-hidden font-sans border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full radial-glow-purple opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full radial-glow-blue opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-bold tracking-[0.3em] text-accent-purple"
          >
            Engineering Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Engineering Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-accent-purple to-pink-500 mx-auto"
          />
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Connector node */}
              <span className="absolute -left-[21px] top-2 flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-[#0F0F10] transition-all duration-300 group-hover:border-accent-blue/50 group-hover:scale-110 z-10">
                {exp.icon}
              </span>

              {/* Glowing ring background */}
              <div className="absolute -inset-y-4 -inset-x-2 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Role Info */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-accent-blue">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-extrabold text-white group-hover:text-accent-blue transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-white/80">
                    {exp.company}
                  </h4>
                  <p className="text-xs text-white/50 italic">
                    {exp.location}
                  </p>
                  <p className="text-xs font-medium text-accent-purple leading-relaxed pt-2">
                    {exp.tagline}
                  </p>
                  
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-white/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Detailed Accomplishments */}
                <div className="lg:col-span-7 space-y-3 font-sans text-xs md:text-sm text-white/70 leading-relaxed">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 font-mono block">
                    Core Technical Accomplishments
                  </span>
                  <ul className="space-y-3">
                    {exp.highlights.map((high, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2.5">
                        <ChevronRight className="h-4 w-4 text-accent-blue mt-0.5 flex-shrink-0" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
