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
    <header className="fixed left-3 right-3 top-3 z-50 rounded-2xl border border-slate-200/80 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-2xl">
      <div className="flex items-center justify-between text-xs text-slate-600">
        <Link href="/" className="font-semibold text-slate-950">Sarmad Hussain</Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="/projects" className="hover:text-slate-950">Projects</Link>
          <Link href="/experience" className="hover:text-slate-950">Experience</Link>
          <Link href="/work-with-founders" className="hover:text-slate-950">Work With Founders</Link>
          <Link href="/recommendations" className="hover:text-slate-950">Recommendations</Link>
          <button onClick={onOpenTerminal} className="rounded-full border border-slate-300 px-3 py-1 text-slate-900 hover:bg-slate-100">Terminal</button>
        </nav>
        <div className="flex items-center gap-3"><Activity className="hidden h-3.5 w-3.5 text-emerald-500 md:block" /><Wifi className="h-4 w-4" /><span>{time}</span></div>
      </div>
    </header>
  );
}
