"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BrainCircuit, Database, Server, Terminal, 
  Workflow, CheckCircle, Code2, Globe
} from "lucide-react";

interface Skill {
  name: string;
  proficiency: "Specialized" | "Advanced" | "Proficient" | "Core Theory";
  detail: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai",
    name: "AI Engineering",
    icon: <BrainCircuit className="h-4 w-4" />,
    skills: [
      { name: "RAG Architecture", proficiency: "Specialized", detail: "Retrieval-Augmented Generation, document splitting, context injection." },
      { name: "VLM Inference", proficiency: "Specialized", detail: "Multimodal Vision-Language model speculative decoding optimizations." },
      { name: "Semantic Search", proficiency: "Advanced", detail: "Dense vector embeddings, dot product/cosine similarity comparison." },
      { name: "Vector Databases", proficiency: "Advanced", detail: "pgvector hooks, Supabase vector queries, embedding indexing." },
      { name: "OpenAI APIs", proficiency: "Proficient", detail: "Structured JSON schema output, tool calling, token management." }
    ]
  },
  {
    id: "backend",
    name: "Backend Architecture",
    icon: <Server className="h-4 w-4" />,
    skills: [
      { name: "Spring Boot", proficiency: "Specialized", detail: "Microservice assembly, Spring Security filters, component injection." },
      { name: "Node.js / Express", proficiency: "Advanced", detail: "Asynchronous backend loops, CORS configurations, REST endpoints." },
      { name: "REST APIs", proficiency: "Advanced", detail: "JSON resource mapping, status codes, query validation, and routing." },
      { name: "Hibernate ORM", proficiency: "Proficient", detail: "Java object relational mapping, lazy loading, criteria builder." },
      { name: "Workflow Automation", proficiency: "Specialized", detail: "Resilient queue pipelines using BullMQ, Redis cluster connections." }
    ]
  },
  {
    id: "languages",
    name: "Languages",
    icon: <Terminal className="h-4 w-4" />,
    skills: [
      { name: "Java", proficiency: "Advanced", detail: "Multithreading, OOP paradigms, Streams API, collections framework." },
      { name: "TypeScript", proficiency: "Advanced", detail: "Strict compile safety, interfaces, generic types, Union types." },
      { name: "JavaScript (ES6+)", proficiency: "Advanced", detail: "Event loop execution, promises, closures, dynamic scoping." },
      { name: "Python", proficiency: "Proficient", detail: "PyTorch tensor operations, CSV modeling, simple scripting." },
      { name: "SQL", proficiency: "Advanced", detail: "Join maps, subqueries, trigger statements, index structures." }
    ]
  },
  {
    id: "databases",
    name: "Databases & SQL",
    icon: <Database className="h-4 w-4" />,
    skills: [
      { name: "PostgreSQL", proficiency: "Advanced", detail: "High-performance relational querying, trigger functions, backups." },
      { name: "MongoDB", proficiency: "Proficient", detail: "Document modeling, aggregate lookup chains, BSON operations." },
      { name: "Supabase", proficiency: "Advanced", detail: "Real-time subscriptions, edge routing, Row-Level Security rules." },
      { name: "Oracle SQL / PL/SQL", proficiency: "Proficient", detail: "Stored procedures, cursors, custom relational views." }
    ]
  },
  {
    id: "devops",
    name: "DevOps & Testing",
    icon: <Workflow className="h-4 w-4" />,
    skills: [
      { name: "Docker", proficiency: "Proficient", detail: "Multi-stage image building, container networking, mounting volumes." },
      { name: "Playwright", proficiency: "Advanced", detail: "Browser automation testing, visual regressions, mock endpoints." },
      { name: "JUnit / Mockito", proficiency: "Advanced", detail: "Unit testing code mocks, assertion assertions, test runners." },
      { name: "GitHub Actions CI/CD", proficiency: "Proficient", detail: "Workflow orchestration, automated lint-checking, testing runs." },
      { name: "API Testing", proficiency: "Advanced", detail: "Supertest validation, Postman collection scripting." }
    ]
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: <Globe className="h-4 w-4" />,
    skills: [
      { name: "React.js", proficiency: "Advanced", detail: "Custom hooks, component state caching, performance optimization." },
      { name: "Next.js 15 (App Router)", proficiency: "Advanced", detail: "Server actions, dynamic routing, metadata injection, SSR compilation." },
      { name: "Tailwind CSS", proficiency: "Advanced", detail: "Responsive utility layout, complex responsive CSS configurations." },
      { name: "Angular Concepts", proficiency: "Core Theory", detail: "Dependency injection flow, component structure model." }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("ai");

  const activeSkills = SKILL_CATEGORIES.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="relative py-24 bg-black/40 overflow-hidden font-sans border-t border-white/5">
      {/* Background glow overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full radial-glow-blue opacity-25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-bold tracking-[0.3em] text-accent-purple"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Technical Skill Ecosystem
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-accent-purple to-pink-500 mx-auto"
          />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3">
          {SKILL_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border clickable ${
                  isActive
                    ? "bg-accent-blue/15 border-accent-blue text-accent-blue shadow-neon-blue"
                    : "bg-white/5 border-white/5 text-white/60 hover:border-white/10 hover:text-white"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Skill Cards Grid */}
        <div className="min-h-[250px]">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {activeSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: idx * 0.05 
                  }}
                  className="glass-panel p-6 rounded-xl hover:border-white/15 transition-colors relative group cursor-default overflow-hidden"
                >
                  {/* Hover spotlight border gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base md:text-lg font-bold text-white tracking-tight group-hover:text-accent-blue transition-colors">
                        {skill.name}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest font-extrabold uppercase ${
                        skill.proficiency === "Specialized" 
                          ? "bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                          : skill.proficiency === "Advanced"
                          ? "bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
                          : skill.proficiency === "Proficient"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-white/10 text-white/50 border border-white/10"
                      }`}>
                        {skill.proficiency}
                      </span>
                    </div>
                    <p className="text-xs text-white/65 leading-relaxed">
                      {skill.detail}
                    </p>
                    
                    {/* Visual Progress Line */}
                    <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ 
                          width: skill.proficiency === "Specialized" 
                            ? "95%" 
                            : skill.proficiency === "Advanced"
                            ? "85%"
                            : skill.proficiency === "Proficient"
                            ? "70%"
                            : "45%"
                        }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        className={`h-full rounded-full ${
                          skill.proficiency === "Specialized"
                            ? "bg-accent-blue"
                            : skill.proficiency === "Advanced"
                            ? "bg-accent-purple"
                            : skill.proficiency === "Proficient"
                            ? "bg-emerald-400"
                            : "bg-white/30"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
