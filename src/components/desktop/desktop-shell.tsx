"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { ProjectsWindow } from "@/components/projects/projects-window";
import { ExperienceWindow } from "@/components/projects/experience-window";
import { SkillsWindow } from "@/components/projects/skills-window";
import { RecommendationsWindow } from "@/components/projects/recommendations-window";
import { BootSequence } from "./boot-sequence";
import { TopBar } from "./topbar";
import { WallpaperBackground } from "./wallpaper";

const BOOT_KEY = "sarmad_os_booted";

export function DesktopShell() {
  const [showBoot, setShowBoot] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(BOOT_KEY) === "1") setShowBoot(false);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <WallpaperBackground />
      <AnimatePresence>
        {showBoot ? (
          <BootSequence
            onComplete={() => {
              window.sessionStorage.setItem(BOOT_KEY, "1");
              setShowBoot(false);
            }}
          />
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: showBoot ? 0 : 1, scale: showBoot ? 0.99 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative"
      >
        <TopBar onOpenTerminal={() => setTerminalOpen(true)} />
        <div className="relative z-20 mx-auto max-w-6xl space-y-8 px-4 pb-20 pt-24">
          <section className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">Sarmad Hussain</p>
            <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Software Engineer building scalable SaaS platforms, AI workflows, and startup-ready systems.</h1>
            <p className="mt-4 max-w-4xl text-slate-200">Frontend-heavy full stack engineer with deep product instincts and hands-on architecture experience across fintech and enterprise SaaS. I specialize in modern React/Next.js systems, resilient backend integrations, deployment-ready cloud delivery, and AI-assisted workflows that improve execution speed without compromising quality. I thrive in founding-engineer environments where ownership, clarity, and technical credibility matter, and I enjoy mentoring teams to ship polished, high-impact product experiences.</p>
            <button onClick={() => setTerminalOpen(true)} className="mt-5 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">Open Terminal Layer</button>
          </section>
          <section id="projects" className="rounded-3xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-xl"><h2 className="mb-4 text-2xl text-white">Projects</h2><ProjectsWindow /></section>
          <section id="experience" className="rounded-3xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-xl"><h2 className="mb-4 text-2xl text-white">Experience</h2><ExperienceWindow /></section>
          <section id="skills" className="rounded-3xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-xl"><h2 className="mb-4 text-2xl text-white">Skills</h2><SkillsWindow /></section>
          <section id="recommendations" className="rounded-3xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-xl"><h2 className="mb-4 text-2xl text-white">Recommendations</h2><RecommendationsWindow /></section>
        </div>
      </motion.div>

      <AnimatePresence>
        {terminalOpen ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-black/35 backdrop-blur-[2px] p-3 md:p-8" onClick={() => setTerminalOpen(false)}>
            <motion.div drag dragMomentum={false} onClick={(e) => e.stopPropagation()} initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.97 }} transition={{ duration: 0.25 }} className="mx-auto mt-16 w-full max-w-4xl rounded-2xl border border-white/15 bg-slate-900/65 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                <p className="text-sm text-slate-200">SarmadOS Terminal</p>
                <button onClick={() => setTerminalOpen(false)} className="rounded-md px-2 py-1 text-xs text-slate-300 hover:bg-white/10">Close</button>
              </div>
              <div className="resize-y overflow-auto p-4" style={{ minHeight: 380, maxHeight: "75vh" }}>
                <TerminalWindow />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
