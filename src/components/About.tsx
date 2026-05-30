"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, Database, GitMerge, GraduationCap, Server } from "lucide-react";

const CAREER_STORY = [
  {
    phase: "Student",
    title: "Learning the Foundations",
    description: "Started with computer engineering principles, data structures, and the Java ecosystem. Built strong logical thinking habits."
  },
  {
    phase: "Builder",
    title: "Creating Interactive Projects",
    description: "Built full-stack React projects, designed robust REST APIs using Node.js, and experimented with PostgreSQL / MongoDB databases."
  },
  {
    phase: "Engineer",
    title: "Scaling Production Systems",
    description: "Integrated Vision-Language speculative decoding, designed Event-Driven architectures, and optimized pgvector-based retrieval flows."
  },
  {
    phase: "Architect",
    title: "Designing Future Platforms",
    description: "Aspiring to design distributed, highly-available cloud networks integrating microservices, caching, and real-time AI agents."
  }
];

const STRENGTH_CARDS = [
  {
    icon: <Server className="h-6 w-6 text-accent-blue" />,
    title: "Backend Engineering",
    description: "Designing reliable RESTful APIs, utilizing Spring Boot and Express.js, handling ORMs like Hibernate, and managing relational databases with complex PL/SQL scripting."
  },
  {
    icon: <Cpu className="h-6 w-6 text-accent-purple" />,
    title: "AI Systems & RAG",
    description: "Constructing advanced context-retrieval solutions using pgvector, optimizing speculative decoding pipelines for Vision-Language Models, and running local/distributed inferences."
  },
  {
    icon: <Code2 className="h-6 w-6 text-pink-500" />,
    title: "Full Stack Architecture",
    description: "Developing responsive frontend pages in React.js and Next.js, and deploying them onto Vercel with structured server routes, complete security layers, and modern UI systems."
  },
  {
    icon: <GitMerge className="h-6 w-6 text-emerald-400" />,
    title: "Distributed Workflows",
    description: "Implementing resilient asynchronous queue managers using Redis and BullMQ, handling event triggers, and managing Dockerized container pipelines."
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black/20 overflow-hidden font-sans border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full radial-glow-purple opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full radial-glow-blue opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-bold tracking-[0.3em] text-accent-blue"
          >
            My Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Engineering with Purpose
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"
          />
        </div>

        {/* Narrative Biography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Biography Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold tracking-tight text-white"
            >
              Building Intelligent, High-Performance Software
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed"
            >
              <p>
                I am a final-year Electronics & Telecommunication student at MKSSS Cummins College of Engineering for Women in Pune. 
                Despite my academic major in ETc, my core passion has always converged on computer systems, software architecture, 
                and advanced machine learning pipelines.
              </p>
              <p>
                From coding Java structures to engineering spec-decoding Vision Language Models, I've spent the past few years 
                bridging the boundary between pure system infrastructure and practical artificial intelligence.
              </p>

              {/* Emphasized Quote Card */}
              <div className="relative p-6 rounded-xl border-l-4 border-accent-blue bg-white/5 border-white/5 my-6 overflow-hidden">
                <span className="absolute right-4 top-2 text-white/5 font-serif text-8xl pointer-events-none">“</span>
                <p className="font-display text-base md:text-lg font-medium text-white italic relative z-10 leading-relaxed">
                  "I enjoy building scalable systems that combine modern software engineering with artificial intelligence."
                </p>
              </div>

              <p>
                Whether it's deploying background worker nodes via BullMQ, optimizing vector search precision, 
                or writing modular, unit-tested Spring Boot code, I thrive when building tools that accelerate workflows 
                and empower developers.
              </p>
            </motion.div>
          </div>

          {/* Right: Technical Story Flow (Student -> Builder -> Engineer -> Architect) */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent-purple px-2">
              The Journey Breakdown
            </h4>
            <div className="relative border-l border-white/10 pl-6 space-y-6 ml-3">
              {CAREER_STORY.map((step, idx) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Glowing vertical point */}
                  <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-blue bg-[#0A0A0A] transition-all duration-300 group-hover:scale-125 group-hover:bg-accent-purple" />
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-accent-blue uppercase">
                      {step.phase}
                    </span>
                    <h5 className="text-sm md:text-base font-bold text-white group-hover:text-accent-blue transition-colors">
                      {step.title}
                    </h5>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Modular Strengths Grid */}
        <div className="space-y-8">
          <h3 className="text-center font-display text-lg font-bold text-white/80">
            Core Engineering Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRENGTH_CARDS.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="glass-panel p-6 rounded-xl space-y-4 hover:border-white/20 transition-all duration-300 cursor-default"
              >
                <div className="p-3 bg-white/5 border border-white/5 rounded-lg w-fit">
                  {card.icon}
                </div>
                <h4 className="font-display text-base font-bold text-white tracking-tight">
                  {card.title}
                </h4>
                <p className="text-xs text-white/65 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
