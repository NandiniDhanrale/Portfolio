# Nandini's Portfolio

A fully responsive developer personal portfolio, get your fork and play with it ;)


Welcome to my personal portfolio! This is a world-class, premium developer portfolio website designed for **Nandini Dhanrale** (Software Developer | Full Stack Engineer | AI Systems Builder). 

The platform features an Apple + Linear + Vercel-inspired SaaS aesthetic, optimized for Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Resend. It tells a technical story of engineering growth: **Student → Builder → Engineer → Future Software Architect**.

---

## ✨ Features

* 🎨 **Modern Design** - Clean, premium SaaS dark-mode interface with frosted glassmorphism, dynamic glow backdrops, and custom spring-animated spotlights.
* 📱 **Fully Responsive** - Mobile-first responsive grid system that displays beautifully across all viewport sizes.
* 🌓 **Dark/Light Mode** - Smooth CSS variable transitions between a slate-black luxury dark mode (default) and a clean, high-contrast light mode.
* ⚡ **Lightning Fast** - Optimized static generation and Edge-optimized server-rendering parameters under Next.js 15 and Turbopack.
* 🎯 **SEO Optimized** - Pre-bundled with robots controls, custom JSON-LD schemas, descriptive keywords, and automated [sitemap.xml](https://nandini-portfolio.vercel.app/sitemap.xml) generators for strong search crawler indexation.
* 🧠 **Speculative VLM Decoders** - Features an interactive visual SVG diagram showing real-time token speculation steps, KV Cache allocations, and verifications yielding a **1.8x speedup**.
* 📊 **GitHub Heatmap & Stats** - Replicates a 365-day green contribution calendar with glassmorphism mouse tooltips, active streaks metrics, and language telemetry progress bars.
* 📬 **Contact Ingestion Route** - Active backend POST route connected to the Resend API, with local logging fallbacks for offline developers.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | Next.js 15 (App Router), React 19 (Client/Server Components) |
| **Type Safety** | TypeScript (Strict compilation boundaries) |
| **Styling & Motion** | Tailwind CSS v4, Framer Motion, HSL TAILORED custom keyframes |
| **Backend & APIs** | Node.js, Next.js Serverless Routes, Resend Email API |
| **Icons & Micro-Telemetry** | Lucide React, Canvas Confetti |

---

## ⚡ Quick Start

### Prerequisites
* [Node.js (v18.0.0 or higher)](https://nodejs.org)
* `npm` (v10.0.0 or higher) or `pnpm` (recommended)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NandiniDhanrale/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   Using `npm`:
   ```bash
   npm install --legacy-peer-deps
   ```
   Or using `pnpm`:
   ```bash
   pnpm install --legacy-peer-deps
   ```

3. **Start the local Server**:
   Using `npm`:
   ```bash
   npm run dev
   ```
   Or using `pnpm`:
   ```bash
   pnpm dev
   ```
   *Open [http://localhost:3000](http://localhost:3000) inside your browser to play with the portfolio!*

4. **Add Mailer Keys (Optional)**:
   Rename `.env.example` to `.env.local` or configure Vercel variables to include:
   ```env
   RESEND_API_KEY=your_resend_api_key
   ```
   *(Note: The contact form will automatically execute in a mock logging mode if this variable is left empty, ensuring the app remains fully functional without crashing).*

---

## 🚀 Live Demo & Deployment

This project compiles cleanly for immediate deployment to **Vercel** with one click. 

Push your changes directly to the remote main branch and connect your project to Vercel to activate automated Edge hosting, image compression caching, and fast global page deliveries!
