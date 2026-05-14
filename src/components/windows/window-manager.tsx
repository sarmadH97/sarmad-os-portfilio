"use client";

import { AnimatePresence } from "framer-motion";
import { useWindowStore } from "@/store/use-window-store";
import { WindowFrame } from "./window-frame";
import { AboutWindow } from "@/components/projects/about-window";
import { TerminalWindow } from "@/components/terminal/terminal-window";

export function WindowManager() {
  const windows = useWindowStore((s) => s.windows);
  const isMobile = useWindowStore((s) => s.isMobile);

  const sorted = Object.values(windows)
    .filter((w) => w.isOpen)
    .sort((a, b) => (isMobile ? 0 : a.zIndex - b.zIndex));

  return (
    <div className="relative h-full w-full space-y-3">
      <AnimatePresence>
        {sorted.map((window) => (
          <WindowFrame
            key={window.id}
            id={window.id}
            title={window.title}
            defaultSize={window.defaultSize}
            zIndex={window.zIndex}
            position={window.position}
          >
            {window.id === "about" ? <AboutWindow /> : <TerminalWindow />}
          </WindowFrame>
        ))}
      </AnimatePresence>
    </div>
  );
}
