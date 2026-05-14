"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const BOOT_STEPS = [
  "Initializing SarmadOS...",
  "Loading AI workflow engine...",
  "Hydrating frontend systems...",
  "Mounting deployment graph...",
  "Connecting cloud infrastructure...",
  "Restoring engineering workspace...",
  "Boot sequence complete.",
];

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [index, setIndex] = useState(0);

  const currentLine = useMemo(() => BOOT_STEPS[index] ?? BOOT_STEPS[BOOT_STEPS.length - 1], [index]);

  useEffect(() => {
    if (index >= BOOT_STEPS.length) {
      const endTimer = window.setTimeout(onComplete, 500);
      return () => window.clearTimeout(endTimer);
    }

    const timer = window.setTimeout(() => setIndex((i) => i + 1), index === BOOT_STEPS.length - 1 ? 900 : 1000);
    return () => window.clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-black"
      aria-live="polite"
      aria-label="System boot sequence"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative flex w-full max-w-xl flex-col items-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentLine}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-base text-slate-100 md:text-lg"
          >
            {currentLine}
          </motion.p>
        </AnimatePresence>

        <motion.div
          className="mt-5 h-[2px] w-28 overflow-hidden rounded-full bg-white/10"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.span
            className="block h-full w-10 rounded-full bg-cyan-200/90"
            animate={{ x: ["-120%", "260%"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
