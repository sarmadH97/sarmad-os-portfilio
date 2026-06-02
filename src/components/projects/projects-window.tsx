const projects = [
  { name: "Upbeater", website: "https://www.upbeater.com/", goal: "Startup-ready growth platform UX.", architecture: "Modular Next.js UI, reusable product flows, and clean API boundaries.", impact: "Balanced fast iteration with scalable frontend foundations." },
  { name: "Atlas HXM", website: "https://www.atlashxm.com/", goal: "Enterprise HR/payroll workflows.", architecture: "Micro-frontend exposure across complex enterprise modules.", impact: "Improved clarity and reliability for large operational workflows." },
  { name: "ExpenseLinx", website: "https://expertlinx.com/", goal: "Multi-tenant expense management.", architecture: "REST integrations, tenant-aware flows, and Azure release collaboration.", impact: "Built for governance, scale, and maintainable product delivery." },
  { name: "Terra AI Assistant", website: "https://tinyurl.com/0waspSeries", goal: "AI assistant for task management.", architecture: "LLM-powered workflow guidance with centralized context.", impact: "Won Techlogix AI Hackathon for practical automation value." },
];

export function ProjectsWindow() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-lg font-semibold text-slate-950">{project.name}</p>
          <a className="text-xs text-sky-700 hover:underline" href={project.website} target="_blank" rel="noreferrer">{project.website}</a>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p><span className="font-medium text-slate-950">Goal:</span> {project.goal}</p>
            <p><span className="font-medium text-slate-950">Architecture:</span> {project.architecture}</p>
            <p><span className="font-medium text-slate-950">Impact:</span> {project.impact}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
