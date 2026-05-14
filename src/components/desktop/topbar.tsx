import { Cpu, Wifi } from "lucide-react";

export function TopBar() {
  return (
    <header className="absolute left-3 right-3 top-3 z-50 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-2 backdrop-blur-xl">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2 font-medium text-slate-100">
          <Cpu className="h-4 w-4 text-cyan-300" /> SarmadOS
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="h-4 w-4" /> Engineering Dashboard
        </div>
      </div>
    </header>
  );
}
