import type { ReactNode } from "react";
import Link from "next/link";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/motion";
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

const enterpriseBackedExperience = ["Banking platforms", "Payroll systems", "AI-powered products", "Government procurement platforms", "Financial services software", "Startup SaaS products"];

const caseStudies = [
  ["Upbeater", "Joined early as a founding engineer and helped translate founder direction into a production-ready SaaS foundation."],
  ["Expertlinx", "Product engineering and consulting across client products, business applications, SaaS workflows, and operational systems."],
  ["AI Hackathon Project", "Built Terra, a first-place LLM assistant focused on practical workflow automation and rapid product execution."],
];

export default function WorkWithFoundersPage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-16 pt-24 sm:px-5 md:space-y-10 md:pb-20 md:pt-28">
        <Reveal>
          <section className="rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-5 shadow-xl shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:border-[#D4A373]/20 hover:shadow-2xl md:rounded-[2rem] md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8A5A2B]">Work With Founders</p>
          <h1 className="font-display mt-4 max-w-4xl text-[clamp(2.4rem,12vw,4.25rem)] font-black uppercase leading-[0.96] text-[#111827] md:text-7xl">Helping founders turn ideas into products.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">My startup execution is backed by enterprise experience across banking, payroll, AI products, financial services, and SaaS systems.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CalendlyButton label="Book a Discovery Call" className="w-full sm:w-auto" />
            <CalendlyButton label="Discuss Your MVP" variant="secondary" className="w-full sm:w-auto" />
            <Link href="/projects" className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4A373]/20 bg-[#FEFAE0] px-5 py-3 text-sm font-medium text-[#111827] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FAEDCD]/45 hover:shadow-lg active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none sm:w-auto">View Projects</Link>
          </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-5 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none md:rounded-[2rem] md:p-6">
          <p className="text-sm font-medium text-[#8A5A2B]">Why founders choose me</p>
          <h2 className="font-display mt-2 max-w-3xl text-[clamp(2.2rem,10vw,3.5rem)] font-black uppercase leading-[0.96] text-[#111827] md:text-5xl">Many founders don’t need a CTO on day one.</h2>
          <p className="mt-4 max-w-3xl text-base text-slate-600">They need someone who can help shape the product, make technical decisions, build quickly, and create a foundation that can scale. That’s where I help.</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-5 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none md:rounded-[2rem] md:p-6">
          <p className="text-sm font-medium text-[#8A5A2B]">Enterprise-backed startup execution</p>
          <h2 className="font-heading mt-2 text-2xl font-semibold text-[#111827]">My startup experience is backed by enterprise experience.</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">This combination helps founders avoid common technical mistakes while still moving quickly toward launch.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {enterpriseBackedExperience.map((item) => (
              <span key={item} className="rounded-full border border-[#D4A373]/10 bg-[#FAEDCD]/35 px-3 py-2 text-sm text-slate-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#D4A373]/20 hover:shadow-sm motion-reduce:transform-none">✓ {item}</span>
            ))}
          </div>
          </section>
        </Reveal>

        <Section title="Why founders work with me" eyebrow="Technical partner, not task taker">
          <CardGrid items={reasons} />
        </Section>

        <Section title="Where I Add Value" eyebrow="Outcomes over tooling">
          <CardGrid items={services} />
        </Section>

        <Reveal>
          <section className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-5 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none md:rounded-[2rem] md:p-6">
            <p className="text-sm font-medium text-[#8A5A2B]">Ideal founders</p>
            <h2 className="font-heading mt-2 text-2xl font-semibold text-[#111827]">I work best with</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {idealFounders.map((item) => <span key={item} className="rounded-full border border-[#D4A373]/10 bg-[#FAEDCD]/35 px-3 py-1 text-sm text-slate-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#D4A373]/20 hover:shadow-sm motion-reduce:transform-none">{item}</span>)}
            </div>
          </div>
          <div id="founder-perspective" className="scroll-mt-28 rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-5 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none md:rounded-[2rem] md:p-6">
            <p className="text-sm font-medium text-[#8A5A2B]">Founder Perspective</p>
            <div className="mt-5 rounded-[1.5rem] border border-[#D4A373]/10 bg-gradient-to-br from-[#FAEDCD]/55 via-[#FEFAE0] to-[#FEFAE0] p-6 shadow-inner shadow-[#D4A373]/5">
              <div className="flex flex-col gap-3 border-b border-[#D4A373]/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A5A2B]">Upbeater founder recommendation</p>
                  <h2 className="font-heading mt-3 text-2xl font-semibold text-[#111827]">Petra Sundell</h2>
                  <p className="text-sm text-slate-600">CEO & Co-Founder, Upbeater.com</p>
                </div>
                <span className="rounded-full bg-[#FAEDCD] px-3 py-1 text-xs font-semibold text-[#8A5A2B]">Founder signal</span>
              </div>

              <blockquote className="mt-5 space-y-4 text-base leading-7 text-slate-700">
                <p>
                  “I worked with Sarmad during the early stages of building Upbeater, our Human-AI Workforce Platform. He was the <span className="rounded-full bg-[#FAEDCD] px-2 py-0.5 font-semibold text-[#8A5A2B]">first engineer to touch the product</span>, and his ability to <span className="rounded-full bg-[#FAEDCD] px-2 py-0.5 font-semibold text-[#8A5A2B]">take a vague brief and quickly turn it into something working</span> has been invaluable. Sarmad is not only able to code what’s needed, he also has a <span className="rounded-full bg-[#FAEDCD] px-2 py-0.5 font-semibold text-[#8A5A2B]">genuine product thinking</span> which is exactly what an early-stage startup needs.
                </p>
                <p>
                  In addition, Sarmad brought a calm, collaborative energy to the team and cared about the product, not just his tasks. He asks good questions, pushes back thoughtfully, and has a real instinct for what matters at zero-to-one stage.
                </p>
                <p>
                  Ultimately, he’s bringing more to a team than most contractors I've worked with, making him a <span className="rounded-full bg-[#FAEDCD] px-2 py-0.5 font-semibold text-[#8A5A2B]">great founding engineer</span>. I'd recommend him to any early-stage founder who needs someone who can <span className="rounded-full bg-[#FAEDCD] px-2 py-0.5 font-semibold text-[#8A5A2B]">go from idea to shipped feature</span> and actually cares about what they're building.”
                </p>
              </blockquote>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CalendlyButton label="Book a Discovery Call" className="w-full sm:w-auto" />
              <CalendlyButton label="Let's Talk Product" variant="subtle" className="w-full sm:w-auto" />
            </div>
          </div>
          </section>
        </Reveal>

        <Section title="How I help from idea to scale" eyebrow="Startup journey">
          <StaggerGroup className="grid gap-3 md:grid-cols-3">
            {journey.map(([stage, detail]) => (
              <StaggerItem key={stage}>
                <article className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-md motion-reduce:transform-none"><p className="font-semibold text-[#111827]">{stage}</p><p className="mt-2 text-base leading-7 text-slate-600">{detail}</p></article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Section>

        <Section title="Founder-oriented case studies" eyebrow="Business challenge → product execution">
          <StaggerGroup className="grid gap-4 md:grid-cols-3">
            {caseStudies.map(([name, detail]) => (
              <StaggerItem key={name}>
                <article className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-md motion-reduce:transform-none"><p className="font-semibold text-[#111827]">{name}</p><p className="mt-2 text-base leading-7 text-slate-600">{detail}</p></article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Section>
      </div>
    </SiteShell>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <Reveal><section className="rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-5 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none md:rounded-[2rem] md:p-6"><p className="text-sm font-medium text-[#8A5A2B]">{eyebrow}</p><h2 className="font-heading mt-2 mb-5 text-[clamp(1.5rem,6vw,1.75rem)] font-semibold leading-tight text-[#111827] md:text-2xl">{title}</h2>{children}</section></Reveal>;
}

function CardGrid({ items }: { items: string[][] }) {
  return <StaggerGroup className="grid gap-3 md:grid-cols-3">{items.map(([title, detail]) => <StaggerItem key={title}><article className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-md motion-reduce:transform-none"><p className="font-semibold text-[#111827]">{title}</p><p className="mt-2 text-base leading-7 text-slate-600">{detail}</p></article></StaggerItem>)}</StaggerGroup>;
}
