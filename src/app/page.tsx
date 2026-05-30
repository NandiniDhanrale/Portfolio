"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/* 1. Cinematic Terminal Loading Screen */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* 2. Main Page Render */}
      <AnimatePresence>
        {loadingComplete && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col relative"
          >
            {/* Sections */}
            <div id="home">
              <Hero />
            </div>
            
            <div id="about">
              <About />
            </div>

            <div id="skills">
              <Skills />
            </div>

            <div id="projects">
              <Projects />
            </div>

            <div id="achievements">
              <Achievements />
            </div>

            <div id="experience">
              <Experience />
            </div>

            <div id="education">
              <Education />
            </div>

            <div id="github">
              <GitHubSection />
            </div>

            <div id="contact">
              <Contact />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
