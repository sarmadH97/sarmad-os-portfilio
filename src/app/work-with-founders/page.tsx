import Link from "next/link";
import { SiteShell } from "@/components/desktop/site-shell";

const reasons = [
  ["Product thinking", "I translate founder context into buildable product decisions, not just tickets."],
  ["Ambiguity-friendly", "Early-stage work is messy. I help turn uncertainty into a focused execution path."],
  ["Fast MVP delivery", "Ship the smallest credible product quickly while protecting the foundation."],
  ["Scalable foundations", "Architecture decisions are made to avoid expensive rewrites later."],
  ["AI-native approach", "Practical AI features, copilots, and workflow automation where they create leverage."],
  ["Startup mindset", "Bias toward outcomes, speed, clarity, and real user feedback."],
];

const services = [
  ["MVP Development", "Move from idea to a usable product with crisp scope, fast iteration, and scalable foundations."],
  ["AI Integration", "Add OpenAI-powered workflows, copilots, and AI-assisted product features with practical guardrails."],
  ["Product Architecture", "Shape frontend, API, data, and deployment decisions around the business model."],
  ["Technical Strategy", "Choose the right stack, sequencing, and product roadmap for stage and runway."],
  ["Cloud & Deployment", "Launch with CI/CD, Azure, AWS, Vercel, and production deployment discipline."],
  ["Frontend Leadership", "Create polished UX systems that feel credible to users, investors, and teams."],
];

const idealFounders = ["Non-technical founders", "SaaS startups", "AI startups", "Fintech products", "First-MVP teams", "Fundraising-ready founders"];

const journey = [
  ["Idea", "Clarify the business goal, user, risk, and first useful product shape."],
  ["Product Strategy", "Turn vision into a focused roadmap and product decision framework."],
  ["MVP Planning", "Define scope, data flows, integrations, and launch requirements."],
  ["Development", "Build with modern UX, reliable APIs, and pragmatic architecture."],
  ["Launch", "Prepare deployment, analytics, QA, and feedback loops for real users."],
  ["Scale", "Stabilize systems, improve performance, and plan the next growth layer."],
];

const caseStudies = [
  ["Upbeater", "Helped shape a startup-ready product experience with fast iteration, modern UX, and scalable frontend patterns."],
  ["Atlas HXM", "Supported enterprise workflow clarity through modular product thinking and architecture-aware execution."],
  ["ExpenseLinx", "Contributed to multi-tenant product delivery with deployment discipline, integrations, and scalable system thinking."],
];

export default function WorkWithFoundersPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-28">
        <section className="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-xl shadow-slate-200/60 backdrop-blur-xl md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-600">Work With Founders</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">Helping founders turn ideas into products.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">I help founders validate ideas, build MVPs, integrate AI, and launch products ready for real users and future growth.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/sarmad-hussainz/" target="_blank" rel="noreferrer" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-slate-300/80">Book a Call</a>
            <Link href="/projects" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900">View Projects</Link>
          </div>
        </section>

        <Section title="Why founders work with me" eyebrow="Technical partner, not task taker">
          <CardGrid items={reasons} />
        </Section>

        <Section title="Founder services" eyebrow="Outcomes over tooling">
          <CardGrid items={services} />
        </Section>

        <section className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl">
            <p className="text-sm font-medium text-sky-600">Ideal founders</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">I work best with</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {idealFounders.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">{item}</span>)}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl">
            <p className="text-sm font-medium text-sky-600">Founder testimonial spotlight</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">Upbeater CEO / Founder recommendation</h2>
            <p className="mt-3 text-sm text-slate-600">Reserved for an upcoming founder recommendation. This will become a primary trust signal for startup collaboration, product ownership, and execution quality.</p>
            <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">Founder spotlight coming soon · profile photo · company logo · highlighted quote</div>
          </div>
        </section>

        <Section title="How I help from idea to scale" eyebrow="Startup journey">
          <div className="grid gap-3 md:grid-cols-3">
            {journey.map(([stage, detail]) => <article key={stage} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="font-semibold text-slate-950">{stage}</p><p className="mt-2 text-sm text-slate-600">{detail}</p></article>)}
          </div>
        </Section>

        <Section title="Founder-oriented case studies" eyebrow="Business challenge → product execution">
          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map(([name, detail]) => <article key={name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><p className="font-semibold text-slate-950">{name}</p><p className="mt-2 text-sm text-slate-600">{detail}</p></article>)}
          </div>
        </Section>
      </div>
    </SiteShell>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl"><p className="text-sm font-medium text-sky-600">{eyebrow}</p><h2 className="mt-2 mb-5 text-2xl font-semibold text-slate-950">{title}</h2>{children}</section>;
}

function CardGrid({ items }: { items: string[][] }) {
  return <div className="grid gap-3 md:grid-cols-3">{items.map(([title, detail]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><p className="font-semibold text-slate-950">{title}</p><p className="mt-2 text-sm text-slate-600">{detail}</p></article>)}</div>;
}
