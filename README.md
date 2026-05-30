# Premium Personal Portfolio & Technical Storytelling Platform

A world-class, premium developer portfolio website designed for **Nandini Dhanrale** (Software Developer | Full Stack Engineer | AI Systems Builder). 

The platform features an Apple + Linear + Vercel-inspired SaaS aesthetic, optimized for Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Resend. It tells a technical story of engineering growth: **Student → Builder → Engineer → Future Software Architect**.

---

## 🚀 Key Technical Highlights

1. **SpecVLM (Vision-Language Inference Speedups)**:
   - Features a custom **Interactive SVG Speculative Decoding Diagram** directly inside the client interface.
   - Demonstrates parallel token drafting (LLaVA-7B) and verified KV cache correction (LLaVA-13B) yielding a **1.8x overall speedup** with zero mathematical accuracy loss.
   
2. **PraxisAI (Enterprise-Grade RAG Orchestrator)**:
   - Showcases context retrieval structures matching document splits, dense embeddings vectors (OpenAI API), pgvector cosine metrics in Supabase, and dynamic streams using the Vercel AI SDK.
   
3. **NexFlow (Event-Driven Queue Orchestrator)**:
   - Illustrates background jobs logging, event-triggered webhooks, and worker sandboxing utilizing resilient **Redis** caches and **BullMQ** schedules.

4. **Custom heatmaps & Language telemetry**:
   - Replicates a full 365-day green-graded GitHub Contribution Heatmap showing tooltips upon cursor hover, complete with active streak progress meters and language distribution bars.

---

## 🎨 Aesthetic Design System

* **Base Colorway**: Sleek, deep-dark background (`#0A0A0A`), custom dark cards (`rgba(15, 15, 15, 0.65)`), and high-contrast texts.
* **Ambient Neon Glows**: Radial, pulsating electric blue and neon purple gradients that slide behind grid panels.
* **Spotlight pointer cursor**: Custom cursor tracking that follows desktop movements, projecting spotlight rays to illuminate borders.
* **Command Menu (Ctrl + K)**: High-speed modal lookup allowing fuzzy searches to jump between page sections, download resumes, or toggle system configurations.
* **Glassmorphism Layering**: Custom backdrop-blur configurations for seamless transparency and luxury SaaS layout feel.

---

## 📂 Repository Folder Structure

```
d:\Portfolio\
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts         # Resend backend route
│   │   ├── globals.css              # Custom Tailwind 4 configurations
│   │   ├── layout.tsx               # Next.js root layout with JSON-LD SEO
│   │   ├── page.tsx                 # Main client-side compiler
│   │   ├── providers.tsx            # Global state (theme, Cmd+K toggles)
│   │   └── sitemap.ts               # Automated XML sitemap generator
│   ├── components/
│   │   ├── About.tsx                # Career narrative (Student -> Architect)
│   │   ├── Achievements.tsx         # Immersive timeline with canvas-confetti
│   │   ├── CommandMenu.tsx          # Fuzzy search overlay (Ctrl+K)
│   │   ├── Contact.tsx              # Asynchronous glassmorphic form
│   │   ├── CustomCursor.tsx         # Spring-based spotlight tracker
│   │   ├── Education.tsx            # Academic vertical milestones
│   │   ├── Experience.tsx           # Chronological developer roles
│   │   ├── Footer.tsx               # Stack details & quick commands links
│   │   ├── GitHubSection.tsx        # Contributions heatmap & metrics
│   │   ├── Hero.tsx                 # Typing intro & particle background
│   │   ├── LoadingScreen.tsx        # Simulated compile entrance boot loader
│   │   └── Navbar.tsx               # Sticky header with active scroll tracers
│   └── lib/
│       └── utils.ts                 # Standard className mergers (cn)
├── tailwind.config.ts               # Configuration wrapper
├── package.json                     # Root dependencies
└── README.md                        # Code documentation
```

---

## 🛠️ Local Development Guide

Ensure you have [Node.js (v18+)](https://nodejs.org) installed.

1. **Clone & Navigate**:
   ```bash
   cd d/Portfolio
   ```

2. **Install Core Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Boot Development Server**:
   ```bash
   npm run dev
   ```
   *Open [http://localhost:3000](http://localhost:3000) to view the live interface.*

4. **Verify Production Build**:
   ```bash
   npm run build
   ```

---

## ☁️ Vercel Deployment Setup

The website is designed for **one-click deployment** onto the Vercel platform.

### Step 1: Connect to GitHub
Push your completed code to a public or private GitHub repository:
```bash
git init
git add .
git commit -m "feat: world-class developer portfolio"
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** → **Project**.
3. Select your portfolio repository from the imported list.

### Step 3: Configure Environment Variables
In the project setup pane, expand **Environment Variables** and insert:

* **`RESEND_API_KEY`**: Your unique API Key generated inside [Resend](https://resend.com) to enable live email delivery.
  *(Note: If left blank, the portfolio operates in a mock-logging sandbox mode, keeping form submissions functional without crashing).*

### Step 4: Deploy!
Click **Deploy**. Vercel will automatically build the Next.js routes, compile static assets, parse the automated sitemap, and deliver a globally fast, high-performance edge link!
