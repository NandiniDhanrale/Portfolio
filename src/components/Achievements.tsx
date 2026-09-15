"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const ACHIEVEMENTS = [
  "First Place Winner — Code Club CODIGO 3.1 Hackathon (150+ participants)",
  "First Place Winner — Loop Buffer 5.0 Hackathon",
  "Ranked Top 19% — Kaggle Binary Classification with Bank Dataset",
];

export default function Achievements() {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="max-w-2xl mx-auto px-6 py-6"
    >
      <h2 className="text-lg font-display font-semibold text-foreground mb-4">
        Achievements
      </h2>
      <div className="space-y-3">
        {ACHIEVEMENTS.map((achievement, i) => (
          <div
            key={i}
            className="flex items-start gap-3 glass-card rounded-xl p-4"
          >
            <Award className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">{achievement}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
