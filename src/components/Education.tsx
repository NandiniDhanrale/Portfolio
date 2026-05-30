"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Star, Compass } from "lucide-react";

interface EducationItem {
  degree: string;
  major: string;
  school: string;
  duration: string;
  grade: string;
  location: string;
  courses: string[];
  achievements: string[];
}

const EDUCATION_HISTORY: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    major: "Electronics & Telecommunication Engineering",
    school: "MKSSS Cummins College of Engineering for Women",
    duration: "2023 - 2026",
    location: "Pune, MH, India",
    grade: "CGPA: 9.15 / 10.0",
    courses: [
      "AI Systems Foundations", 
      "Computer Networks & Protocols", 
      "Database Systems", 
      "Embedded Systems Architecture", 
      "Digital Signal Processing", 
      "Linear Algebra & Probabilities"
    ],
    achievements: [
      "First Place Winner at Code Club CODIGO 3.1 Hackathon",
      "Core Member of the campus coding club, hosting Java programming workshops"
    ]
  },
  {
    degree: "Diploma in Computer Technology",
    major: "Computer Engineering & Systems",
    school: "K.K. Wagh Polytechnic",
    duration: "2021 - 2023",
    location: "Nashik, MH, India",
    grade: "Percentage: 94.85% (Distinction)",
    courses: [
      "Object-Oriented Programming (Java/C++)", 
      "Data Structures & Algorithms", 
      "Relational Database Management (SQL)", 
      "Software Engineering Methods", 
      "Operating Systems"
    ],
    achievements: [
      "Ranked Top 2% in the State Department Technical Board examinations",
      "First Place Winner at Loop Buffer 5.0 Hackathon"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-black/20 overflow-hidden font-sans border-t border-white/5">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full radial-glow-blue opacity-15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-bold tracking-[0.3em] text-accent-blue"
          >
            Education Path
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Academic Foundation
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"
          />
        </div>

        {/* Vertical timeline stack */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
          {EDUCATION_HISTORY.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Cap node */}
              <span className="absolute -left-[21px] top-2 flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-[#0F0F10] transition-all duration-300 group-hover:border-accent-purple/50 group-hover:scale-110 z-10">
                <GraduationCap className="h-5 w-5 text-accent-purple" />
              </span>

              {/* Glass Card Container */}
              <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/15 transition-all duration-300 space-y-6 relative overflow-hidden cursor-default">
                {/* Visual decoration blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 relative z-10">
                  <div className="space-y-1">
                    <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-accent-purple">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{edu.duration}</span>
                    </span>
                    <h3 className="font-display text-lg md:text-xl font-extrabold text-white group-hover:text-accent-purple transition-colors">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-semibold text-white/80 font-mono tracking-wide">
                      {edu.major}
                    </h4>
                    <p className="text-xs text-white/50">
                      {edu.school} &bull; {edu.location}
                    </p>
                  </div>
                  
                  {/* Grade Badge */}
                  <span className="flex-shrink-0 w-fit text-xs font-mono font-bold text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-full">
                    {edu.grade}
                  </span>
                </div>

                {/* Grid layout for curriculum and extra achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5 relative z-10">
                  {/* Key Courses */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 font-mono">
                      Curriculum Pillars
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map(course => (
                        <span key={course} className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-white/70">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Scholastic Achievements */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 font-mono">
                      Academic Accomplishments
                    </span>
                    <ul className="space-y-2 text-xs text-white/75 leading-relaxed font-sans">
                      {edu.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start space-x-2">
                          <Star className="h-3.5 w-3.5 text-accent-blue mt-0.5 flex-shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
