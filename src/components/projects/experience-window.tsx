const experience = [
  {
    company: "Techlogix",
    website: "https://www.techlogix.com/",
    role: "Senior Software Engineer",
    story:
      "Grew from execution-heavy engineering into architecture-focused ownership, leading critical platform initiatives across fintech and enterprise product lines.",
    impact: [
      "Contributed to AI-driven features using Next.js, TypeScript, Tailwind, and OpenAI-powered workflows",
      "Shipped payroll and global expansion modules in a micro-frontend ecosystem with strong UX consistency",
      "Led migration of 100+ .NET services to RESTful APIs for better interoperability and scale",
    ],
    stack: "React · Next.js · TypeScript · .NET · Azure DevOps · REST APIs",
  },
  {
    company: "Technexia",
    website: "https://technexia.com/",
    role: "Executive Software Developer",
    story:
      "Developed enterprise-grade systems with a strong performance and architecture mindset, while expanding backend and cloud implementation depth.",
    impact: [
      "Designed and optimized 20+ web APIs to improve application throughput",
      "Built SQL Server procedures/functions and application-level integration layers",
      "Implemented Azure DevOps-based database architecture patterns for a US client",
    ],
    stack: "JavaScript/TypeScript · ASP.NET MVC · SQL Server · Azure",
  },
  {
    company: "Pixcile Technologies",
    website: "#",
    role: "Software Engineer",
    story:
      "Built early-career foundations in full stack delivery, transforming hands-on coding experience into production discipline.",
    impact: [
      "Created multiple frontend features and practical JavaScript modules",
      "Built a real-world tracking module using Leaflet.js",
      "Strengthened debugging and system-thinking fundamentals in delivery environments",
    ],
    stack: "C# · ASP.NET · SQL · JavaScript · Leaflet.js",
  },
];

export function ExperienceWindow() {
  return (
    <div className="space-y-4">
      {experience.map((item) => (
        <article key={item.company} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-lg font-semibold text-white">{item.company}</p>
            {item.website !== "#" ? <a href={item.website} target="_blank" rel="noreferrer" className="text-xs text-cyan-200 hover:underline">{item.website}</a> : null}
          </div>
          <p className="text-sm text-cyan-100">{item.role}</p>
          <p className="mt-2 text-sm text-slate-200">{item.story}</p>
          <ul className="mt-3 space-y-1 text-xs text-slate-300">{item.impact.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>
          <p className="mt-3 text-xs text-cyan-100">Tech stack: {item.stack}</p>
        </article>
      ))}
    </div>
  );
}
