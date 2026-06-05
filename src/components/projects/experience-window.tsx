interface DomainSection {
  title: string;
  subtitle?: string;
  summary: string;
  stack?: string[];
  focus: string[];
  note?: string;
  website?: string;
  achievement?: string;
}

interface ExperienceItem {
  company: string;
  website: string;
  role: string;
  story: string;
  impact: string[];
  stack: string;
  domainSections?: DomainSection[];
}

const techlogixDomains: DomainSection[] = [
  {
    title: "Global Net Banking Platform",
    summary: "Built and maintained functionality for a global digital banking platform used by a leading financial institution in Pakistan.",
    stack: ["C#", ".NET", "SQL Server"],
    focus: ["Banking", "Security", "Performance", "Reliability"],
  },
  {
    title: "Atlas HXM",
    subtitle: "Payroll & Workforce Management Systems",
    summary: "Worked on a global enterprise payroll and workforce management platform serving organizations across multiple regions.",
    stack: ["React", "JavaScript", "TypeScript", ".NET"],
    focus: ["Payroll", "Workforce Management", "Employee Self Service", "Enterprise UX"],
    note: "Collaborated with globally distributed teams to deliver payroll functionality at enterprise scale.",
    website: "https://www.atlashxm.com/",
  },
  {
    title: "Procurement Sciences",
    subtitle: "Government Procurement & AI",
    summary: "Built AI-powered procurement workflows helping organizations identify and pursue government contract opportunities.",
    stack: ["Next.js", "React", "TypeScript", "OpenAI"],
    focus: ["AI Workflows", "Government Contracts", "Automation", "Data Intelligence"],
    note: "Worked with US-based teams to deliver AI-assisted procurement experiences.",
    website: "https://www.procurementsciences.com/",
  },
  {
    title: "Al Fardan Exchange",
    subtitle: "Financial Services & Currency Exchange",
    summary: "Contributed to financial products supporting currency exchange operations across the Middle East.",
    focus: ["Financial Services", "Currency Exchange", "Compliance", "Customer Experience"],
    note: "Built and enhanced operational workflows while working within the reliability expectations of financial services software.",
    website: "https://alfardanexchange.com/",
  },
  {
    title: "AI Hackathon Winner",
    summary: "Built Terra, an AI-powered assistant designed to automate workflows and improve productivity using LLM-based interactions.",
    focus: ["LLM Workflows", "Automation", "Productivity", "Rapid Execution"],
    achievement: "🏆 First Place Winner",
  },
];

const startupDomains: DomainSection[] = [
  {
    title: "Upbeater",
    subtitle: "Founding Engineer",
    summary: "Joined at an early stage and helped build the product from scratch.",
    stack: ["React", ".NET", "AI Integrations", "Workflow Automation"],
    focus: ["Product Architecture", "Frontend Development", "Backend Development", "AI Integrations", "Founder Collaboration"],
    note: "Worked directly with founders to define product direction, establish technical foundations, and build production-ready systems.",
    website: "https://www.upbeater.com/",
  },
  {
    title: "Expertlinx",
    subtitle: "Product Engineering & Consulting",
    summary: "Worked across multiple client products and business solutions.",
    focus: ["SaaS Products", "Business Applications", "Product Development", "Enterprise Workflows"],
    website: "https://expertlinx.com/",
  },
];

const experience: ExperienceItem[] = [
  {
    company: "Techlogix",
    website: "https://www.techlogix.com/",
    role: "Senior Software Engineer",
    story: "Enterprise engineering across banking, payroll, government procurement AI, financial services, and large-scale product systems.",
    impact: ["Delivered enterprise-grade frontend and backend functionality", "Built AI-driven product workflows", "Led migration of 100+ .NET services to REST APIs"],
    stack: "React · Next.js · TypeScript · .NET · SQL Server · OpenAI · Azure DevOps",
    domainSections: techlogixDomains,
  },
  { company: "Technexia", website: "https://technexia.com/", role: "Executive Software Developer", story: "Built enterprise systems while growing backend, database, and cloud delivery depth.", impact: ["Designed 20+ web APIs", "Optimized SQL Server procedures and integration layers", "Implemented Azure DevOps database architecture for a US client"], stack: "ASP.NET MVC · SQL Server · JavaScript · Azure" },
  { company: "Pixcile Technologies", website: "#", role: "Software Engineer", story: "Built early production foundations across Microsoft technologies and JavaScript applications.", impact: ["Built practical frontend modules", "Created a Leaflet.js tracking module", "Strengthened full stack delivery fundamentals"], stack: "C# · ASP.NET · SQL · JavaScript · Leaflet.js" },
];

function DomainSectionCard({ section }: { section: DomainSection }) {
  return (
    <section className="mt-4 rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/25 p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#111827]">{section.title}</p>
          {section.subtitle ? <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#8A5A2B]">{section.subtitle}</p> : null}
        </div>
        {section.website ? <a href={section.website} target="_blank" rel="noreferrer" className="text-xs font-medium text-[#8A5A2B] hover:underline">Website ↗</a> : null}
      </div>
      <p className="mt-2 text-base leading-7 text-slate-600">{section.summary}</p>
      {section.stack ? <p className="mt-3 text-sm text-slate-500"><span className="font-semibold text-[#111827]">Stack:</span> {section.stack.join(" · ")}</p> : null}
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {section.focus.map((focus) => (
          <p key={focus} className="rounded-full bg-[#FEFAE0] px-3 py-2 text-xs font-medium text-[#8A5A2B]">✓ {focus}</p>
        ))}
      </div>
      {section.note ? <p className="mt-3 text-base leading-7 text-slate-600">{section.note}</p> : null}
      {section.achievement ? <p className="mt-3 inline-flex rounded-full bg-[#FEFAE0] px-3 py-2 text-xs font-semibold text-[#8A5A2B]">{section.achievement}</p> : null}
    </section>
  );
}

function DomainSectionGrid({ sections }: { sections: DomainSection[] }) {
  return (
    <div>
      {sections.map((section) => <DomainSectionCard key={section.title} section={section} />)}
    </div>
  );
}

export function ExperienceWindow() {
  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-5 shadow-sm">
        <p className="text-sm font-medium text-[#8A5A2B]">Startup Experience</p>
        <h2 className="font-heading mt-2 text-2xl font-semibold text-[#111827]">Early-stage product execution backed by enterprise discipline.</h2>
        <DomainSectionGrid sections={startupDomains} />
      </section>

      {experience.map((item) => (
        <article key={item.company} className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-5 shadow-sm transition hover:shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-lg font-semibold text-[#111827]">{item.company}</p>
            {item.website !== "#" ? <a href={item.website} target="_blank" rel="noreferrer" className="text-xs text-[#8A5A2B] hover:underline">{item.website}</a> : null}
          </div>
          <p className="text-sm font-medium text-[#8A5A2B]">{item.role}</p>
          <p className="mt-2 text-base leading-7 text-slate-600">{item.story}</p>
          <ul className="mt-3 space-y-1 text-sm leading-6 text-slate-600">{item.impact.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>

          {item.domainSections ? <DomainSectionGrid sections={item.domainSections} /> : null}

          <p className="mt-3 text-sm text-slate-500">{item.stack}</p>
        </article>
      ))}
    </div>
  );
}
