"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const welcomeLines = [
  "Welcome to SarmadOS Terminal",
  "Product-engineer command center · optional playful layer",
  "",
  "Available commands:",
  "- whoami - skills - projects - experience - founder",
  "- funfact - quiz - favorites - clear - help",
  "",
  "Type a command to continue.",
];

const funFacts = [
  "Built a custom gaming PC.",
  "Enjoys PC hardware, upgrades, and performance tuning.",
  "Plays FIFA when it is time to switch off from product work.",
  "Enjoys story-driven games with strong worldbuilding.",
  "Watches movies and TV shows to recharge creatively.",
  "Loves building products from scratch, not just isolated features.",
  "Enjoys experimenting with AI tools and workflow automation.",
  "Has experience teaching and mentoring developers.",
  "Uses AI daily for product development and engineering workflows.",
  "Won a company AI hackathon by building a practical assistant for team workflows.",
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
  whoami: [
    "Sarmad Hussain",
    "",
    "Narrative:",
    "• Enterprise engineering experience",
    "• Startup execution speed",
    "• AI-powered product development",
    "",
    "Role:",
    "• Senior Software Engineer",
    "• Product Engineer",
    "",
    "Experience Highlights:",
    "• Global Net Banking Platform",
    "• Atlas HXM Payroll Platform",
    "• Procurement Sciences",
    "• Al Fardan Exchange",
    "• Upbeater",
    "",
    "Industries:",
    "• Banking",
    "• Fintech",
    "• Payroll",
    "• Government Procurement",
    "• AI",
    "• SaaS",
    "",
    "How I help:",
    "• Join as a Senior or Founding Engineer",
    "• Help founders build MVPs",
    "• Build enterprise-grade systems",
    "• Deliver AI-enabled products",
  ].join("\n"),
  skills:
    "Capabilities:\n• Product-minded frontend engineering\n• MVP architecture\n• API integration\n• AI workflow design\n• Secure delivery\n• Azure/AWS deployment\n• Pragmatic technical leadership",
  projects:
    "Projects:\n• Upbeater — AI-native startup platform\n• Procurement Sciences — government procurement AI workflows\n• Atlas HXM — enterprise payroll platform\n• Al Fardan Exchange — financial services workflows\n• Terra AI Assistant — hackathon-winning workflow assistant",
  experience:
    "Experience:\n• Global Net Banking Platform — banking, security, performance\n• Atlas HXM — payroll and workforce management\n• Procurement Sciences — government procurement AI\n• Al Fardan Exchange — currency exchange and financial services\n• Upbeater — founding engineer startup execution",
  founder:
    "Founder support:\n• Validate product direction\n• Define MVP scope\n• Choose sensible architecture\n• Integrate AI where it creates leverage\n• Launch production-ready systems without overengineering",
  favorites: [
    "Favorites",
    "",
    "Favorite Work:",
    "• Turning startup ideas into real products.",
    "",
    "Favorite Stack:",
    "• React",
    "• Next.js",
    "• TypeScript",
    "• .NET",
    "",
    "Favorite Games:",
    "• FIFA",
    "",
    "Favorite Activities:",
    "• Building PCs",
    "• Watching movies",
    "• Exploring new technology",
    "",
    "Favorite Product Type:",
    "• SaaS",
    "• AI products",
  ].join("\n"),
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
  const reduceMotion = useReducedMotion();

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
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.99 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <motion.pre
        key={history.length}
        ref={ref}
        initial={{ opacity: 0.72 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
        className="mb-3 h-60 overflow-auto rounded-xl border border-[#D4A373]/20 bg-[#020101]/95 p-3 font-terminal text-xs leading-6 text-[#F9EBD2]"
      >
        {lines}
      </motion.pre>

      {gameOn ? (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.18 }} className="mb-3 rounded-xl border border-[#D4A373]/20 bg-black/80 p-3 font-terminal text-xs text-[#F9EBD2]">
          <p className="mb-2">Snake-lite mini game · score: {score} · move with arrow keys · type `play` again to exit.</p>
          <pre>{grid}</pre>
        </motion.div>
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
        <label className="flex items-center gap-2 rounded-lg border border-[#D4A373]/20 bg-black/85 px-3 py-2 font-terminal text-sm text-slate-200 transition-all duration-200 focus-within:border-[#D4A373]/50 focus-within:shadow-lg focus-within:shadow-[#D4A373]/10">
          <span className="text-[#D4A373]">$</span>
          <input value={input} onChange={(e) => setInput(e.target.value)} aria-label="Terminal command" className="w-full bg-transparent text-[#FEFAE0] outline-none" placeholder={quizIndex === null ? "type command" : "answer quiz question"} />
          <span className={blink ? "text-[#D4A373]" : "text-transparent"}>▍</span>
        </label>
      </form>
    </motion.div>
  );
}
