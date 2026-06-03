"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/sarmadhusssain/30min";

interface CalendlyButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "subtle";
  className?: string;
}

export function CalendlyButton({ label = "Book a Discovery Call", variant = "primary", className }: CalendlyButtonProps) {
  const [open, setOpen] = useState(false);

  const styles = {
    primary: "bg-[#013E37] text-white shadow-lg shadow-[#013E37]/25 hover:bg-[#02584f]",
    secondary: "border border-[#013E37]/20 bg-white text-[#111827] hover:bg-[#F3E7BE]/45",
    subtle: "border border-[#013E37]/15 bg-[#F3E7BE]/35 text-[#013E37] hover:bg-[#F3E7BE]/60",
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn("rounded-full px-5 py-3 text-sm font-medium transition", styles[variant], className)}
      >
        {label}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[120] bg-[#013E37]/40 p-3 backdrop-blur-sm md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
              className="mx-auto flex h-[86vh] max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border border-[#013E37]/15 bg-white shadow-2xl shadow-[#013E37]/20"
            >
              <div className="flex items-center justify-between border-b border-[#013E37]/10 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Book a Discovery Call</p>
                  <p className="text-xs text-slate-500">30 minutes to discuss your MVP, product direction, or AI workflow.</p>
                </div>
                <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-[#013E37]/10 px-3 py-1 text-xs text-[#111827] hover:bg-[#F3E7BE]/40">
                  Close
                </button>
              </div>
              <iframe title="Calendly scheduling" src={CALENDLY_URL} className="min-h-0 flex-1 bg-white" />
              <div className="border-t border-[#013E37]/10 px-4 py-2 text-xs text-slate-500">
                Having trouble?{" "}
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="font-medium text-[#013E37] hover:underline">
                  Open Calendly in a new tab ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
