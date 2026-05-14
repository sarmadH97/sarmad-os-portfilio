"use client";

import { Terminal, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { useWindowStore } from "@/store/use-window-store";
import { WindowId } from "@/types/window";

const icons: Record<WindowId, React.ReactNode> = {
  about: <UserRound className="h-5 w-5" />,
  terminal: <Terminal className="h-5 w-5" />,
};

export function Dock() {
  const windows = useWindowStore((s) => s.windows);
  const openWindow = useWindowStore((s) => s.openWindow);

  return (
    <div className="absolute bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/70 p-2 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        {(Object.keys(windows) as WindowId[]).map((id) => (
          <motion.button
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            key={id}
            onClick={() => openWindow(id)}
            className="relative rounded-xl border border-white/10 bg-white/10 p-3 text-slate-100"
            aria-label={`Open ${windows[id].title}`}
          >
            {icons[id]}
            {windows[id].isOpen ? (
              <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300" />
            ) : null}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
