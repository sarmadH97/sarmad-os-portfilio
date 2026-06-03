"use client";

import { Activity, Home, Wifi } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { cn } from "@/lib/utils";

interface TopBarProps {
  onOpenTerminal: () => void;
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/work-with-founders", label: "For Founders" },
  { href: "/recommendations", label: "Recommendations" },
];

export function TopBar({ onOpenTerminal }: TopBarProps) {
  const [time, setTime] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed left-3 right-3 top-3 z-50 rounded-2xl border border-[#013E37]/10 bg-white/85 px-3 py-2 shadow-sm backdrop-blur-2xl md:px-4">
      <div className="flex items-center justify-between gap-3 text-xs text-slate-600">
        <Link
          href="/"
          aria-label="Go to home page"
          className={cn(
            "group inline-flex items-center gap-2 rounded-full px-2 py-1 font-semibold text-[#111827] transition hover:bg-[#F3E7BE]/45",
            pathname === "/" && "bg-[#F3E7BE]/45",
          )}
        >
          <Home className="h-3.5 w-3.5 text-[#013E37] transition group-hover:scale-105" />
          <span className="underline-offset-4 group-hover:underline">Sarmad Hussain</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-1 transition hover:bg-[#F3E7BE]/45 hover:text-[#111827]",
                isActive(item.href) && "bg-[#013E37] text-white hover:bg-[#013E37] hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <button onClick={onOpenTerminal} className="rounded-full border border-[#013E37]/20 px-3 py-1 text-[#111827] transition hover:bg-[#F3E7BE]/45">Terminal</button>
          <CalendlyButton label="Book a Call" className="px-3 py-1 text-xs" />
        </nav>

        <div className="flex items-center gap-3">
          <Activity className="hidden h-3.5 w-3.5 text-[#013E37] md:block" />
          <Wifi className="h-4 w-4" />
          <span>{time}</span>
        </div>
      </div>

      <nav className="mt-2 flex gap-2 overflow-x-auto pb-1 text-xs text-slate-600 md:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-full border border-[#013E37]/10 px-3 py-1 transition hover:bg-[#F3E7BE]/45",
              isActive(item.href) && "border-[#013E37] bg-[#013E37] text-white",
            )}
          >
            {item.label}
          </Link>
        ))}
        <button onClick={onOpenTerminal} className="shrink-0 rounded-full border border-[#013E37]/20 px-3 py-1 text-[#111827] hover:bg-[#F3E7BE]/45">Terminal</button>
        <CalendlyButton label="Book a Call" className="shrink-0 px-3 py-1 text-xs" />
      </nav>
    </header>
  );
}
