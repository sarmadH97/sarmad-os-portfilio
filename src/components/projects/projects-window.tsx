const projects = [
  { name: "Upbeater", website: "https://www.upbeater.com/", challenge: "An early-stage startup needed to turn product direction into a credible SaaS experience quickly.", approach: "Worked as a founding engineer across product architecture, frontend delivery, backend collaboration, and AI workflow planning.", outcome: "Helped create a production-ready foundation for startup execution, onboarding, and future AI-enabled product growth." },
  { name: "Procurement Sciences", website: "https://www.procurementsciences.com/", challenge: "Government procurement teams needed smarter ways to identify contract opportunities and act on complex data.", approach: "Built AI-powered workflows with modern frontend systems, automation patterns, and OpenAI-assisted product experiences.", outcome: "Delivered practical AI product capabilities for US-based teams working in government contract intelligence." },
  { name: "Atlas HXM", website: "https://www.atlashxm.com/", challenge: "Global HR and payroll workflows required clarity, scale, and reliability across complex workforce operations.", approach: "Contributed modular product surfaces and enterprise UX improvements inside large-scale delivery constraints.", outcome: "Supported more dependable payroll and employee self-service workflows for distributed enterprise teams." },
  { name: "Al Fardan Exchange", website: "https://alfardanexchange.com/", challenge: "Financial services workflows needed reliable customer-facing and operational experiences for currency exchange operations.", approach: "Enhanced frontend flows while respecting compliance, reliability, and customer experience expectations.", outcome: "Contributed to financial software supporting currency exchange operations across the Middle East." },
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
          <div className="mt-4 space-y-2 text-base leading-7 text-slate-600">
            <p><span className="font-medium text-[#111827]">Challenge:</span> {project.challenge}</p>
            <p><span className="font-medium text-[#111827]">Approach:</span> {project.approach}</p>
            <p><span className="font-medium text-[#111827]">Outcome:</span> {project.outcome}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
