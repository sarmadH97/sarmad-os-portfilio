"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const BOOT_STEPS = [
  "Initializing workspace...",
  "Loading projects...",
  "Loading experience...",
  "Loading founder profile...",
  "Ready.",
];

const STEP_DELAY_MS = 700;
const FINAL_STEP_DELAY_MS = 650;
const COMPLETE_DELAY_MS = 250;

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [index, setIndex] = useState(0);

  const currentLine = useMemo(() => BOOT_STEPS[index] ?? BOOT_STEPS[BOOT_STEPS.length - 1], [index]);

  useEffect(() => {
    if (index >= BOOT_STEPS.length) {
      const endTimer = window.setTimeout(onComplete, COMPLETE_DELAY_MS);
      return () => window.clearTimeout(endTimer);
    }

    const timer = window.setTimeout(
      () => setIndex((i) => i + 1),
      index === BOOT_STEPS.length - 1 ? FINAL_STEP_DELAY_MS : STEP_DELAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-black"
      aria-live="polite"
      aria-label="System boot sequence"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,163,115,0.16),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative flex w-full max-w-xl flex-col items-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentLine}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-base font-medium text-slate-100 md:text-lg"
          >
            {currentLine}
          </motion.p>
        </AnimatePresence>

        <div className="mt-5 flex items-center gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-1.5 w-1.5 rounded-full bg-[#FAEDCD]/80"
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.08, 0.9] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: dot * 0.12, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
