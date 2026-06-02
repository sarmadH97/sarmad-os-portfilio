const services = [
  { title: "MVP Development", points: ["Fast iteration", "Scalable foundations", "Startup-ready architecture"] },
  { title: "AI Workflow Integration", points: ["OpenAI integrations", "AI copilots", "Workflow automation"] },
  { title: "Product Engineering", points: ["Frontend architecture", "API integration", "Performance-focused UX"] },
  { title: "Startup Technical Guidance", points: ["Architecture decisions", "MVP planning", "Stack selection"] },
  { title: "Cloud & Deployment", points: ["Azure/AWS", "CI/CD", "Vercel production pipelines"] },
];

const idealFor = ["Founders building credible MVPs", "SaaS teams needing technical ownership", "AI startups shipping practical workflows", "Teams moving from prototype to production"];

const workflow = [
  { step: "1. Clarity", detail: "Translate product goals into a focused technical plan." },
  { step: "2. Build", detail: "Ship quality increments and validate quickly." },
  { step: "3. Scale", detail: "Harden architecture, delivery, and reliability." },
];

export function FounderEngineeringWindow() {
  return (
    <div className="space-y-5">
      <p className="max-w-3xl text-sm text-slate-600">Technical partnership for founders turning ideas into scalable MVPs and production-ready SaaS products.</p>
      <div className="grid gap-3 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="font-semibold text-slate-950">{service.title}</h3>
            <ul className="mt-2 space-y-1 text-xs text-slate-600">{service.points.map((point) => <li key={point}>• {point}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-slate-950">Ideal For</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">{idealFor.map((item) => <li key={item}>• {item}</li>)}</ul>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-slate-950">What Working With Me Looks Like</h3>
          <div className="mt-3 grid gap-2">{workflow.map((item) => <article key={item.step} className="rounded-xl bg-slate-50 p-3"><p className="text-sm font-medium text-slate-950">{item.step}</p><p className="text-xs text-slate-600">{item.detail}</p></article>)}</div>
        </section>
      </div>
    </div>
  );
}
