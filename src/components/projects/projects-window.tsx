const projects = [
  {
    name: "Upbeater",
    website: "https://www.upbeater.com/",
    summary:
      "AI-assisted growth platform crafted with founding-engineer energy, blending modern UX with scalable frontend architecture for startup velocity.",
    highlights: [
      "Positioned product around AI-assisted workflow acceleration",
      "Built scalable React/Next.js UI architecture for rapid iteration",
      "Focused on conversion-oriented UX and product engineering feedback loops",
    ],
  },
  {
    name: "Atlas HXM",
    website: "https://www.atlashxm.com/",
    summary:
      "Enterprise HR/payroll platform engineering with modular frontend systems, high-volume workflow orchestration, and performance-conscious architecture.",
    highlights: [
      "Contributed to modular frontend systems and micro-frontend exposure",
      "Optimized large-scale enterprise workflows and interaction reliability",
      "Partnered across product and engineering for architecture-led delivery",
    ],
  },
  {
    name: "ExpenseLinx",
    website: "https://expertlinx.com/",
    summary:
      "Multi-tenant expense management platform with strong frontend/backend integration, scalable system design, and Azure-aligned deployment thinking.",
    highlights: [
      "Supported multi-tenant architecture and policy-driven expense operations",
      "Worked across frontend and backend boundaries for reliable data flows",
      "Improved deployment pipeline quality with cloud/DevOps collaboration",
    ],
  },
];

export function ProjectsWindow() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {projects.map((project) => (
        <article key={project.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
          <p className="text-lg font-semibold text-white">{project.name}</p>
          <a className="text-xs text-cyan-200 hover:underline" href={project.website} target="_blank" rel="noreferrer">{project.website}</a>
          <p className="mt-3 text-sm text-slate-200">{project.summary}</p>
          <ul className="mt-3 space-y-1 text-xs text-slate-300">
            {project.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
