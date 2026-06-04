const experience = [
  {
    company: "Techlogix",
    website: "https://www.techlogix.com/",
    role: "Senior Software Engineer",
    story: "Led frontend-heavy product work across AI, fintech, payroll, and global expansion systems.",
    impact: ["Built AI-driven product features", "Shipped 50+ enterprise frontend features", "Led migration of 100+ .NET services to REST APIs"],
    stack: "React · Next.js · TypeScript · .NET · Azure DevOps",
    banking: {
      title: "Fintech & Banking Systems",
      summary: "Worked on large-scale financial products, including a global net banking platform for a leading financial institution in Pakistan.",
      focus: ["Performance", "Reliability", "Security", "User Experience"],
      outcome: "Helped deliver frontend functionality used by thousands of banking customers while maintaining enterprise-grade engineering standards.",
    },
  },
  { company: "Technexia", website: "https://technexia.com/", role: "Executive Software Developer", story: "Built enterprise systems while growing backend, database, and cloud delivery depth.", impact: ["Designed 20+ web APIs", "Optimized SQL Server procedures and integration layers", "Implemented Azure DevOps database architecture for a US client"], stack: "ASP.NET MVC · SQL Server · JavaScript · Azure" },
  { company: "Pixcile Technologies", website: "#", role: "Software Engineer", story: "Built early production foundations across Microsoft technologies and JavaScript applications.", impact: ["Built practical frontend modules", "Created a Leaflet.js tracking module", "Strengthened full stack delivery fundamentals"], stack: "C# · ASP.NET · SQL · JavaScript · Leaflet.js" },
];

export function ExperienceWindow() {
  return (
    <div className="space-y-4">
      {experience.map((item) => (
        <article key={item.company} className="rounded-2xl border border-[#013E37]/10 bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-lg font-semibold text-[#111827]">{item.company}</p>
            {item.website !== "#" ? <a href={item.website} target="_blank" rel="noreferrer" className="text-xs text-[#013E37] hover:underline">{item.website}</a> : null}
          </div>
          <p className="text-sm font-medium text-[#013E37]">{item.role}</p>
          <p className="mt-2 text-sm text-slate-600">{item.story}</p>
          <ul className="mt-3 space-y-1 text-xs text-slate-600">{item.impact.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>

          {item.banking ? (
            <section className="mt-4 rounded-2xl border border-[#013E37]/10 bg-[#F3E7BE]/25 p-4">
              <p className="text-sm font-semibold text-[#111827]">{item.banking.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.banking.summary}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {item.banking.focus.map((focus) => (
                  <p key={focus} className="rounded-full bg-white px-3 py-2 text-xs font-medium text-[#013E37]">✓ {focus}</p>
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.banking.outcome}</p>
            </section>
          ) : null}

          <p className="mt-3 text-xs text-slate-500">{item.stack}</p>
        </article>
      ))}
    </div>
  );
}
