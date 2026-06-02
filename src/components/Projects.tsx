"use client";

import { motion } from "framer-motion";


const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const PROJECTS = [
  {
    title: "SpecVLM",
    description: "Speculative decoding pipeline for Vision-Language Models. Accelerates multimodal inference by 1.8x using a draft-verify architecture with paged KV caching.",
    tags: ["PyTorch", "CUDA", "vLLM", "SGLang", "Python"],
    github: "#",
  },
  {
    title: "PraxisAI",
    description: "Multi-tenant enterprise RAG platform with document ingestion, recursive chunking, pgvector similarity search, and secure Row-Level Security.",
    tags: ["Next.js", "Supabase", "pgvector", "OpenAI", "Drizzle ORM"],
    github: "#",
  },
  {
    title: "NexFlow",
    description: "Event-driven workflow automation engine. Processes webhook payloads via BullMQ workers and Redis, with automatic retries and PostgreSQL persistence.",
    tags: ["Node.js", "BullMQ", "Redis", "Docker", "PostgreSQL"],
    github: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Projects() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-2xl mx-auto px-6 py-6"
    >
      <h2 className="text-lg font-display font-semibold text-foreground mb-4">
        Projects
      </h2>
      <div className="space-y-4">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="glass-card rounded-xl p-5 group hover:border-accent-blue/40 transition-colors duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display font-semibold text-foreground text-sm">
                {project.title}
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-blue transition-colors flex-shrink-0"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 text-muted-foreground font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
