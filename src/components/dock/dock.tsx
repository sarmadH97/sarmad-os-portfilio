"use client";

import { BriefcaseBusiness, Quote, Sparkles, Terminal, Timer, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useWindowStore } from "@/store/use-window-store";
import { WindowId } from "@/types/window";

const icons: Record<WindowId, React.ReactNode> = {
  about: <UserRound className="h-5 w-5" />,
  terminal: <Terminal className="h-5 w-5" />,
  projects: <BriefcaseBusiness className="h-5 w-5" />,
  experience: <Timer className="h-5 w-5" />,
  skills: <Sparkles className="h-5 w-5" />,
  recommendations: <Quote className="h-5 w-5" />,
};

export function Dock() { const windows = useWindowStore((s) => s.windows); const openWindow = useWindowStore((s) => s.openWindow); const [hovered, setHovered] = useState<WindowId | null>(null);
return <div className="absolute bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/15 bg-slate-900/55 p-2.5 backdrop-blur-2xl"><div className="flex items-end gap-2 px-1">{(Object.keys(windows) as WindowId[]).map((id) => <div key={id} className="relative" onMouseEnter={() => setHovered(id)} onMouseLeave={() => setHovered(null)}><motion.button animate={{ scale: hovered === id ? 1.22 : 1, y: hovered === id ? -6 : 0 }} transition={{ type: "spring", stiffness: 380, damping: 25 }} onClick={() => openWindow(id)} className="relative rounded-xl border border-white/10 bg-white/10 p-3 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,.1)]" aria-label={`Open ${windows[id].title}`}>{icons[id]}{windows[id].isOpen ? <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300" /> : null}</motion.button><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: hovered === id ? 1 : 0, y: hovered === id ? 0 : 8 }} className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-slate-950/80 px-2 py-1 text-[10px] text-slate-200">{windows[id].title}</motion.div></div>)}</div></div>;
}
