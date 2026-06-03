"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function WallpaperBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 45, damping: 20 });
  const y = useSpring(my, { stiffness: 45, damping: 20 });
  const xFar = useTransform(x, (v) => v * -0.45);
  const yFar = useTransform(y, (v) => v * -0.45);

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      onMouseMove={(e) => {
        mx.set((e.clientX / window.innerWidth - 0.5) * 18);
        my.set((e.clientY / window.innerHeight - 0.5) * 18);
      }}
    >
      <motion.div style={{ x, y }} className="absolute -top-24 left-8 h-80 w-80 rounded-full bg-[#F3E7BE]/80 blur-3xl" />
      <motion.div style={{ x: xFar, y: yFar }} className="absolute right-0 top-16 h-[28rem] w-[28rem] rounded-full bg-[#013E37]/12 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.9),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,247,0.72),rgba(250,250,247,0.96))]" />
      <div className="noise-overlay absolute inset-0 opacity-40" />
    </div>
  );
}
