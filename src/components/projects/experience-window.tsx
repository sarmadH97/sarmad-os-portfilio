interface IndustryHighlight {
  title: string;
  summary: string;
  focus: string[];
  outcome: string;
  tags?: string;
}

interface ExperienceItem {
  company: string;
  website: string;
  role: string;
  story: string;
  impact: string[];
  stack: string;
  industryHighlights?: IndustryHighlight[];
}

const experience: ExperienceItem[] = [
  {
    company: "Techlogix",
    website: "https://www.techlogix.com/",
    role: "Senior Software Engineer",
    story: "Led frontend-heavy product work across AI, fintech, payroll, and global expansion systems.",
    impact: ["Built AI-driven product features", "Shipped 50+ enterprise frontend features", "Led migration of 100+ .NET services to REST APIs"],
    stack: "React · Next.js · TypeScript · .NET · Azure DevOps",
    industryHighlights: [
      {
        title: "Fintech & Banking Systems",
        summary: "Worked on large-scale financial products, including a global net banking platform for a leading financial institution in Pakistan.",
        focus: ["Performance", "Reliability", "Security", "User Experience"],
        outcome: "Helped deliver frontend functionality used by thousands of banking customers while maintaining enterprise-grade engineering standards.",
      },
      {
        title: "Payroll & Workforce Management Systems",
        summary: "Worked on enterprise payroll and workforce management platforms serving organizations with complex HR, payroll, and employee lifecycle requirements.",
        focus: ["Payroll Processing", "Workforce Management", "Employee Self Service", "Performance & Scalability"],
        outcome: "Delivered frontend features used by HR and payroll teams while maintaining a strong focus on usability, reliability, and business process efficiency.",
        tags: "React · TypeScript · Payroll Systems · HR Tech · Enterprise Software",
      },
      {
        title: "Financial Services & Currency Exchange Platforms",
        summary: "Contributed to digital financial products for a currency exchange organization operating across the Middle East region.",
        focus: ["Currency Exchange Operations", "Customer Transactions", "Regulatory Compliance", "Financial Reporting"],
        outcome: "Built and enhanced customer-facing and operational workflows while working within the reliability and compliance expectations of financial services software.",
        tags: "Fintech · Financial Services · React · TypeScript · Enterprise Applications",
      },
    ],
  },
  { company: "Technexia", website: "https://technexia.com/", role: "Executive Software Developer", story: "Built enterprise systems while growing backend, database, and cloud delivery depth.", impact: ["Designed 20+ web APIs", "Optimized SQL Server procedures and integration layers", "Implemented Azure DevOps database architecture for a US client"], stack: "ASP.NET MVC · SQL Server · JavaScript · Azure" },
  { company: "Pixcile Technologies", website: "#", role: "Software Engineer", story: "Built early production foundations across Microsoft technologies and JavaScript applications.", impact: ["Built practical frontend modules", "Created a Leaflet.js tracking module", "Strengthened full stack delivery fundamentals"], stack: "C# · ASP.NET · SQL · JavaScript · Leaflet.js" },
];

function IndustryHighlightCard({ highlight }: { highlight: IndustryHighlight }) {
  return (
    <section className="mt-4 rounded-2xl border border-[#013E37]/10 bg-[#F3E7BE]/25 p-4">
      <p className="text-sm font-semibold text-[#111827]">{highlight.title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{highlight.summary}</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {highlight.focus.map((focus) => (
          <p key={focus} className="rounded-full bg-white px-3 py-2 text-xs font-medium text-[#013E37]">✓ {focus}</p>
        ))}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{highlight.outcome}</p>
      {highlight.tags ? <p className="mt-3 text-xs text-slate-500">{highlight.tags}</p> : null}
    </section>
  );
}

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

          {item.industryHighlights?.map((highlight) => <IndustryHighlightCard key={highlight.title} highlight={highlight} />)}

          <p className="mt-3 text-xs text-slate-500">{item.stack}</p>
        </article>
      ))}
    </div>
  );
}
