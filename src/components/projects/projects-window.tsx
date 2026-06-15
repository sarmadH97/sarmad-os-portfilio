import { StaggerGroup, StaggerItem } from "@/components/ui/motion";

interface ProjectSummary {
  name: string;
  website?: string;
  challenge: string;
  approach: string;
  outcome: string;
}

const projects: ProjectSummary[] = [
  { name: "Upbeater", website: "https://upbeater.com/", challenge: "An early-stage startup needed to turn product direction into a credible SaaS experience quickly.", approach: "Worked as a founding engineer across product architecture, frontend delivery, backend collaboration, and AI workflow planning.", outcome: "Helped create a production-ready foundation for startup execution, onboarding, and future AI-enabled product growth." },
  { name: "AI-Powered Government Procurement Platform", challenge: "Government procurement teams needed smarter ways to identify contract opportunities and act on complex data.", approach: "Built modern frontend experiences and AI-assisted workflows for a procurement technology platform serving government contracting teams.", outcome: "Delivered practical AI product capabilities around contract intelligence, automation, and decision support." },
  { name: "Global Payroll & Workforce Management Platform", challenge: "Global HR and payroll workflows required clarity, scale, and reliability across complex workforce operations.", approach: "Delivered enterprise frontend features for a payroll and workforce management system used by distributed teams across multiple regions.", outcome: "Supported more dependable payroll, workforce, and employee self-service workflows for enterprise teams." },
  { name: "Middle East Financial Services Platform", challenge: "Financial services workflows needed reliable customer-facing and operational experiences for currency exchange operations.", approach: "Contributed to customer-facing digital experiences for a large regional financial services and currency exchange organization operating across the Middle East.", outcome: "Enhanced operational and customer workflows while respecting compliance, reliability, and user experience expectations." },
  { name: "ExpenseLinx", website: "https://expertlinx.com/", challenge: "Expense management required tenant-aware experiences, governance, and dependable release practices.", approach: "Connected product flows with backend integrations and deployment discipline across cloud environments.", outcome: "Delivered a maintainable foundation for scalable finance operations and future product growth." },
  { name: "Terra AI Assistant", website: "https://tinyurl.com/0waspSeries", challenge: "Teams needed a practical way to turn scattered task context into useful execution support.", approach: "Designed an AI assistant around workflow guidance, centralized context, and rapid product validation.", outcome: "Won the Techlogix AI Hackathon by demonstrating practical automation value, not novelty for its own sake." },
];

export function ProjectsWindow() {
  return (
    <StaggerGroup className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <StaggerItem key={project.name}>
          <article className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-md motion-reduce:transform-none">
          <p className="text-lg font-semibold text-[#111827]">{project.name}</p>
          {project.website ? <a className="text-xs text-[#8A5A2B] transition hover:text-[#111827] hover:underline" href={project.website} target="_blank" rel="noreferrer">{project.website}</a> : null}
          <div className="mt-4 space-y-2 text-base leading-7 text-slate-600">
            <p><span className="font-medium text-[#111827]">Challenge:</span> {project.challenge}</p>
            <p><span className="font-medium text-[#111827]">Approach:</span> {project.approach}</p>
            <p><span className="font-medium text-[#111827]">Outcome:</span> {project.outcome}</p>
          </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
