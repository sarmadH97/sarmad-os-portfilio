"use client";

import { Activity, FileText, Home, Menu, Wifi, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const isActive = (href: string) => pathname.startsWith(href);
  const closeMenu = () => setMenuOpen(false);
  const openTerminal = () => {
    closeMenu();
    onOpenTerminal();
  };

  return (
    <header className="fixed left-3 right-3 top-3 z-50 rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/75 px-3 py-2 shadow-sm backdrop-blur-2xl transition-[box-shadow,background-color,border-color] duration-300 md:px-4">
      <div className="flex items-center justify-between gap-3 text-xs text-slate-600">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Go to home page"
          className={cn(
            "group inline-flex items-center gap-2 rounded-full px-2 py-1 font-semibold text-[#111827] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAEDCD]/45 active:translate-y-0 motion-reduce:transform-none",
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
                "relative rounded-full px-3 py-1 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAEDCD]/35 hover:text-[#111827] active:translate-y-0 motion-reduce:transform-none",
                isActive(item.href) && "bg-[#FAEDCD]/30 text-[#8A5A2B] after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-[#D4A373]/60",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-[#D4A373]/20 px-3 py-1 text-[#111827] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAEDCD]/45 active:translate-y-0 motion-reduce:transform-none"><FileText className="h-3.5 w-3.5" aria-hidden="true" />Resume ↗</a>
          <button onClick={onOpenTerminal} className="rounded-full border border-[#D4A373]/20 px-3 py-1 text-[#111827] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAEDCD]/45 active:translate-y-0 motion-reduce:transform-none">Terminal</button>
          <CalendlyButton label="Book a Call" className="px-3 py-1 text-xs" />
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Activity className="hidden h-3.5 w-3.5 text-[#8A5A2B] md:block" />
          <Wifi className="h-4 w-4" />
          <span>{time}</span>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[#D4A373]/15 bg-[#FEFAE0]/70 text-[#111827] transition hover:bg-[#FAEDCD]/70 md:hidden"
        >
          {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen ? (
        <nav className="mt-3 grid gap-2 border-t border-[#D4A373]/10 pt-3 text-sm text-slate-600 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "relative rounded-2xl px-3 py-3 transition-all duration-200 hover:bg-[#FEFAE0]/65 hover:text-[#111827]",
                isActive(item.href) && "bg-[#FEFAE0]/75 text-[#8A5A2B] after:absolute after:inset-y-3 after:left-0 after:w-0.5 after:rounded-full after:bg-[#D4A373]/70",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noreferrer" onClick={closeMenu} className="inline-flex items-center gap-2 rounded-2xl px-3 py-3 text-[#111827] transition hover:bg-[#FEFAE0]/65"><FileText className="h-4 w-4" aria-hidden="true" />Resume ↗</a>
          <button onClick={openTerminal} className="rounded-2xl px-3 py-3 text-left text-[#111827] transition hover:bg-[#FEFAE0]/65">Terminal</button>
          <CalendlyButton label="Book a Call" className="w-full px-3 py-3 text-sm" />
          <div className="flex items-center gap-3 px-3 py-2 text-xs text-slate-500">
            <Wifi className="h-4 w-4" />
            <span>{time}</span>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
