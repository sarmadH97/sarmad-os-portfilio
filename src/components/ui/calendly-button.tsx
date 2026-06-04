"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/sarmadhusssain/30min";

interface CalendlyButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "subtle";
  className?: string;
}

export function CalendlyButton({ label = "Book a Discovery Call", variant = "primary", className }: CalendlyButtonProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const styles = {
    primary: "bg-[#013E37] text-white shadow-lg shadow-[#013E37]/25 hover:bg-[#02584f]",
    secondary: "border border-[#013E37]/20 bg-white text-[#111827] hover:bg-[#F3E7BE]/45",
    subtle: "border border-[#013E37]/15 bg-[#F3E7BE]/35 text-[#013E37] hover:bg-[#F3E7BE]/60",
  };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  const modal = mounted
    ? createPortal(
        <AnimatePresence>
          {open ? (
            <>
              <motion.div
                className="fixed inset-0 z-[1000] bg-[rgba(0,0,0,0.45)] backdrop-blur-[4px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />
              <div
                className="fixed left-1/2 top-1/2 z-[1001] h-[90vh] w-[95vw] -translate-x-1/2 -translate-y-1/2 md:h-[80vh] md:w-[min(1100px,90vw)]"
                role="dialog"
                aria-modal="true"
                aria-labelledby="calendly-modal-title"
              >
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.24 }}
                  className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#013E37]/15 bg-white shadow-2xl shadow-[#013E37]/20"
                >
                  <div className="flex items-center justify-between gap-4 border-b border-[#013E37]/10 px-4 py-3">
                    <div>
                      <p id="calendly-modal-title" className="text-sm font-semibold text-[#111827]">Book a Discovery Call</p>
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
              </div>
            </>
          ) : null}
        </AnimatePresence>,
        document.body,
      )
    : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={cn("rounded-full px-5 py-3 text-sm font-medium transition", styles[variant], className)}
      >
        {label}
      </button>
      {modal}
    </>
  );
}
