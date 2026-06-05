"use client";

import { Activity, FileText, Home, Wifi } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { RESUME_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

interface TopBarProps {
  onOpenTerminal: () => void;
}

const navItems = [
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

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="fixed left-3 right-3 top-3 z-50 rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/75 px-3 py-2 shadow-sm backdrop-blur-2xl md:px-4">
      <div className="flex items-center justify-between gap-3 text-xs text-slate-600">
        <Link
          href="/"
          aria-label="Go to home page"
          className={cn(
            "group inline-flex items-center gap-2 rounded-full px-2 py-1 font-semibold text-[#111827] transition hover:bg-[#FAEDCD]/45",
            pathname === "/" && "bg-[#FAEDCD]/45",
          )}
        >
          <Home className="h-3.5 w-3.5 text-[#8A5A2B] transition group-hover:scale-105" />
          <span className="underline-offset-4 group-hover:underline">Sarmad Hussain</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-3 py-1 transition hover:bg-[#FAEDCD]/35 hover:text-[#111827]",
                isActive(item.href) && "bg-[#FAEDCD]/30 text-[#8A5A2B] after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-[#D4A373]/60",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-[#D4A373]/20 px-3 py-1 text-[#111827] transition hover:bg-[#FAEDCD]/45"><FileText className="h-3.5 w-3.5" aria-hidden="true" />Resume ↗</a>
          <button onClick={onOpenTerminal} className="rounded-full border border-[#D4A373]/20 px-3 py-1 text-[#111827] transition hover:bg-[#FAEDCD]/45">Terminal</button>
          <CalendlyButton label="Book a Call" className="px-3 py-1 text-xs" />
        </nav>

        <div className="flex items-center gap-3">
          <Activity className="hidden h-3.5 w-3.5 text-[#8A5A2B] md:block" />
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
              "relative shrink-0 rounded-full border border-[#D4A373]/10 px-3 py-1 transition hover:bg-[#FAEDCD]/35 hover:text-[#111827]",
              isActive(item.href) && "border-[#D4A373]/20 bg-[#FAEDCD]/30 text-[#8A5A2B] after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-[#D4A373]/60",
            )}
          >
            {item.label}
          </Link>
        ))}
        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#D4A373]/20 px-3 py-1 text-[#111827] hover:bg-[#FAEDCD]/45"><FileText className="h-3.5 w-3.5" aria-hidden="true" />Resume ↗</a>
        <button onClick={onOpenTerminal} className="shrink-0 rounded-full border border-[#D4A373]/20 px-3 py-1 text-[#111827] hover:bg-[#FAEDCD]/45">Terminal</button>
        <CalendlyButton label="Book a Call" className="shrink-0 px-3 py-1 text-xs" />
      </nav>
    </header>
  );
}
