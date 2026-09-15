"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <div className="divide-y divide-white/5">
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
