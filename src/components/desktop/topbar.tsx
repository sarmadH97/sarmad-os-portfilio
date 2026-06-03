"use client";

import { Activity, Wifi } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TopBarProps {
  onOpenTerminal: () => void;
}

export function TopBar({ onOpenTerminal }: TopBarProps) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed left-3 right-3 top-3 z-50 rounded-2xl border border-[#013E37]/10 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-2xl">
      <div className="flex items-center justify-between text-xs text-slate-600">
        <Link href="/" className="font-semibold text-[#111827]">Sarmad Hussain</Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="/projects" className="hover:text-[#111827]">Projects</Link>
          <Link href="/experience" className="hover:text-[#111827]">Experience</Link>
          <Link href="/work-with-founders" className="hover:text-[#111827]">Work With Founders</Link>
          <Link href="/recommendations" className="hover:text-[#111827]">Recommendations</Link>
          <button onClick={onOpenTerminal} className="rounded-full border border-[#013E37]/20 px-3 py-1 text-[#111827] hover:bg-[#F3E7BE]/45">Terminal</button>
        </nav>
        <div className="flex items-center gap-3"><Activity className="hidden h-3.5 w-3.5 text-[#013E37] md:block" /><Wifi className="h-4 w-4" /><span>{time}</span></div>
      </div>
    </header>
  );
}
