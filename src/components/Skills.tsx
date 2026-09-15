"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Backend & Frameworks",
    skills: ["Spring Boot", "Node.js", "Express", "Hibernate", "REST APIs"],
  },
  {
    category: "Databases & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "pgvector"],
  },
  {
    category: "AI / ML",
    skills: ["RAG Architecture", "VLM Inference", "Semantic Search", "OpenAI APIs", "PyTorch"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "BullMQ", "GitHub Actions", "Playwright", "JUnit"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
];

export default function Skills() {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="max-w-2xl mx-auto px-6 py-6"
    >
      <h2 className="text-lg font-display font-semibold text-foreground mb-4">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.category} className="glass-card rounded-xl p-4">
            <h3 className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-2">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 text-muted-foreground font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
