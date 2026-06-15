"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/motion";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { RESUME_URL } from "@/lib/links";
import { usePathname } from "next/navigation";
import { BootSequence } from "./boot-sequence";
import { TopBar } from "./topbar";
import { WallpaperBackground } from "./wallpaper";

const BOOT_KEY = "sarmad_os_booted";

const openTo = [
  "Founding Engineer Roles",
  "Senior Software Engineer Roles",
  "Product Engineering Teams",
  "AI-Focused Startups",
  "Technical Leadership Opportunities",
  "Select Founder Partnerships",
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [showBoot, setShowBoot] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (window.sessionStorage.getItem(BOOT_KEY) === "1") setShowBoot(false);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FEFAE0] text-[#111827]">
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
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: showBoot ? 0 : 1, y: showBoot ? 8 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative z-10"
      >
        <TopBar onOpenTerminal={() => setTerminalOpen(true)} />
        <motion.div
          key={pathname}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {children}
          <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 sm:px-5">
            <div className="rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-5 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none md:rounded-[2rem] md:p-6">
              <p className="text-sm font-medium text-[#8A5A2B]">Open To</p>
              <StaggerGroup className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {openTo.map((item) => (
                  <StaggerItem key={item}>
                    <p className="flex items-center gap-2 rounded-2xl bg-[#FEFAE0] px-3 py-2 text-[15px] leading-6 text-slate-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm motion-reduce:transform-none">
                      <Check className="h-4 w-4 text-[#8A5A2B]" aria-hidden="true" />
                      {item}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>
          <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-5 md:pb-20">
            <div className="rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-5 shadow-xl shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-2xl motion-reduce:transform-none md:rounded-[2rem] md:p-10">
              <p className="text-sm font-medium text-[#8A5A2B]">Ready to turn the idea into a real product?</p>
              <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <h2 className="font-heading max-w-2xl text-[clamp(1.6rem,8vw,2rem)] font-semibold leading-tight text-[#111827] md:text-3xl">Let’s map the MVP, product risks, and fastest path to launch.</h2>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <CalendlyButton label="Book a Discovery Call" className="w-full sm:w-auto" />
                  <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4A373]/20 bg-[#FEFAE0] px-5 py-3 text-sm font-medium text-[#111827] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FAEDCD]/45 hover:shadow-lg active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none sm:w-auto">Download Resume</a>
                  <CalendlyButton label="Discuss Your MVP" variant="secondary" className="w-full sm:w-auto" />
                </div>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {terminalOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/75 p-2 backdrop-blur-sm md:p-8"
            onClick={() => setTerminalOpen(false)}
          >
            <motion.div
              drag={!isMobile}
              dragMomentum={false}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="mx-auto mt-12 flex h-[80vh] w-[95vw] max-w-4xl flex-col rounded-2xl border border-[#D4A373]/15 bg-[#050302]/95 shadow-2xl backdrop-blur-2xl md:mt-16 md:h-auto md:w-full"
            >
              <div className="flex items-center justify-between border-b border-[#D4A373]/15 px-4 py-2">
                <p className="text-sm text-slate-200">SarmadOS Terminal</p>
                <button onClick={() => setTerminalOpen(false)} className="rounded-md px-2 py-1 text-xs text-slate-300 hover:bg-white/10">Close</button>
              </div>
              <div className="min-h-0 flex-1 resize-none overflow-auto p-3 md:resize-y md:p-4" style={{ minHeight: isMobile ? undefined : 320, maxHeight: isMobile ? undefined : "75vh" }}>
                <TerminalWindow />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
