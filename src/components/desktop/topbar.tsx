"use client";

import { Activity, Cpu, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

export function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="absolute left-3 right-3 top-3 z-50 rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-2 backdrop-blur-2xl">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2 font-medium text-slate-100"><Cpu className="h-4 w-4 text-cyan-300" /> SarmadOS</div>
        <div className="hidden items-center gap-2 md:flex"><Activity className="h-3.5 w-3.5 text-emerald-300" /> Stable · 99.99%</div>
        <div className="flex items-center gap-3"><Wifi className="h-4 w-4" /><span>{time}</span></div>
      </div>
    </header>
  );
}
