"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useWindowStore } from "@/store/use-window-store";
import { WindowId } from "@/types/window";
import { cn } from "@/lib/utils";

interface Props {
  id: WindowId;
  title: string;
  children: ReactNode;
  defaultSize: { w: number; h: number };
  zIndex: number;
  position: { x: number; y: number };
}

export function WindowFrame({ id, title, children, defaultSize, zIndex, position }: Props) {
  const { closeWindow, focusWindow, setWindowPosition, activeWindow, isMobile } = useWindowStore();

  return (
    <motion.section
      layout
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, x: isMobile ? 0 : position.x, y: isMobile ? 0 : position.y }}
      exit={{ opacity: 0, scale: 0.96, y: 12 }}
      transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
      drag={!isMobile}
      dragMomentum={false}
      dragElastic={0.05}
      onDragEnd={(_, info) => {
        if (isMobile) return;
        const nx = Math.max(12, Math.min(position.x + info.offset.x, window.innerWidth - defaultSize.w - 12));
        let ny = Math.max(70, Math.min(position.y + info.offset.y, window.innerHeight - defaultSize.h - 18));
        if (ny < 84) ny = 70;
        setWindowPosition(id, nx, ny);
      }}
      onMouseDown={() => focusWindow(id)}
      style={{ width: isMobile ? "100%" : defaultSize.w, minHeight: defaultSize.h, zIndex, position: isMobile ? "relative" : "absolute" }}
      className={cn(
        "pointer-events-auto rounded-2xl border bg-slate-900/75 backdrop-blur-2xl",
        activeWindow === id ? "border-cyan-300/40 shadow-[0_0_0_1px_rgba(34,211,238,.25),0_22px_60px_rgba(0,0,0,.45)]" : "border-white/10 shadow-[0_20px_40px_rgba(0,0,0,.35)]",
      )}
    >
      <div className="flex items-center justify-between rounded-t-2xl border-b border-white/10 px-4 py-2">
        <p className="text-sm font-medium text-slate-200">{title}</p>
        <button aria-label={`Close ${title}`} onClick={() => closeWindow(id)} className="rounded-md p-1 text-slate-400 transition hover:bg-white/10 hover:text-white">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </motion.section>
  );
}
