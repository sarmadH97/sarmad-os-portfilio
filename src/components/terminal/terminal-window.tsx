"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const welcomeLines = [
  "Welcome to SarmadOS Terminal",
  "Founder-engineer mode · optional playful layer",
  "",
  "Available commands:",
  "- whoami - skills - projects - experience - founder",
  "- funfact - quiz - favorites - clear - help",
  "",
  "Type a command to continue.",
];

const funFacts = [
  "5x Achiever of the Month at Techlogix.",
  "Winner of the Techlogix AI Hackathon.",
  "Built Terra, an AI assistant for task management and development workflows.",
  "Has worked on fintech, payroll, SaaS, AI workflows, and deployment-heavy systems.",
  "Enjoys building products, not just features.",
];

const quizQuestions = [
  {
    question: "Question 1: What does Sarmad help founders build?",
    answerHint: "Try: MVPs, SaaS products, or AI workflows.",
    isCorrect: (answer: string) => ["mvp", "saas", "ai workflow", "ai workflows", "products", "product"].some((term) => answer.includes(term)),
  },
  {
    question: "Question 2: What should startups avoid early?",
    answerHint: "Hint: building too much architecture too soon.",
    isCorrect: (answer: string) => answer.includes("overengineering") || answer.includes("over-engineering"),
  },
  {
    question: "Question 3: What is the goal of good product engineering?",
    answerHint: "Hint: useful, scalable products.",
    isCorrect: (answer: string) => answer.includes("useful") || answer.includes("scalable") || answer.includes("ship"),
  },
];

const commands: Record<string, string> = {
  help: "Commands: whoami, skills, projects, experience, founder, funfact, quiz, favorites, clear, help",
  whoami:
    "I’m Sarmad Hussain — a founder engineer and product-minded builder. I help teams move from rough idea to usable software by shaping product direction, making pragmatic architecture decisions, and shipping clean full-stack systems. My work sits at the intersection of frontend-heavy product engineering, AI workflows, fintech/enterprise systems, and deployment-ready SaaS foundations. I care about building products that users can trust, founders can demo, and teams can scale.",
  skills:
    "Capabilities: product-minded frontend engineering, MVP architecture, API integration, AI workflow design, secure delivery, Azure/AWS deployment, and pragmatic technical leadership.",
  projects:
    "Founder-relevant projects: Upbeater, ExpenseLinx, and Terra AI Assistant. Also shipped enterprise-scale work across Atlas HXM-style payroll and expansion systems.",
  experience:
    "Experience: Techlogix, Technexia, and Pixcile — spanning SaaS, fintech, payroll, AI workflows, REST API modernization, testing, and deployment-heavy delivery.",
  founder:
    "I help founders validate product direction, define MVP scope, choose sensible architecture, integrate AI where it creates leverage, and launch production-ready systems without overengineering the first version.",
  favorites:
    "Favorites:\n- Work: turning rough product ideas into usable systems\n- Stack: React, Next.js, TypeScript, Tailwind, .NET, Azure\n- Product type: SaaS, AI tools, founder-led products\n- Engineering style: clean architecture, fast iteration, practical decisions\n- Food: Qorma — a rich Pakistani curry made with meat, yogurt, spices, and slow-cooked gravy",
};

export function TerminalWindow() {
  const [history, setHistory] = useState<string[]>(welcomeLines);
  const [input, setInput] = useState("");
  const [blink, setBlink] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [target, setTarget] = useState({ x: 2, y: 2 });
  const [player, setPlayer] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [quizIndex, setQuizIndex] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
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

  const appendHistory = (items: string[]) => setHistory((h) => [...h, ...items]);

  const handleCommand = (cmd: string) => {
    if (quizIndex !== null && cmd !== "clear") {
      const current = quizQuestions[quizIndex];
      const normalized = cmd.toLowerCase();
      const correct = current.isCorrect(normalized);
      const nextScore = correct ? quizScore + 1 : quizScore;
      const nextIndex = quizIndex + 1;

      if (nextIndex >= quizQuestions.length) {
        appendHistory([
          `$ ${cmd}`,
          correct ? "Correct." : `Close enough to learn from. ${current.answerHint}`,
          `Quiz complete. Score: ${nextScore}/${quizQuestions.length}.`,
          "Founder engineering is about shipping useful, scalable products without unnecessary complexity.",
        ]);
        setQuizIndex(null);
        setQuizScore(0);
      } else {
        appendHistory([
          `$ ${cmd}`,
          correct ? "Correct." : `Not quite. ${current.answerHint}`,
          quizQuestions[nextIndex].question,
          quizQuestions[nextIndex].answerHint,
        ]);
        setQuizIndex(nextIndex);
        setQuizScore(nextScore);
      }
      return;
    }

    if (cmd === "clear") {
      setHistory(welcomeLines);
      setQuizIndex(null);
      setQuizScore(0);
    } else if (cmd === "funfact") {
      const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
      appendHistory([`$ ${cmd}`, fact]);
    } else if (cmd === "quiz") {
      setQuizIndex(0);
      setQuizScore(0);
      appendHistory([`$ ${cmd}`, "Startup Engineering Quiz started.", quizQuestions[0].question, quizQuestions[0].answerHint]);
    } else if (cmd === "play" || cmd === "snake") {
      setGameOn((g) => !g);
      appendHistory([`$ ${cmd}`, "Launching quiet retro mini-game mode..."]);
    } else {
      appendHistory([`$ ${cmd}`, commands[cmd] ?? `Command not found: ${cmd}. Type help for available commands.`]);
    }
  };

  return (
    <div>
      <pre ref={ref} className="mb-3 h-60 overflow-auto rounded-xl border border-emerald-300/15 bg-[#02070a]/90 p-3 font-terminal text-xs leading-6 text-emerald-300">{lines}</pre>

      {gameOn ? (
        <div className="mb-3 rounded-xl border border-cyan-300/20 bg-black/40 p-3 font-terminal text-xs text-cyan-100">
          <p className="mb-2">Snake-lite mini game · score: {score} · move with arrow keys · type `play` again to exit.</p>
          <pre>{grid}</pre>
        </div>
      ) : null}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const cmd = input.trim().toLowerCase();
          if (!cmd) return;
          handleCommand(cmd);
          setInput("");
          requestAnimationFrame(() => ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" }));
        }}
      >
        <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-terminal text-sm text-slate-200">
          <span className="text-emerald-300">$</span>
          <input value={input} onChange={(e) => setInput(e.target.value)} aria-label="Terminal command" className="w-full bg-transparent text-slate-100 outline-none" placeholder={quizIndex === null ? "type command" : "answer quiz question"} />
          <span className={blink ? "text-emerald-300" : "text-transparent"}>▍</span>
        </label>
      </form>
    </div>
  );
}
