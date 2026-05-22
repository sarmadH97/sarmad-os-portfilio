const services = [
  {
    title: "MVP Development",
    points: [
      "Fast iteration loops with product feedback built in",
      "Scalable foundations from day one",
      "Modern product engineering with startup-ready architecture",
    ],
  },
  {
    title: "AI Workflow Integration",
    points: [
      "OpenAI integrations and domain-aware copilots",
      "Workflow automation for internal velocity",
      "AI-assisted product features designed for real usage",
    ],
  },
  {
    title: "Product Engineering",
    points: [
      "Frontend architecture for long-term maintainability",
      "Robust API integrations and system contracts",
      "Performance optimization with enterprise-grade UX discipline",
    ],
  },
  {
    title: "Startup Technical Guidance",
    points: [
      "Architecture decision support for early-stage products",
      "MVP planning and technical scoping",
      "Stack selection and scalability planning",
    ],
  },
  {
    title: "Cloud & Deployment",
    points: [
      "Production-ready Azure and AWS practices",
      "CI/CD workflows with GitHub Actions and Vercel",
      "Deployment pipelines built for reliability and speed",
    ],
  },
];

const idealFor = [
  "Founders turning product ideas into credible MVPs",
  "SaaS teams needing frontend-heavy full stack leadership",
  "AI startups integrating practical LLM workflows",
  "Product teams scaling from prototype to production",
];

const workflow = [
  {
    step: "1. Product Clarity",
    detail: "Translate founder goals into a crisp technical execution plan with clear priorities.",
  },
  {
    step: "2. Build & Validate",
    detail: "Ship production-quality increments quickly, validate with users, and iterate with confidence.",
  },
  {
    step: "3. Scale & Stabilize",
    detail: "Harden architecture, deployment, and quality workflows for long-term product growth.",
  },
];

export function FounderEngineeringWindow() {
  return (
    <div className="space-y-5">
      <p className="max-w-4xl text-sm text-slate-200">
        I partner with founders and startup teams to turn ambitious ideas into scalable MVPs and production-ready products—without sacrificing
        architecture quality, delivery speed, or user experience.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:bg-white/10">
            <h3 className="text-base font-semibold text-white">{service.title}</h3>
            <ul className="mt-2 space-y-1 text-xs text-slate-300">
              {service.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-base font-semibold text-white">Ideal For</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-200">
            {idealFor.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-base font-semibold text-white">What Working With Me Looks Like</h3>
          <div className="mt-2 space-y-2">
            {workflow.map((item) => (
              <article key={item.step} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-sm font-medium text-cyan-100">{item.step}</p>
                <p className="text-xs text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
