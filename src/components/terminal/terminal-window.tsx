"use client";

import { useMemo, useState } from "react";

const commands: Record<string, string> = {
  help: "Available commands: help, about, stack, projects, clear",
  about: "Building premium frontend + platform experiences.",
  stack: "Next.js · TypeScript · Node.js · AWS · Terraform · Postgres",
  projects: "AI Workflow Hub, Deployment Graph, Cross-team Dev Platform",
};

export function TerminalWindow() {
  const [history, setHistory] = useState<string[]>(["SarmadOS Terminal v1.0", "Type 'help' to start"]);
  const [input, setInput] = useState("");

  const lines = useMemo(() => history.join("\n"), [history]);

  return (
    <div>
      <pre className="mb-3 h-56 overflow-auto rounded-xl bg-black/40 p-3 font-mono text-xs text-emerald-300">{lines}</pre>
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
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Terminal command"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm text-slate-100 outline-none ring-sky-400 focus:ring-2"
          placeholder="run command..."
        />
      </form>
    </div>
  );
}
