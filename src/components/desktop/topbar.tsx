"use client";

import { Activity, Wifi } from "lucide-react";
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
    <header className="fixed left-3 right-3 top-3 z-50 rounded-2xl border border-white/10 bg-slate-900/55 px-4 py-2 backdrop-blur-2xl">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <div className="font-medium text-slate-100">Sarmad Hussain · Engineering Portfolio</div>
        <nav className="hidden items-center gap-4 md:flex">
          <a href="#achievements" className="hover:text-white">Achievements</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#recommendations" className="hover:text-white">Recommendations</a>
          <button onClick={onOpenTerminal} className="rounded-md border border-white/15 px-2 py-1 hover:bg-white/10">Terminal</button>
        </nav>
        <div className="flex items-center gap-3"><Activity className="hidden h-3.5 w-3.5 text-emerald-300 md:block" /><Wifi className="h-4 w-4" /><span>{time}</span></div>
      </div>
    </header>
  );
}
