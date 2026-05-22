"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const commands: Record<string, string> = {
  help: "Commands: whoami, skills, projects, experience, stack, recommendations, contact, resume, currently-building, funfact, socials, play, snake, clear",
  whoami:
    "I’m Sarmad Hussain — a frontend-heavy full stack engineer who thrives in founding-engineer environments. I build scalable SaaS products with a product-first mindset, blending architecture thinking with polished execution. My core work spans React/Next.js interfaces, TypeScript systems, .NET/Node service integration, and fintech-grade workflows. I actively integrate AI-assisted delivery patterns (OpenAI-powered flows, prompt systems, practical automation) to improve shipping speed and quality. I enjoy mentoring engineers, shaping technical direction, and collaborating across product/design/data to turn ambitious ideas into reliable software. Current focus: AI-native product experiences, scalable frontend platforms, and cloud-ready delivery pipelines on Azure/AWS.",
  skills: "Frontend: React, Next.js, TypeScript, Tailwind, Redux, Framer Motion | Backend: .NET, Node.js, PostgreSQL, SQL Server | Cloud: Azure, AWS, Docker, CI/CD",
  projects: "Upbeater, Atlas HXM, ExpenseLinx — see Projects section for deep context and architecture highlights.",
  experience: "Techlogix, Technexia — enterprise product engineering, fintech workflows, mentoring, and architecture-led delivery.",
  stack: "Next.js · React · TypeScript · Tailwind · Node.js · .NET · PostgreSQL · SQL Server · Azure · AWS · GitHub Actions · Vercel",
  recommendations: "Open the Recommendations section to review endorsement previews and full LinkedIn links.",
  contact: "Reach me on LinkedIn: linkedin.com/in/sarmad-hussainz/",
  resume: "Resume available on request. Message me on LinkedIn for the latest version.",
  "currently-building": "Building AI-assisted product workflows, cleaner frontend architecture patterns, and founder-ready SaaS systems.",
  funfact: "I treat UI architecture like product storytelling: structure first, motion second, polish always.",
  socials: "GitHub: github.com/sarmadH97 | LinkedIn: linkedin.com/in/sarmad-hussainz/",
};

export function TerminalWindow() {
  const [history, setHistory] = useState<string[]>([
    "Welcome to SarmadOS Terminal",
    "",
    "Available commands:",
    "- whoami - skills - projects - experience - stack",
    "- recommendations - contact - resume - clear - help",
    "- currently-building - funfact - socials - play",
    "",
    "Type a command to continue.",
  ]);
  const [input, setInput] = useState("");
  const [blink, setBlink] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [target, setTarget] = useState({ x: 2, y: 2 });
  const [player, setPlayer] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!gameOn) return;
    const onKey = (e: KeyboardEvent) => {
      setPlayer((p) => {
        const next = { ...p };
        if (e.key === "ArrowUp") next.y = Math.max(0, p.y - 1);
        if (e.key === "ArrowDown") next.y = Math.min(5, p.y + 1);
        if (e.key === "ArrowLeft") next.x = Math.max(0, p.x - 1);
        if (e.key === "ArrowRight") next.x = Math.min(11, p.x + 1);
        return next;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gameOn]);

  useEffect(() => {
    if (!gameOn) return;
    if (player.x === target.x && player.y === target.y) {
      setScore((s) => s + 1);
      setTarget({ x: Math.floor(Math.random() * 12), y: Math.floor(Math.random() * 6) });
    }
  }, [gameOn, player, target]);

  const lines = useMemo(() => history.join("\n"), [history]);

  const grid = useMemo(() => {
    const rows: string[] = [];
    for (let y = 0; y < 6; y += 1) {
      let row = "";
      for (let x = 0; x < 12; x += 1) {
        if (x === player.x && y === player.y) row += "◼";
        else if (x === target.x && y === target.y) row += "◎";
        else row += "·";
      }
      rows.push(row);
    }
    return rows.join("\n");
  }, [player, target]);

  return (
    <div>
      <pre ref={ref} className="mb-3 h-60 overflow-auto rounded-xl border border-emerald-300/15 bg-[#02070a]/90 p-3 font-mono text-xs leading-6 text-emerald-300">{lines}</pre>

      {gameOn ? (
        <div className="mb-3 rounded-xl border border-cyan-300/20 bg-black/40 p-3 font-mono text-xs text-cyan-100">
          <p className="mb-2">Snake-lite mini game · score: {score} · move with arrow keys · type `play` again to exit.</p>
          <pre>{grid}</pre>
        </div>
      ) : null}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const cmd = input.trim().toLowerCase();
          if (!cmd) return;
          if (cmd === "clear") {
            setHistory([]);
          } else if (cmd === "play" || cmd === "snake") {
            setGameOn((g) => !g);
            setHistory((h) => [...h, `$ ${cmd}`, "Launching retro mini-game mode..."]);
          } else {
            setHistory((h) => [...h, `$ ${cmd}`, commands[cmd] ?? `Command not found: ${cmd}`]);
          }
          setInput("");
          requestAnimationFrame(() => ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" }));
        }}
      >
        <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-sm text-slate-200">
          <span className="text-emerald-300">$</span>
          <input value={input} onChange={(e) => setInput(e.target.value)} aria-label="Terminal command" className="w-full bg-transparent text-slate-100 outline-none" placeholder="type command" />
          <span className={blink ? "text-emerald-300" : "text-transparent"}>▍</span>
        </label>
      </form>
    </div>
  );
}
