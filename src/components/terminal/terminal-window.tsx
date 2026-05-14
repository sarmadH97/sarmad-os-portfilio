"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const commands: Record<string, string> = {
  help: "Commands: whoami, skills, projects, experience, contact, clear, help",
  whoami: "sarmad — product-focused full-stack engineer",
  skills: "TypeScript, Next.js, React, Node.js, AWS, Terraform, Postgres",
  projects: "AI workflow dashboard, deployment architecture map, DX automation suite",
  experience: "8+ years building production SaaS and platform engineering systems",
  contact: "hello@sarmad.dev · linkedin.com/in/sarmad",
};

const bootLogs = [
  "[ok] initializing runtime modules...",
  "[ok] loading AI workflow context...",
  "[ok] mounting deployment graph...",
  "[ok] terminal ready",
];

export function TerminalWindow() {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [blink, setBlink] = useState(true);
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i >= bootLogs.length) return clearInterval(timer);
      setHistory((h) => [...h, bootLogs[i]]);
      i += 1;
    }, 240);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  const lines = useMemo(() => history.join("\n"), [history]);

  return (
    <div>
      <pre ref={ref} className="mb-3 h-56 overflow-auto rounded-xl border border-emerald-300/15 bg-[#02070a]/90 p-3 font-mono text-xs leading-6 text-emerald-300">{lines}</pre>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const cmd = input.trim().toLowerCase();
          if (!cmd) return;
          if (cmd === "clear") {
            setHistory([]);
          } else {
            setHistory((h) => [...h, `$ ${cmd}`, commands[cmd] ?? `Command not found: ${cmd}`]);
          }
          setInput("");
        }}
      >
        <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-sm text-slate-200">
          <span className="text-emerald-300">$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="Terminal command"
            className="w-full bg-transparent text-slate-100 outline-none"
            placeholder="type command"
          />
          <span className={blink ? "text-emerald-300" : "text-transparent"}>▍</span>
        </label>
      </form>
    </div>
  );
}
