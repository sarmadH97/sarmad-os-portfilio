"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { BootSequence } from "./boot-sequence";
import { TopBar } from "./topbar";
import { WallpaperBackground } from "./wallpaper";

const BOOT_KEY = "sarmad_os_booted";

export function SiteShell({ children }: { children: ReactNode }) {
  const [showBoot, setShowBoot] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(BOOT_KEY) === "1") setShowBoot(false);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAFAF7] text-[#111827]">
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
        {children}
        <section className="relative z-10 mx-auto max-w-6xl px-4 pb-20">
          <div className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-8 shadow-xl shadow-[#013E37]/10 backdrop-blur-xl md:p-10">
            <p className="text-sm font-medium text-[#013E37]">Ready to turn the idea into a real product?</p>
            <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2 className="font-heading max-w-2xl text-3xl font-semibold text-[#111827]">Let’s map the MVP, product risks, and fastest path to launch.</h2>
              <div className="flex flex-wrap gap-3">
                <CalendlyButton label="Book a Discovery Call" />
                <CalendlyButton label="Discuss Your MVP" variant="secondary" />
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <AnimatePresence>
        {terminalOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-[#013E37]/30 p-3 backdrop-blur-sm md:p-8"
            onClick={() => setTerminalOpen(false)}
          >
            <motion.div
              drag
              dragMomentum={false}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="mx-auto mt-16 w-full max-w-4xl rounded-2xl border border-white/15 bg-[#013E37]/85 shadow-2xl backdrop-blur-2xl"
            >
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
