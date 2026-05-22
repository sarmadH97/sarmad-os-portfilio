const projects = [
  {
    name: "Upbeater",
    website: "https://www.upbeater.com/",
    goal:
      "Shape a startup-ready product experience that feels fast, clear, and conversion-focused for modern growth teams.",
    challenge:
      "Building a frontend architecture that could ship quickly while still staying maintainable as product scope evolved.",
    architecture:
      "Structured modular React/Next.js UI domains, reusable component patterns, and clean API contracts to keep velocity high.",
    deployment:
      "Collaborated with CI/CD workflows and cloud release cycles to keep iterations safe, frequent, and measurable.",
    scale:
      "Balanced startup speed with long-term scalability through architecture-first UI decisions.",
    ai:
      "Contributed to AI-assisted product positioning and execution workflows for smarter iteration loops.",
  },
  {
    name: "Atlas HXM",
    website: "https://www.atlashxm.com/",
    goal:
      "Support enterprise HR and payroll product delivery with reliable UX across high-volume operational workflows.",
    challenge:
      "Handling complex enterprise logic while maintaining responsiveness and user clarity at scale.",
    architecture:
      "Worked within modular frontend and micro-frontend influenced patterns for large cross-team systems.",
    deployment:
      "Aligned releases with enterprise lifecycle constraints and quality gates in collaboration with platform teams.",
    scale:
      "Improved workflow reliability for large user groups spanning payroll and global expansion modules.",
    ai:
      "Applied AI-assisted engineering practices to speed implementation and documentation quality.",
  },
  {
    name: "ExpenseLinx",
    website: "https://expertlinx.com/",
    goal:
      "Deliver a robust multi-tenant expense management platform with strong product usability and governance.",
    challenge:
      "Orchestrating frontend/backend integration while preserving tenant isolation and consistent performance.",
    architecture:
      "Built cohesive interfaces over REST-based service boundaries with strong data flow discipline.",
    deployment:
      "Hands-on collaboration with Azure DevOps pipelines, release automation, and operational reliability practices.",
    scale:
      "Designed with multi-tenant growth, policy complexity, and maintainable extensibility in mind.",
    ai:
      "Integrated AI-assisted workflow thinking for faster triage and smarter user-story execution.",
  },
  {
    name: "Terra AI Assistant",
    website: "https://tinyurl.com/0waspSeries",
    goal:
      "Create an intelligent developer-task assistant that centralizes knowledge and accelerates execution.",
    challenge:
      "Combining LLM capabilities with practical team workflows without adding tool sprawl.",
    architecture:
      "Designed workflow-oriented assistant patterns around task context, summarization, and action guidance.",
    deployment:
      "Prototype-to-delivery flow aligned with hackathon speed and production-minded engineering rigor.",
    scale:
      "Structured as a platform concept that can expand across teams and product functions.",
    ai:
      "Winner of Techlogix AI Hackathon; core experience in generative AI workflow integration.",
  },
];

export function ProjectsWindow() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:bg-white/10">
          <p className="text-lg font-semibold text-white">{project.name}</p>
          <a className="text-xs text-cyan-200 hover:underline" href={project.website} target="_blank" rel="noreferrer">
            {project.website}
          </a>
          <div className="mt-3 space-y-2 text-sm text-slate-200">
            <p><span className="text-cyan-100">Product Goal:</span> {project.goal}</p>
            <p><span className="text-cyan-100">Engineering Challenge:</span> {project.challenge}</p>
            <p><span className="text-cyan-100">Architecture:</span> {project.architecture}</p>
            <p><span className="text-cyan-100">Deployment:</span> {project.deployment}</p>
            <p><span className="text-cyan-100">Scalability:</span> {project.scale}</p>
            <p><span className="text-cyan-100">AI Integration:</span> {project.ai}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
