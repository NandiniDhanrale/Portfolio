"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    degree: "B.E. Electronics & Telecommunication",
    school: "MKSSS Cummins College of Engineering for Women, Pune",
    duration: "2023 - 2026",
    grade: "CGPA: 7.2 / 10.0",
  },
  {
    degree: "Diploma in Computer Technology",
    school: "K.K. Wagh Polytechnic, Nashik",
    duration: "2021 - 2023",
    grade: "86%",
  },
];

export default function Education() {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="max-w-2xl mx-auto px-6 py-6"
    >
      <h2 className="text-lg font-display font-semibold text-foreground mb-4">
        Education
      </h2>
      <div className="space-y-4">
        {EDUCATION.map((edu, i) => (
          <div key={i} className="glass-card rounded-xl p-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-xs text-muted-foreground">{edu.school}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">{edu.duration}</span>
                  <span className="text-xs text-accent-blue font-medium">{edu.grade}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
