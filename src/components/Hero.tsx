"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail, Cpu, Terminal, Database } from "lucide-react";

const TYPING_ROLES = [
  "Java Developer",
  "Full Stack Engineer",
  "AI Systems Builder",
  "Backend Developer",
  "Problem Solver"
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 1. Dynamic Typing Rotation Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = TYPING_ROLES[roleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        if (typedText === currentRole) {
          timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before delete
          return;
        }
      } else {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
          return;
        }
      }
      
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // 2. High-Performance HTML5 Canvas Particle Grid System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = "rgba(0, 210, 255, 0.4)";
        c.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: 45 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 font-sans">
      {/* 1. Animated Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      {/* 2. Particle Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full"
      />

      {/* 3. Luxury Ambient Purple & Blue Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full radial-glow-blue opacity-50 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full radial-glow-purple opacity-50 blur-3xl animate-pulse-glow pointer-events-none" />

      {/* 4. Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left select-none">
        
        {/* Left Column: Technical Narrative (7 columns on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-8">
          
          {/* Core Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 border border-accent-blue/20 bg-accent-blue/5 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-accent-blue uppercase"
          >
            <Cpu className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Final-Year Software Engineering Architect</span>
          </motion.div>

          {/* Big Greeting */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-white/60 text-lg md:text-xl font-medium tracking-wide"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-display text-5xl md:text-7xl xl:text-8xl font-black tracking-tight"
            >
              <span className="text-white">Nandini </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-pink-500 bg-[size:200%_auto] animate-pulse-glow">
                Dhanrale
              </span>
            </motion.h1>
          </div>

          {/* Dynamic Typing Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-10 md:h-12 flex items-center justify-center lg:justify-start"
          >
            <p className="text-xl md:text-3xl font-display font-medium text-white/90">
              A passionate{" "}
              <span className="text-accent-blue font-bold tracking-wide typing-cursor">
                {typedText}
              </span>
            </p>
          </motion.div>

          {/* Summary Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-2xl text-sm md:text-base text-white/60 leading-relaxed font-sans text-center lg:text-left"
          >
            I am a final-year engineering student passionate about building intelligent software systems, 
            scalable backend architectures, AI-powered applications, and developer tools. Let's engineer the future.
          </motion.p>

          {/* Decorative Grid Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8 }}
            className="hidden md:flex justify-center lg:justify-start space-x-8 text-white/40 text-xs font-mono"
          >
            <div className="flex items-center space-x-1.5">
              <Terminal className="h-4 w-4 text-accent-blue" />
              <span>Java & Spring</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Database className="h-4 w-4 text-accent-purple" />
              <span>PostgreSQL / MongoDB</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Cpu className="h-4 w-4 text-pink-500" />
              <span>RAG & VLM Inference</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto"
          >
            {/* CTA: View Projects */}
            <button
              onClick={() => handleScrollTo("projects")}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-black font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-neon-blue hover:shadow-neon-purple hover:scale-105 active:scale-95 clickable"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* CTA: Download Resume */}
            <a
              href="#"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95 clickable relative overflow-hidden group"
            >
              {/* Pulsing ring */}
              <span className="absolute inset-0 bg-accent-blue/10 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100" />
              <FileDown className="h-4 w-4" />
              <span>Download Resume</span>
            </a>

            {/* CTA: Contact Me */}
            <button
              onClick={() => handleScrollTo("contact")}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-accent-blue/10 hover:border-accent-blue/30 active:scale-95 clickable"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </button>
          </motion.div>

        </div>

        {/* Right Column: Professional Appearance Frame (5 columns on desktop) */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Radial glow backdrop */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-pink-500 opacity-25 blur-3xl animate-pulse pointer-events-none" />

            {/* Floating Glassmorphic Image Frame */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-2xl overflow-hidden max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
            >
              <img
                src="/profile.png"
                alt="Nandini Dhanrale"
                className="rounded-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out shadow-inner"
              />
              
              {/* Glass sheen reflex filter overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
