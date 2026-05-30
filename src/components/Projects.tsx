"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, Cpu, LayoutGrid, CheckCircle2, 
  Settings, Layers, AlertCircle, Compass, Zap, Workflow,
  BrainCircuit
} from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


interface ProjectTab {
  id: "overview" | "architecture" | "challenges" | "learnings";
  label: string;
}

const TABS: ProjectTab[] = [
  { id: "overview", label: "Overview" },
  { id: "architecture", label: "Architecture" },
  { id: "challenges", label: "Challenges & Solutions" },
  { id: "learnings", label: "Key Learnings" }
];

export default function Projects() {
  const [activeTabs, setActiveTabs] = useState<Record<string, "overview" | "architecture" | "challenges" | "learnings">>({
    specvlm: "overview",
    praxisai: "overview",
    nexflow: "overview"
  });

  const handleTabChange = (projectId: string, tabId: "overview" | "architecture" | "challenges" | "learnings") => {
    setActiveTabs(prev => ({ ...prev, [projectId]: tabId }));
  };

  // SpecVLM interactive architecture state
  const [specStep, setSpecStep] = useState<"idle" | "draft" | "verify" | "speedup">("idle");
  // PraxisAI interactive vector state
  const [ragStep, setRagStep] = useState<"query" | "embedding" | "retrieval" | "synthesis">("query");
  // NexFlow interactive queue state
  const [queueStatus, setQueueStatus] = useState<"idle" | "webhook" | "redis" | "worker">("idle");

  return (
    <section id="projects" className="relative py-24 bg-black/20 overflow-hidden font-sans border-t border-white/5">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full radial-glow-blue opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full radial-glow-purple opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-bold tracking-[0.3em] text-accent-blue"
          >
            Engineering Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Featured Productions
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"
          />
        </div>

        {/* -------------------------------------------------------------------------------- */}
        {/* PROJECT 1: SPECVLM (Featured) */}
        {/* -------------------------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl border border-white/10 overflow-hidden p-6 md:p-8 space-y-6 relative"
        >
          <div className="absolute top-0 right-0 h-[3px] w-48 bg-gradient-to-r from-accent-blue to-accent-purple shadow-neon-blue" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-accent-blue bg-accent-blue/10 uppercase">
                <Cpu className="h-3 w-3 animate-pulse" />
                <span>Featured Project // AI Systems</span>
              </span>
              <h3 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                SpecVLM
              </h3>
              <p className="text-sm md:text-base text-white/60 font-semibold tracking-wide uppercase text-accent-purple">
                Accelerating Vision-Language Model Inference
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <a href="#" className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors clickable">
                <Github className="h-4 w-4" />
                <span>Source Code</span>
              </a>
              <a href="#" className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-accent-blue hover:scale-105 text-xs font-bold text-black transition-all clickable shadow-neon-blue">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Sub Tab Buttons */}
          <div className="flex border-b border-white/5 overflow-x-auto pb-1 gap-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange("specvlm", tab.id)}
                className={`px-4 py-2 rounded-t-lg text-xs md:text-sm font-semibold transition-all duration-300 relative clickable ${
                  activeTabs.specvlm === tab.id
                    ? "text-accent-blue bg-white/5 border border-white/10 border-b-transparent"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sub Tab Content */}
          <div className="min-h-[300px] flex flex-col justify-center">
            {activeTabs.specvlm === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-7 space-y-4 text-xs md:text-sm text-white/70 leading-relaxed">
                  <p className="text-sm md:text-base text-white font-medium">
                    Built a speculative decoding pipeline for Vision-Language Models (VLMs) to improve multimodal inference throughput and reduce latency.
                  </p>
                  <p>
                    Vision-Language models suffer from high autoregressive latency. By pairing a small, fast <b>Draft Model</b> (e.g. LLaVA-1.5-7B) with a high-accuracy <b>Verification Model</b> (e.g. LLaVA-1.5-13B), SpecVLM speculatively drafts several candidate tokens, and verifies them in parallel.
                  </p>
                  <p>
                    This pipeline achieves up to a <b>1.8x latency reduction</b> while retaining 100% mathematical output parity with the Verification Model.
                  </p>
                  <div className="pt-2">
                    <h4 className="font-semibold text-white mb-2">Technical Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Speculative Decoding", "KV Cache Optimization", "Distributed Inference", "PyTorch", "CUDA", "vLLM", "SGLang"].map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-white/60 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center space-y-4 bg-black/40 border border-white/5 rounded-xl p-4 md:p-6">
                  <div className="flex items-center space-x-2 text-accent-blue font-mono text-xs">
                    <Zap className="h-4 w-4 animate-bounce" />
                    <span>SPECULATION BENCHMARK SUMMARY</span>
                  </div>
                  <div className="space-y-3 font-mono text-xs text-white/80">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Vanilla Autoregressive Time:</span>
                      <span className="text-red-400">120ms/tok</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>SpecVLM Speculative Time:</span>
                      <span className="text-emerald-400 font-bold">66ms/tok</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Average Acceptance Rate:</span>
                      <span className="text-accent-purple">3.4 tokens/step</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>KV Cache Compression Ratio:</span>
                      <span>1.5x</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Measured Throughput Boost:</span>
                      <span className="text-accent-blue font-bold">+82.4%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTabs.specvlm === "architecture" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-center"
              >
                <div className="flex justify-center space-x-3 mb-2">
                  <button
                    onClick={() => setSpecStep("draft")}
                    className={`px-3 py-1.5 rounded border text-xs transition-colors clickable ${
                      specStep === "draft" ? "bg-accent-blue/20 border-accent-blue text-accent-blue" : "border-white/5 text-white/50"
                    }`}
                  >
                    1. Draft Tokens
                  </button>
                  <button
                    onClick={() => setSpecStep("verify")}
                    className={`px-3 py-1.5 rounded border text-xs transition-colors clickable ${
                      specStep === "verify" ? "bg-accent-purple/20 border-accent-purple text-accent-purple" : "border-white/5 text-white/50"
                    }`}
                  >
                    2. Parallel Verification
                  </button>
                  <button
                    onClick={() => setSpecStep("speedup")}
                    className={`px-3 py-1.5 rounded border text-xs transition-colors clickable ${
                      specStep === "speedup" ? "bg-pink-500/20 border-pink-500 text-pink-500" : "border-white/5 text-white/50"
                    }`}
                  >
                    3. Output Acceptance
                  </button>
                </div>

                {/* SVG Speculative Architecture Diagram */}
                <div className="w-full max-w-2xl mx-auto border border-white/5 bg-black/50 p-6 rounded-xl flex items-center justify-center min-h-[220px]">
                  <svg viewBox="0 0 600 220" className="w-full h-auto text-white">
                    {/* Input Token Box */}
                    <g transform="translate(10, 80)">
                      <rect width="80" height="60" rx="6" className="fill-white/5 stroke-white/20" />
                      <text x="40" y="35" textAnchor="middle" className="text-xs font-semibold fill-white">Input Frame</text>
                      <text x="40" y="50" textAnchor="middle" className="text-[9px] fill-white/40 font-mono">(Image+Text)</text>
                    </g>

                    {/* Path lines */}
                    <path d="M 90 110 L 140 60" className="stroke-white/20 fill-none" strokeWidth="2" strokeDasharray="3,3" />
                    <path d="M 90 110 L 140 160" className="stroke-white/20 fill-none" strokeWidth="2" strokeDasharray="3,3" />

                    {/* Draft Model (Upper branch) */}
                    <g transform="translate(140, 30)">
                      <rect width="140" height="60" rx="6" className={`transition-colors duration-300 ${
                        specStep === "draft" ? "fill-accent-blue/10 stroke-accent-blue" : "fill-white/5 stroke-white/20"
                      }`} />
                      <text x="70" y="30" textAnchor="middle" className="text-xs font-bold fill-white">Draft Model (Small VLM)</text>
                      <text x="70" y="45" textAnchor="middle" className="text-[9px] fill-accent-blue font-mono">Generates K Candidate Tokens</text>
                    </g>

                    {/* Verification Model (Lower branch) */}
                    <g transform="translate(140, 130)">
                      <rect width="140" height="60" rx="6" className={`transition-colors duration-300 ${
                        specStep === "verify" ? "fill-accent-purple/10 stroke-accent-purple" : "fill-white/5 stroke-white/20"
                      }`} />
                      <text x="70" y="30" textAnchor="middle" className="text-xs font-bold fill-white">Verifier VLM (Large)</text>
                      <text x="70" y="45" textAnchor="middle" className="text-[9px] fill-accent-purple font-mono">Parallel KV Cache Verification</text>
                    </g>

                    {/* Connection lines */}
                    <path d="M 280 60 L 330 110" className="stroke-white/20 fill-none" strokeWidth="2" />
                    <path d="M 280 160 L 330 110" className="stroke-white/20 fill-none" strokeWidth="2" />

                    {/* Evaluation Engine */}
                    <g transform="translate(330, 80)">
                      <rect width="120" height="60" rx="6" className={`transition-colors duration-300 ${
                        specStep === "speedup" ? "fill-pink-500/10 stroke-pink-500 shadow-neon-purple" : "fill-white/5 stroke-white/20"
                      }`} />
                      <text x="60" y="30" textAnchor="middle" className="text-xs font-semibold fill-white">Acceptance Test</text>
                      <text x="60" y="45" textAnchor="middle" className="text-[9px] fill-white/40 font-mono">Check logits & verify</text>
                    </g>

                    {/* Output */}
                    <path d="M 450 110 L 500 110" className="stroke-white/20 fill-none" strokeWidth="2" />
                    
                    <g transform="translate(500, 80)">
                      <rect width="90" height="60" rx="6" className="fill-white/5 stroke-white/20" />
                      <text x="45" y="35" textAnchor="middle" className="text-xs font-bold fill-white">Speedup</text>
                      <text x="45" y="50" textAnchor="middle" className="text-[10px] fill-emerald-400 font-bold font-mono">1.8x Faster</text>
                    </g>
                  </svg>
                </div>
                <p className="text-xs text-white/50 font-mono italic">
                  {specStep === "draft" && "Step 1: The small VLM drafting model processes the image embedding, generating 3-5 candidates extremely fast."}
                  {specStep === "verify" && "Step 2: The large verification model verifies all candidates in a single forward pass, using custom KV cache indices."}
                  {specStep === "speedup" && "Step 3: Verified tokens are committed. Rejected tokens are sliced out and corrected, boosting efficiency by 1.8x."}
                  {specStep === "idle" && "Click the architecture steps above to interact with the SpecVLM speculative decoding flow."}
                </p>
              </motion.div>
            )}

            {activeTabs.specvlm === "challenges" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm"
              >
                <div className="glass-panel p-5 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center space-x-2 text-red-400 font-semibold">
                    <AlertCircle className="h-4 w-4" />
                    <span>Challenge: KV Cache Fragmentation</span>
                  </div>
                  <p className="text-white/60">
                    Drafting multiple speculative candidates branch out. This causes heavy cache allocation overheads and standard contiguous GPU tensors quickly fragment, causing GPU out-of-memory errors during high concurrent inference.
                  </p>
                </div>

                <div className="glass-panel p-5 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Solution: Paged KV Caching</span>
                  </div>
                  <p className="text-white/60">
                    Implemented an integrated paged memory allocator using SGLang. Sliced key-value embeddings into non-contiguous physical pages. Used virtual lookups, reducing KV Cache requirements by 42% and enabling longer sequence processing.
                  </p>
                </div>

                <div className="glass-panel p-5 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center space-x-2 text-red-400 font-semibold">
                    <AlertCircle className="h-4 w-4" />
                    <span>Challenge: Multimodal Input Sync</span>
                  </div>
                  <p className="text-white/60">
                    Large vision-token embeddings (e.g. 576 image patches) dominate context size, leading to high latency spikes during verification since raw images had to be repeatedly loaded in verification loops.
                  </p>
                </div>

                <div className="glass-panel p-5 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Solution: Prefetched Tensor Binders</span>
                  </div>
                  <p className="text-white/60">
                    Designed a parallel prefetch thread using CUDA stream pinning. Cached image embeddings in GPU register memory once. Hooked them directly to verifier branches, completely cutting recurrent image processing overheads.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTabs.specvlm === "learnings" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 text-xs md:text-sm text-white/70"
              >
                <div className="border border-white/5 bg-white/5 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-white flex items-center space-x-2">
                    <Layers className="h-4 w-4 text-accent-blue" />
                    <span>System-Level Key Takeaways</span>
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <b>GPU Memory Bound vs Compute Bound</b>: Autoregressive decoding is primarily memory-bandwidth bound. Adding a draft model increases compute slightly but drastically reduces global memory loads.
                    </li>
                    <li>
                      <b>CUDA Inter-op</b>: Gained extensive hands-on experience orchestrating PyTorch streams, writing custom memory binders, and profiling tensor operations using NVIDIA Nsight.
                    </li>
                    <li>
                      <b>Statistical Integrity</b>: Verified that speculative decoding maintains mathematical output equivalence under strict verification boundaries, proving performance speedup does not compromise logic accuracy.
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* -------------------------------------------------------------------------------- */}
        {/* PROJECT 2: PRAXISAI */}
        {/* -------------------------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl border border-white/10 overflow-hidden p-6 md:p-8 space-y-6 relative"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-accent-purple bg-accent-purple/10 uppercase">
                <BrainCircuit className="h-3 w-3" />
                <span>AI Engineering // RAG Assistant Platform</span>
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                PraxisAI
              </h3>
              <p className="text-sm md:text-base text-white/60 font-semibold tracking-wide uppercase text-accent-blue">
                Enterprise RAG-Powered AI Platform
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <a href="#" className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors clickable">
                <Github className="h-4 w-4" />
                <span>Source Code</span>
              </a>
              <a href="#" className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-accent-purple hover:scale-105 text-xs font-bold text-black transition-all clickable shadow-neon-purple">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Sub Tab Buttons */}
          <div className="flex border-b border-white/5 overflow-x-auto pb-1 gap-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange("praxisai", tab.id)}
                className={`px-4 py-2 rounded-t-lg text-xs md:text-sm font-semibold transition-all duration-300 relative clickable ${
                  activeTabs.praxisai === tab.id
                    ? "text-accent-purple bg-white/5 border border-white/10 border-b-transparent"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sub Tab Content */}
          <div className="min-h-[300px] flex flex-col justify-center">
            {activeTabs.praxisai === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs md:text-sm text-white/70 leading-relaxed"
              >
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm md:text-base text-white font-medium">
                    Designed and built a multi-tenant retrieval platform facilitating complex semantic knowledge search and secure dynamic workspace prompt execution.
                  </p>
                  <p>
                    PraxisAI features full document ingestion, recursive text chunking, and similarity lookups powered by Supabase with <b>pgvector</b>. Users construct customizable workflow node chains to run multi-agent scripts and context-heavy semantic tasks.
                  </p>
                  <p>
                    Integrates Clerk for secure tenancy controls, Drizzle ORM, and Vercel AI SDK for low-latency streaming endpoints.
                  </p>
                  <div className="pt-2">
                    <h4 className="font-semibold text-white mb-2">Platform Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "Supabase", "OpenAI APIs", "Drizzle ORM", "pgvector", "Clerk Authentication", "Vercel AI SDK"].map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-white/60 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center space-y-4 bg-black/40 border border-white/5 rounded-xl p-6 font-mono text-xs">
                  <div className="text-accent-purple font-semibold flex items-center space-x-1.5">
                    <Settings className="h-4 w-4 animate-spin" style={{ animationDuration: "10s" }} />
                    <span>RETRIEVAL PIPELINE METRICS</span>
                  </div>
                  <div className="space-y-2 text-white/80">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Chunking Strategy:</span>
                      <span>Recursive (500 char)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Vector Dimension:</span>
                      <span>1536 (text-embedding-3)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Index Model:</span>
                      <span className="text-accent-blue font-semibold">HNSW Indexing</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Query Latency:</span>
                      <span className="text-emerald-400 font-semibold">&lt; 15ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tenancy Security:</span>
                      <span className="text-emerald-400 font-semibold">Row Level Security</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTabs.praxisai === "architecture" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-center"
              >
                <div className="flex justify-center space-x-3 mb-2">
                  {["query", "embedding", "retrieval", "synthesis"].map((step) => (
                    <button
                      key={step}
                      onClick={() => setRagStep(step as any)}
                      className={`px-3 py-1.5 rounded border text-xs capitalize transition-colors clickable ${
                        ragStep === step ? "bg-accent-purple/20 border-accent-purple text-accent-purple" : "border-white/5 text-white/50"
                      }`}
                    >
                      {step}
                    </button>
                  ))}
                </div>

                {/* RAG SVG Architecture diagram */}
                <div className="w-full max-w-2xl mx-auto border border-white/5 bg-black/50 p-6 rounded-xl flex items-center justify-center min-h-[220px]">
                  <svg viewBox="0 0 600 200" className="w-full h-auto text-white">
                    {/* User Query Input */}
                    <g transform="translate(10, 70)">
                      <rect width="100" height="60" rx="6" className={`transition-colors duration-300 ${
                        ragStep === "query" ? "fill-accent-purple/10 stroke-accent-purple" : "fill-white/5 stroke-white/20"
                      }`} />
                      <text x="50" y="30" textAnchor="middle" className="text-xs font-semibold fill-white">1. User Query</text>
                      <text x="50" y="45" textAnchor="middle" className="text-[9px] fill-white/40 font-mono">"Ask document..."</text>
                    </g>

                    <path d="M 110 100 L 150 100" className="stroke-white/20 fill-none" strokeWidth="2" />

                    {/* Embedding generation */}
                    <g transform="translate(150, 70)">
                      <rect width="110" height="60" rx="6" className={`transition-colors duration-300 ${
                        ragStep === "embedding" ? "fill-accent-blue/10 stroke-accent-blue" : "fill-white/5 stroke-white/20"
                      }`} />
                      <text x="55" y="30" textAnchor="middle" className="text-xs font-semibold fill-white">2. Embedding</text>
                      <text x="55" y="45" textAnchor="middle" className="text-[9px] fill-accent-blue font-mono">OpenAI Vectorization</text>
                    </g>

                    <path d="M 260 100 L 300 100" className="stroke-white/20 fill-none" strokeWidth="2" />

                    {/* pgvector search */}
                    <g transform="translate(300, 70)">
                      <rect width="120" height="60" rx="6" className={`transition-colors duration-300 ${
                        ragStep === "retrieval" ? "fill-accent-purple/15 stroke-accent-purple shadow-neon-purple" : "fill-white/5 stroke-white/20"
                      }`} />
                      <text x="60" y="30" textAnchor="middle" className="text-xs font-semibold fill-white">3. Vector Search</text>
                      <text x="60" y="45" textAnchor="middle" className="text-[9px] fill-accent-purple font-mono">pgvector Cosine Sim</text>
                    </g>

                    <path d="M 420 100 L 460 100" className="stroke-white/20 fill-none" strokeWidth="2" />

                    {/* LLM Synthesis */}
                    <g transform="translate(460, 70)">
                      <rect width="130" height="60" rx="6" className={`transition-colors duration-300 ${
                        ragStep === "synthesis" ? "fill-emerald-500/10 stroke-emerald-500" : "fill-white/5 stroke-white/20"
                      }`} />
                      <text x="65" y="30" textAnchor="middle" className="text-xs font-semibold fill-white">4. Synthesis</text>
                      <text x="65" y="45" textAnchor="middle" className="text-[9px] fill-emerald-400 font-mono">Vercel SDK Stream</text>
                    </g>
                  </svg>
                </div>
                <p className="text-xs text-white/50 font-mono italic">
                  {ragStep === "query" && "Step 1: User inserts conversational request into Next.js frontend."}
                  {ragStep === "embedding" && "Step 2: API route captures query and generates 1536-dim tensor embeddings via OpenAI model."}
                  {ragStep === "retrieval" && "Step 3: Vector search maps vector inside PostgreSQL pgvector. Matches top-k segments under 15ms."}
                  {ragStep === "synthesis" && "Step 4: Prompt injects context. OpenAI processes completion and streams chunked tokens to client."}
                </p>
              </motion.div>
            )}

            {activeTabs.praxisai === "challenges" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm"
              >
                <div className="glass-panel p-5 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center space-x-2 text-red-400 font-semibold">
                    <AlertCircle className="h-4 w-4" />
                    <span>Challenge: Context Drift</span>
                  </div>
                  <p className="text-white/60">
                    Ingested files containing disparate tables and figures resulted in incoherent chunks when divided by raw char limits, distorting semantic searches.
                  </p>
                </div>

                <div className="glass-panel p-5 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Solution: Semantic Chunk Binder</span>
                  </div>
                  <p className="text-white/60">
                    Designed a customized recursive layout-aware parser that grouped markdown blocks, header arrays, and table rows prior to vector lookup, enhancing retrieval accuracy.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTabs.praxisai === "learnings" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border border-white/5 bg-white/5 rounded-xl p-5 space-y-3 text-xs md:text-sm text-white/70"
              >
                <h4 className="font-bold text-white flex items-center space-x-2">
                  <Layers className="h-4 w-4 text-accent-purple" />
                  <span>Key Engineering Takeaways</span>
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <b>Vector Index Tuning</b>: Discovered that establishing HNSW indexes on `pgvector` scales database lookup speeds up to 100x compared to standard sequential scans at scale.
                  </li>
                  <li>
                    <b>Streaming APIs</b>: Achieved a robust working grasp of edge runtimes and chunk streams using the Vercel AI SDK to prevent client blocking.
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* -------------------------------------------------------------------------------- */}
        {/* PROJECT 3: NEXFLOW */}
        {/* -------------------------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl border border-white/10 overflow-hidden p-6 md:p-8 space-y-6 relative"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-emerald-400 bg-emerald-400/10 uppercase">
                <Workflow className="h-3 w-3 animate-pulse" />
                <span>Systems Engineering // Async Workflow Automation</span>
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                NexFlow
              </h3>
              <p className="text-sm md:text-base text-white/60 font-semibold tracking-wide uppercase text-accent-blue">
                Event-Driven Workflow Automation Engine
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <a href="#" className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors clickable">
                <Github className="h-4 w-4" />
                <span>Source Code</span>
              </a>
              <a href="#" className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-500 hover:scale-105 text-xs font-bold text-black transition-all clickable shadow-neon-blue">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Sub Tab Buttons */}
          <div className="flex border-b border-white/5 overflow-x-auto pb-1 gap-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange("nexflow", tab.id)}
                className={`px-4 py-2 rounded-t-lg text-xs md:text-sm font-semibold transition-all duration-300 relative clickable ${
                  activeTabs.nexflow === tab.id
                    ? "text-emerald-400 bg-white/5 border border-white/10 border-b-transparent"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sub Tab Content */}
          <div className="min-h-[300px] flex flex-col justify-center">
            {activeTabs.nexflow === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs md:text-sm text-white/70 leading-relaxed"
              >
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm md:text-base text-white font-medium">
                    Built a highly resilient, event-driven task orchestration engine enabling automated integrations and scheduled background job executions.
                  </p>
                  <p>
                    NexFlow processes webhook payloads, routes conditional nodes, and schedules complex background jobs. Built using <b>Node.js</b> and powered by <b>BullMQ</b> and <b>Redis</b>, the platform manages parallel workers, task retry states, and error handling seamlessly.
                  </p>
                  <p>
                    Includes an elegant interactive layout builder and stores activity histories, workflow blueprints, and execution logs in PostgreSQL.
                  </p>
                  <div className="pt-2">
                    <h4 className="font-semibold text-white mb-2">System Core Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Event Driven", "Webhooks", "Redis Queue Broker", "BullMQ Tasks", "Docker Containers", "PostgreSQL", "OAuth Security"].map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-white/60 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center space-y-4 bg-black/40 border border-white/5 rounded-xl p-6 font-mono text-xs">
                  <div className="text-emerald-400 font-semibold flex items-center space-x-1.5">
                    <Zap className="h-4 w-4 animate-bounce" />
                    <span>QUEUE WORKLOAD BENCHMARKS</span>
                  </div>
                  <div className="space-y-2 text-white/80">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Maximum Job Throughput:</span>
                      <span>500 jobs/sec</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Average Queue Delay:</span>
                      <span className="text-emerald-400 font-semibold">&lt; 8ms</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Redis Connection Pool:</span>
                      <span>IORedis cluster</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Auto-retry Threshold:</span>
                      <span>3 (Exponential backoff)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Task Sandboxing:</span>
                      <span className="text-accent-blue font-semibold">Node Workers</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTabs.nexflow === "architecture" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-center"
              >
                <div className="flex justify-center space-x-3 mb-2">
                  {["webhook", "redis", "worker"].map((step) => (
                    <button
                      key={step}
                      onClick={() => setQueueStatus(step as any)}
                      className={`px-3 py-1.5 rounded border text-xs capitalize transition-colors clickable ${
                        queueStatus === step ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "border-white/5 text-white/50"
                      }`}
                    >
                      {step}
                    </button>
                  ))}
                </div>

                {/* Queue SVG Architecture diagram */}
                <div className="w-full max-w-2xl mx-auto border border-white/5 bg-black/50 p-6 rounded-xl flex items-center justify-center min-h-[220px]">
                  <svg viewBox="0 0 600 200" className="w-full h-auto text-white">
                    {/* Webhook source */}
                    <g transform="translate(10, 70)">
                      <rect width="110" height="60" rx="6" className={`transition-colors duration-300 ${
                        queueStatus === "webhook" ? "fill-emerald-500/10 stroke-emerald-500 shadow-neon-blue" : "fill-white/5 stroke-white/20"
                      }`} />
                      <text x="55" y="30" textAnchor="middle" className="text-xs font-semibold fill-white">1. Event Trigger</text>
                      <text x="55" y="45" textAnchor="middle" className="text-[9px] fill-white/40 font-mono">External Webhook</text>
                    </g>

                    <path d="M 120 100 L 170 100" className="stroke-white/20 fill-none" strokeWidth="2" />

                    {/* Redis Broker */}
                    <g transform="translate(170, 70)">
                      <rect width="120" height="60" rx="6" className={`transition-colors duration-300 ${
                        queueStatus === "redis" ? "fill-accent-blue/10 stroke-accent-blue" : "fill-white/5 stroke-white/20"
                      }`} />
                      <text x="60" y="30" textAnchor="middle" className="text-xs font-semibold fill-white">2. Redis Broker</text>
                      <text x="60" y="45" textAnchor="middle" className="text-[9px] fill-accent-blue font-mono">Job Registration</text>
                    </g>

                    <path d="M 290 100 L 340 100" className="stroke-white/20 fill-none" strokeWidth="2" />

                    {/* BullMQ Workers */}
                    <g transform="translate(340, 70)">
                      <rect width="120" height="60" rx="6" className={`transition-colors duration-300 ${
                        queueStatus === "worker" ? "fill-accent-purple/15 stroke-accent-purple shadow-neon-purple" : "fill-white/5 stroke-white/20"
                      }`} />
                      <text x="60" y="30" textAnchor="middle" className="text-xs font-semibold fill-white">3. BullMQ Worker</text>
                      <text x="60" y="45" textAnchor="middle" className="text-[9px] fill-accent-purple font-mono">Parallel Execution</text>
                    </g>

                    <path d="M 460 100 L 500 100" className="stroke-white/20 fill-none" strokeWidth="2" />

                    {/* Database Log */}
                    <g transform="translate(500, 70)">
                      <rect width="90" height="60" rx="6" className="fill-white/5 stroke-white/20" />
                      <text x="45" y="30" textAnchor="middle" className="text-xs font-semibold fill-white">4. Persist</text>
                      <text x="45" y="45" textAnchor="middle" className="text-[9px] fill-white/40 font-mono">PostgreSQL Log</text>
                    </g>
                  </svg>
                </div>
                <p className="text-xs text-white/50 font-mono italic">
                  {queueStatus === "webhook" && "Step 1: Webhook catches API event, extracting dynamic payloads."}
                  {queueStatus === "redis" && "Step 2: Redis cache stores task indices, preventing node data loss."}
                  {queueStatus === "worker" && "Step 3: Resilient BullMQ workers poll tasks, trigger retries, and scale concurrency."}
                  {queueStatus === "idle" && "Click the pipeline steps above to interact with the NexFlow job queue layout."}
                </p>
              </motion.div>
            )}

            {activeTabs.nexflow === "challenges" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm"
              >
                <div className="glass-panel p-5 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center space-x-2 text-red-400 font-semibold">
                    <AlertCircle className="h-4 w-4" />
                    <span>Challenge: High Concurrent Locking</span>
                  </div>
                  <p className="text-white/60">
                    Spur-of-the-moment webhook bursts created database lockups in Postgres, resulting in execution timeouts and lost task logging states.
                  </p>
                </div>

                <div className="glass-panel p-5 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Solution: Batch Logs & Redis Backpressure</span>
                  </div>
                  <p className="text-white/60">
                    Diverted direct Postgres inserts to Redis streams. Used BullMQ batching nodes to dump execution states to DB every 2 seconds, entirely solving SQL congestion.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTabs.nexflow === "learnings" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border border-white/5 bg-white/5 rounded-xl p-5 space-y-3 text-xs md:text-sm text-white/70"
              >
                <h4 className="font-bold text-white flex items-center space-x-2">
                  <Layers className="h-4 w-4 text-emerald-400" />
                  <span>Key Systems Engineering Takeaways</span>
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <b>Message Broker Architectures</b>: Acquired solid insights into managing network delays, queue sizes, memory footprints, and retry heuristics inside real-time brokers.
                  </li>
                  <li>
                    <b>Docker Container Isolation</b>: Realized the benefits of containerizing workers to separate execution runtimes and prevent thread leaks.
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
