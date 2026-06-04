const projects = [
  { name: "Upbeater", website: "https://www.upbeater.com/", challenge: "A founder-led product needed a credible, scalable user experience without slowing early iteration.", approach: "Shaped reusable product flows and clear interface patterns that could evolve with customer feedback.", outcome: "Helped move the platform toward a startup-ready product experience with stronger execution velocity." },
  { name: "Atlas HXM", website: "https://www.atlashxm.com/", challenge: "Enterprise HR and payroll workflows needed clarity across complex global operations.", approach: "Improved modular product surfaces and collaborated inside large-scale delivery constraints.", outcome: "Supported more reliable, understandable workflows for operational teams at enterprise scale." },
  { name: "ExpenseLinx", website: "https://expertlinx.com/", challenge: "Expense management required tenant-aware experiences, governance, and dependable release practices.", approach: "Connected product flows with backend integrations and deployment discipline across cloud environments.", outcome: "Delivered a maintainable foundation for scalable finance operations and future product growth." },
  { name: "Terra AI Assistant", website: "https://tinyurl.com/0waspSeries", challenge: "Teams needed a practical way to turn scattered task context into useful execution support.", approach: "Designed an AI assistant around workflow guidance, centralized context, and rapid product validation.", outcome: "Won the Techlogix AI Hackathon by demonstrating practical automation value, not novelty for its own sake." },
];

export function ProjectsWindow() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.name} className="rounded-2xl border border-[#013E37]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-lg font-semibold text-[#111827]">{project.name}</p>
          <a className="text-xs text-[#013E37] hover:underline" href={project.website} target="_blank" rel="noreferrer">{project.website}</a>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p><span className="font-medium text-[#111827]">Challenge:</span> {project.challenge}</p>
            <p><span className="font-medium text-[#111827]">Approach:</span> {project.approach}</p>
            <p><span className="font-medium text-[#111827]">Outcome:</span> {project.outcome}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
