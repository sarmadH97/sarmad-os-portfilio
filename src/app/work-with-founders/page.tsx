import Link from "next/link";
import { SiteShell } from "@/components/desktop/site-shell";

const reasons = [
  ["Product thinking", "Shape the product path before writing code."],
  ["Ambiguity-friendly", "Turn early-stage uncertainty into clear next steps."],
  ["Fast MVP delivery", "Build the smallest credible product quickly."],
  ["Scalable foundations", "Avoid technical decisions that force rewrites later."],
  ["AI-native approach", "Use AI where it creates real product leverage."],
  ["Startup mindset", "Optimize for outcomes, users, and momentum."],
];

const services = [
  ["MVP Development", "Scope, build, and ship a usable product with a foundation that can grow."],
  ["AI Integration", "Add OpenAI workflows, copilots, and automation where they create meaningful leverage."],
  ["Product Architecture", "Make frontend, API, data, and deployment decisions around the business model."],
  ["Technical Strategy", "Choose the right stack, product sequence, and architecture for your stage."],
  ["Cloud & Deployment", "Launch with CI/CD, Azure, AWS, Vercel, and production deployment discipline."],
  ["Frontend Leadership", "Create polished product experiences that feel credible to users and investors."],
];

const idealFounders = ["Non-technical founders", "SaaS startups", "AI startups", "Fintech products", "First-MVP teams", "Fundraising-ready founders"];

const journey = [
  ["Idea", "Clarify the user, risk, and first useful product shape."],
  ["Product Strategy", "Turn vision into a focused roadmap."],
  ["MVP Planning", "Define scope, data flows, and integrations."],
  ["Development", "Build with modern UX and reliable architecture."],
  ["Launch", "Prepare deployment, QA, and feedback loops."],
  ["Scale", "Stabilize systems and plan the next growth layer."],
];

const caseStudies = [
  ["Upbeater", "Startup-ready product experience with fast iteration, modern UX, and scalable frontend patterns."],
  ["ExpenseLinx", "Multi-tenant expense platform delivery with deployment discipline and scalable system thinking."],
  ["Terra AI Assistant", "AI Hackathon-winning LLM platform built through product thinking, rapid execution, and practical workflow automation."],
];

export default function WorkWithFoundersPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-28">
        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-8 shadow-xl shadow-[#013E37]/10 backdrop-blur-xl md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#013E37]">Work With Founders</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#111827] md:text-6xl">Helping founders turn ideas into products.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">I help founders validate ideas, build MVPs, integrate AI, and launch products ready for real users and future growth.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/sarmad-hussainz/" target="_blank" rel="noreferrer" className="rounded-full bg-[#013E37] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#013E37]/25">Book a Call</a>
            <Link href="/projects" className="rounded-full border border-[#013E37]/20 bg-white px-5 py-3 text-sm font-medium text-[#111827]">View Projects</Link>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
          <p className="text-sm font-medium text-[#013E37]">Why founders choose me</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-[#111827]">Many founders don’t need a CTO on day one.</h2>
          <p className="mt-4 max-w-3xl text-base text-slate-600">They need someone who can help shape the product, make technical decisions, build quickly, and create a foundation that can scale. That’s where I help.</p>
        </section>

        <Section title="Why founders work with me" eyebrow="Technical partner, not task taker">
          <CardGrid items={reasons} />
        </Section>

        <Section title="Where I Add Value" eyebrow="Outcomes over tooling">
          <CardGrid items={services} />
        </Section>

        <section className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
            <p className="text-sm font-medium text-[#013E37]">Ideal founders</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#111827]">I work best with</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {idealFounders.map((item) => <span key={item} className="rounded-full border border-[#013E37]/10 bg-[#F3E7BE]/35 px-3 py-1 text-sm text-slate-700">{item}</span>)}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
            <p className="text-sm font-medium text-[#013E37]">Founder Perspectives</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Founder recommendation coming soon.</h2>
            <p className="mt-3 text-sm text-slate-600">Once added, this will become one of the strongest trust signals on the page—highlighting founder-level collaboration, product ownership, and startup execution.</p>
            <div className="mt-5 rounded-2xl border border-dashed border-[#013E37]/20 bg-[#F3E7BE]/35 p-4 text-sm text-slate-500">Featured founder card placeholder · profile photo · company logo · highlighted quote</div>
          </div>
        </section>

        <Section title="How I help from idea to scale" eyebrow="Startup journey">
          <div className="grid gap-3 md:grid-cols-3">
            {journey.map(([stage, detail]) => <article key={stage} className="rounded-2xl border border-[#013E37]/10 bg-white p-5 shadow-sm"><p className="font-semibold text-[#111827]">{stage}</p><p className="mt-2 text-sm text-slate-600">{detail}</p></article>)}
          </div>
        </Section>

        <Section title="Founder-oriented case studies" eyebrow="Business challenge → product execution">
          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map(([name, detail]) => <article key={name} className="rounded-2xl border border-[#013E37]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><p className="font-semibold text-[#111827]">{name}</p><p className="mt-2 text-sm text-slate-600">{detail}</p></article>)}
          </div>
        </Section>
      </div>
    </SiteShell>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl"><p className="text-sm font-medium text-[#013E37]">{eyebrow}</p><h2 className="mt-2 mb-5 text-2xl font-semibold text-[#111827]">{title}</h2>{children}</section>;
}

function CardGrid({ items }: { items: string[][] }) {
  return <div className="grid gap-3 md:grid-cols-3">{items.map(([title, detail]) => <article key={title} className="rounded-2xl border border-[#013E37]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><p className="font-semibold text-[#111827]">{title}</p><p className="mt-2 text-sm text-slate-600">{detail}</p></article>)}</div>;
}
