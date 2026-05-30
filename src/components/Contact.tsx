"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, AlertTriangle, CheckCircle, Loader } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Status states
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please complete all inputs before sending.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch message.");
      }

      setStatus("success");
      setSuccessMsg(data.message || "Message dispatched successfully!");
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-black/40 overflow-hidden font-sans border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full radial-glow-purple opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-bold tracking-[0.3em] text-accent-blue"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Info & Social anchors (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-display text-lg md:text-xl font-extrabold text-white">
                Contact Telemetry
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed font-sans">
                I am always open to discussing advanced AI systems architecture, microservices backend designs, 
                full-stack production pipelines, and developer tool ideas. Let's start the conversation!
              </p>
            </div>

            {/* Structured details */}
            <div className="space-y-4 font-mono text-xs md:text-sm">
              <div className="flex items-center space-x-3 text-white/80">
                <div className="p-2.5 bg-white/5 border border-white/5 rounded-lg">
                  <Mail className="h-4 w-4 text-accent-blue" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block">Direct Email</span>
                  <span>nandinidhanrale@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-white/80">
                <div className="p-2.5 bg-white/5 border border-white/5 rounded-lg">
                  <Github className="h-4 w-4 text-accent-purple" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block">GitHub Profile</span>
                  <span>github.com/nandinidhanrale</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-white/80">
                <div className="p-2.5 bg-white/5 border border-white/5 rounded-lg">
                  <Linkedin className="h-4 w-4 text-accent-blue" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block">LinkedIn Connection</span>
                  <span>linkedin.com/in/nandinidhanrale</span>
                </div>
              </div>
            </div>

            {/* Social icons grid */}
            <div className="flex space-x-3 border-t border-white/5 pt-6">
              <a 
                href="https://github.com" 
                target="_blank"
                className="p-3 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/20 transition-all hover:scale-105 clickable"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                className="p-3 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/20 transition-all hover:scale-105 clickable"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5 animate-pulse" />
              </a>
              <a 
                href="mailto:nandinidhanrale@gmail.com" 
                className="p-3 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/20 transition-all hover:scale-105 clickable"
                title="Direct Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right panel: Glassmorphic contact form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Alert Message triggers */}
              <AnimatePresence mode="wait">
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center space-x-2.5 p-3 rounded-lg border border-red-500/20 bg-red-500/10 text-red-400 text-xs md:text-sm font-medium"
                  >
                    <AlertTriangle className="h-4 w-4" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center space-x-2.5 p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs md:text-sm font-medium"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>{successMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name field */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/40 font-mono">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder-white/20 outline-none focus:border-accent-blue focus:ring-0 transition-colors"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === "loading"}
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/40 font-mono">
                  Your Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder-white/20 outline-none focus:border-accent-blue focus:ring-0 transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                />
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/40 font-mono">
                  Message Payload
                </label>
                <textarea
                  placeholder="Describe your project concept, architectural challenge, or engineering opening..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder-white/20 outline-none focus:border-accent-blue focus:ring-0 transition-colors resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={status === "loading"}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-black font-bold text-sm tracking-wider uppercase transition-all shadow-neon-blue hover:shadow-neon-purple disabled:opacity-50 clickable"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin text-black" />
                    <span>Dispatched payload...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-black" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
