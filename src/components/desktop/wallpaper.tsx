"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function WallpaperBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 45, damping: 20 });
  const y = useSpring(my, { stiffness: 45, damping: 20 });
  const xFar = useTransform(x, (v) => v * -0.6);
  const yFar = useTransform(y, (v) => v * -0.6);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      onMouseMove={(e) => {
        mx.set((e.clientX / window.innerWidth - 0.5) * 24);
        my.set((e.clientY / window.innerHeight - 0.5) * 24);
      }}
    >
      <motion.div style={{ x, y }} className="absolute -top-24 left-8 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      <motion.div style={{ x: xFar, y: yFar }} className="absolute right-0 top-16 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.4),rgba(2,6,23,0.92))]" />
      <div className="noise-overlay absolute inset-0 opacity-30" />
    </div>
  );
}
