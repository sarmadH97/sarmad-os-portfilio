const experience = [
  { company: "Techlogix", website: "https://www.techlogix.com/", role: "Senior Software Engineer", story: "Led frontend-heavy product work across AI, fintech, payroll, and global expansion systems.", impact: ["Built AI-driven features with Next.js, TypeScript, Tailwind, and OpenAI", "Shipped 50+ enterprise frontend features", "Led migration of 100+ .NET services to REST APIs"], stack: "React · Next.js · TypeScript · .NET · Azure DevOps" },
  { company: "Technexia", website: "https://technexia.com/", role: "Executive Software Developer", story: "Built enterprise systems while growing backend, database, and cloud delivery depth.", impact: ["Designed 20+ web APIs", "Optimized SQL Server procedures and integration layers", "Implemented Azure DevOps database architecture for a US client"], stack: "ASP.NET MVC · SQL Server · JavaScript · Azure" },
  { company: "Pixcile Technologies", website: "#", role: "Software Engineer", story: "Built early production foundations across Microsoft technologies and JavaScript applications.", impact: ["Built practical frontend modules", "Created a Leaflet.js tracking module", "Strengthened full stack delivery fundamentals"], stack: "C# · ASP.NET · SQL · JavaScript · Leaflet.js" },
];

export function ExperienceWindow() {
  return (
    <div className="space-y-4">
      {experience.map((item) => (
        <article key={item.company} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-lg font-semibold text-slate-950">{item.company}</p>
            {item.website !== "#" ? <a href={item.website} target="_blank" rel="noreferrer" className="text-xs text-sky-700 hover:underline">{item.website}</a> : null}
          </div>
          <p className="text-sm font-medium text-sky-700">{item.role}</p>
          <p className="mt-2 text-sm text-slate-600">{item.story}</p>
          <ul className="mt-3 space-y-1 text-xs text-slate-600">{item.impact.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>
          <p className="mt-3 text-xs text-slate-500">{item.stack}</p>
        </article>
      ))}
    </div>
  );
}
