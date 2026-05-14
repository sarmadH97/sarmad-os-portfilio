"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useWindowStore } from "@/store/use-window-store";
import { WindowId } from "@/types/window";

interface Props {
  id: WindowId;
  title: string;
  children: ReactNode;
  defaultPosition: { x: number; y: number };
  defaultSize: { w: number; h: number };
  zIndex: number;
}

export function WindowFrame({ id, title, children, defaultPosition, defaultSize, zIndex }: Props) {
  const [position, setPosition] = useState(defaultPosition);
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const focusWindow = useWindowStore((s) => s.focusWindow);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: position.x, position: "absolute" as const, top: position.y }}
      exit={{ opacity: 0, scale: 0.96 }}
      drag
      dragMomentum={false}
      onDragEnd={(_, info) => setPosition((p) => ({ x: p.x + info.offset.x, y: p.y + info.offset.y }))}
      onMouseDown={() => focusWindow(id)}
      style={{ width: defaultSize.w, minHeight: defaultSize.h, zIndex }}
      className="rounded-2xl border border-white/10 bg-slate-900/70 shadow-glow backdrop-blur-2xl"
    >
      <div className="flex items-center justify-between rounded-t-2xl border-b border-white/10 px-4 py-2">
        <p className="text-sm font-medium text-slate-200">{title}</p>
        <button aria-label={`Close ${title}`} onClick={() => closeWindow(id)} className="rounded-md p-1 text-slate-400 hover:bg-white/10 hover:text-white">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </motion.section>
  );
}
