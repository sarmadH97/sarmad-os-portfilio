"use client";

import { AnimatePresence } from "framer-motion";
import { useWindowStore } from "@/store/use-window-store";
import { WindowFrame } from "./window-frame";
import { AboutWindow } from "@/components/projects/about-window";
import { TerminalWindow } from "@/components/terminal/terminal-window";

export function WindowManager() {
  const windows = useWindowStore((s) => s.windows);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence>
        {Object.values(windows)
          .filter((w) => w.isOpen)
          .map((window) => (
            <WindowFrame
              key={window.id}
              id={window.id}
              title={window.title}
              defaultPosition={window.defaultPosition}
              defaultSize={window.defaultSize}
              zIndex={window.zIndex}
            >
              {window.id === "about" ? <AboutWindow /> : <TerminalWindow />}
            </WindowFrame>
          ))}
      </AnimatePresence>
    </div>
  );
}
