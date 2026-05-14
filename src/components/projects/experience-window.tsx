const timeline = [
  { company: "ExpenseLinx", role: "Senior Engineer", duration: "2023 — Present", achievements: "Built fintech workflows, AI-assisted policy tooling, and led platform modernization.", tech: "Next.js, Node.js, PostgreSQL, AWS", leadership: "Mentored engineers and led architecture reviews." },
  { company: "Atlashxm", role: "Staff Product Engineer", duration: "2020 — 2023", achievements: "Unified internal systems into one workspace and increased delivery speed.", tech: "React, .NET, SQL Server, Azure", leadership: "Directed cross-functional delivery across product and engineering." },
  { company: "Upbeater", role: "Frontend Engineer", duration: "2017 — 2020", achievements: "Delivered high-impact campaign and analytics dashboards.", tech: "React, TypeScript, CI/CD", leadership: "Drove frontend quality and design-system consistency." },
];

export function ExperienceWindow() {
  return <div className="space-y-4">{timeline.map((item) => <article key={item.company} className="relative rounded-2xl border border-white/10 bg-white/5 p-4 pl-8">
    <span className="absolute left-3 top-6 h-2 w-2 rounded-full bg-cyan-300" />
    <p className="text-xs text-slate-400">{item.duration}</p>
    <h3 className="text-white font-semibold">{item.role} · {item.company}</h3>
    <p className="text-sm text-slate-200 mt-2">{item.achievements}</p>
    <p className="text-xs text-slate-300 mt-2">Tech: {item.tech}</p>
    <p className="text-xs text-cyan-100 mt-1">Leadership: {item.leadership}</p>
  </article>)}</div>;
}
