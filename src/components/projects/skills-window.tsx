const categories = [
  { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind"], level: 95 },
  { name: "Backend", skills: ["Node.js", ".NET", "PostgreSQL", "SQL Server"], level: 90 },
  { name: "AI & Automation", skills: ["OpenAI APIs", "AI workflows", "Prompt ops"], level: 87 },
  { name: "Cloud & DevOps", skills: ["AWS", "Azure", "CI/CD", "GitHub Actions"], level: 88 },
  { name: "Architecture & Leadership", skills: ["System design", "Mentoring", "Product thinking"], level: 92 },
];

export function SkillsWindow() {
  return <div className="grid gap-3 md:grid-cols-2">{categories.map((cat) => <section key={cat.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
    <h3 className="text-white font-medium">{cat.name}</h3>
    <p className="text-xs text-slate-300 mt-1">{cat.skills.join(" · ")}</p>
    <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-cyan-300/80" style={{ width: `${cat.level}%` }} /></div>
  </section>)}</div>;
}
