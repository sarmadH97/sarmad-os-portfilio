const experience = [
  {
    company: "Techlogix",
    website: "https://www.techlogix.com/",
    role: "Software Engineer",
    focus:
      "Built frontend-heavy full stack product features across React/Next.js and TypeScript ecosystems with .NET backend collaboration.",
    bullets: [
      "Delivered scalable frontend architecture for enterprise-facing systems",
      "Worked with product teams on fintech-style workflows and usability",
      "Collaborated with DevOps on deployment reliability and release quality",
    ],
  },
  {
    company: "Technexia",
    website: "https://technexia.com/",
    role: "Senior Software Engineer",
    focus:
      "Led product engineering initiatives across SaaS platforms, mentoring developers and improving delivery through architecture clarity and AI-assisted workflows.",
    bullets: [
      "Drove React/Next.js modernization and TypeScript consistency",
      "Partnered with backend teams on .NET APIs, SQL Server, and system contracts",
      "Mentored engineers and strengthened cross-functional Agile collaboration",
    ],
  },
];

export function ExperienceWindow() {
  return (
    <div className="space-y-4">
      {experience.map((item) => (
        <article key={item.company} className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-lg font-semibold text-white">{item.company}</p>
            <a href={item.website} target="_blank" rel="noreferrer" className="text-xs text-cyan-200 hover:underline">{item.website}</a>
          </div>
          <p className="text-sm text-cyan-100">{item.role}</p>
          <p className="mt-2 text-sm text-slate-200">{item.focus}</p>
          <ul className="mt-3 space-y-1 text-xs text-slate-300">{item.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>
        </article>
      ))}
    </div>
  );
}
