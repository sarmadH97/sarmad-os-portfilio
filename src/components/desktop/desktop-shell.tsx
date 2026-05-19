"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Dock } from "@/components/dock/dock";
import { ProjectsWindow } from "@/components/projects/projects-window";
import { ExperienceWindow } from "@/components/projects/experience-window";
import { SkillsWindow } from "@/components/projects/skills-window";
import { RecommendationsWindow } from "@/components/projects/recommendations-window";
import { WindowManager } from "@/components/windows/window-manager";
import { Button } from "@/components/ui/button";
import { useWindowStore } from "@/store/use-window-store";
import { BootSequence } from "./boot-sequence";
import { TopBar } from "./topbar";
import { WallpaperBackground } from "./wallpaper";

const BOOT_KEY = "sarmad_os_booted";

export function DesktopShell() {
  const setMobile = useWindowStore((s) => s.setMobile);
  const openWindow = useWindowStore((s) => s.openWindow);
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    if (window.sessionStorage.getItem(BOOT_KEY) === "1") setShowBoot(false);
    return () => window.removeEventListener("resize", update);
  }, [setMobile]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <WallpaperBackground />
      <AnimatePresence>{showBoot ? <BootSequence onComplete={() => { window.sessionStorage.setItem(BOOT_KEY, "1"); setShowBoot(false); }} /> : null}</AnimatePresence>

      <motion.div initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: showBoot ? 0 : 1, scale: showBoot ? 0.99 : 1 }} className="relative">
        <TopBar />
        <div className="relative z-20 mx-auto max-w-6xl space-y-8 px-4 pb-32 pt-24">
          <section className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">Senior Engineer · Product Builder</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Premium engineering workspace for founders and product teams.</h1>
            <p className="mt-4 max-w-3xl text-slate-200">I build scalable product systems that combine frontend quality, platform reliability, and AI-enabled workflows. This portfolio is scroll-first for clarity, with windowed deep-dives when you want technical detail.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button onClick={() => openWindow("projects")}>Open Project Deep Dive</Button>
              <Button onClick={() => openWindow("architecture")}>Open Architecture View</Button>
              <Button onClick={() => openWindow("terminal")}>Open Terminal</Button>
            </div>
          </section>

          <section id="projects" className="rounded-3xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-xl"><h2 className="mb-4 text-2xl text-white">Projects</h2><ProjectsWindow /></section>
          <section id="experience" className="rounded-3xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-xl"><h2 className="mb-4 text-2xl text-white">Experience Timeline</h2><ExperienceWindow /></section>
          <section id="skills" className="rounded-3xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-xl"><h2 className="mb-4 text-2xl text-white">Engineering Skills</h2><SkillsWindow /></section>
          <section id="recommendations" className="rounded-3xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-xl"><div className="mb-4 flex items-center justify-between"><h2 className="text-2xl text-white">Recommendations</h2><Button onClick={() => openWindow("recommendations")}>Open Detailed Reviews</Button></div><RecommendationsWindow /></section>
          <section className="rounded-3xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-xl"><div className="mb-3 flex items-center justify-between"><h2 className="text-2xl text-white">AI Workflow Explorer</h2><Button onClick={() => openWindow("aiWorkflow")}>Open Interactive Layer</Button></div><p className="text-slate-200">Operationally grounded AI workflows across product discovery, implementation and deployment quality gates.</p></section>
        </div>

        <WindowManager />
        <Dock />
      </motion.div>
    </main>
  );
}
