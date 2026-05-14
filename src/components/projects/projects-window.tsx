"use client";

import { useState } from "react";

const projects = [
  {
    name: "Upbeater",
    overview: "Growth platform for creator-led campaigns and engagement analytics.",
    role: "Lead product engineer designing frontend architecture and delivery flows.",
    tech: "Next.js, TypeScript, Node.js, PostgreSQL, Redis",
    architecture: "Event-driven services, shared UI system, analytics pipeline.",
    challenge: "Real-time campaign metrics at scale with low-latency dashboards.",
    infra: "AWS ECS, RDS, CloudFront, GitHub Actions CI/CD",
  },
  {
    name: "Atlashxm",
    overview: "Cross-team workflow OS for product, support, and engineering operations.",
    role: "Staff engineer owning platform UI/UX and integration architecture.",
    tech: "React, Tailwind, .NET APIs, SQL Server, Azure",
    architecture: "Modular micro-frontends with domain service boundaries.",
    challenge: "Unifying fragmented internal tools into one coherent workspace.",
    infra: "Azure App Service, Service Bus, Azure SQL, observability stack",
  },
  {
    name: "ExpenseLinx",
    overview: "Fintech-grade spend management with automated policy and approval engines.",
    role: "Senior full-stack engineer focused on rules engine and reporting.",
    tech: "Next.js, Node.js, PostgreSQL, OpenAI APIs",
    architecture: "Policy workflow engine, ledger-safe reporting pipelines.",
    challenge: "Balancing compliance, auditability, and UX simplicity.",
    infra: "AWS Lambda, S3, RDS, IaC-driven multi-env deployments",
  },
];

export function ProjectsWindow() {
  const [active, setActive] = useState(projects[0].name);
  const current = projects.find((p) => p.name === active) ?? projects[0];

  return <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
    <div className="space-y-2">
      {projects.map((project) => <button key={project.name} onClick={() => setActive(project.name)} className={`w-full rounded-xl border p-3 text-left transition ${active === project.name ? "border-cyan-300/50 bg-cyan-400/10" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
        <p className="font-medium text-white">{project.name}</p>
        <p className="text-xs text-slate-300 mt-1">{project.overview}</p>
      </button>)}
    </div>
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
      <h3 className="text-lg font-semibold text-white">{current.name}</h3>
      <p className="text-sm text-slate-200">{current.overview}</p>
      <Detail label="Role & Contribution" value={current.role} />
      <Detail label="Technologies" value={current.tech} />
      <Detail label="Architecture Highlights" value={current.architecture} />
      <Detail label="Engineering Challenges" value={current.challenge} />
      <Detail label="Deployment & Infrastructure" value={current.infra} />
    </div>
  </div>;
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div><p className="text-xs uppercase tracking-wide text-slate-400">{label}</p><p className="text-sm text-slate-200">{value}</p></div>;
}
