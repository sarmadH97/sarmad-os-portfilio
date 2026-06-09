import { Check } from "lucide-react";
import Link from "next/link";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { AchievementsWindow } from "@/components/projects/achievements-window";
import { SkillsWindow } from "@/components/projects/skills-window";
import { IndustriesSection } from "@/components/projects/industries-section";
import { SiteShell } from "./site-shell";
import { RESUME_URL } from "@/lib/links";
import { HeroProfile } from "./hero-profile";

const upbeaterContributions = [
  "Product Architecture",
  "Frontend Engineering",
  "Backend Integration",
  "AI Workflow Planning",
  "Founder Collaboration",
];

const productGroups = [
  {
    category: "Startup Products",
    products: [["Upbeater", "AI-native startup SaaS product built from early-stage product direction to execution."]],
  },
  {
    category: "Enterprise Products",
    products: [
      ["Global Net Banking Platform", "Customer-facing digital banking systems for a leading financial institution in Pakistan."],
      ["Atlas HXM", "Enterprise payroll and workforce management platform serving complex HR operations."],
      ["Procurement Sciences", "AI-powered government procurement workflows for contract discovery and automation."],
    ],
  },
  {
    category: "Financial & Business Platforms",
    products: [
      ["Al Fardan Exchange", "Financial services workflows supporting currency exchange operations across the Middle East."],
      ["ExpenseLinx", "Expense management and operational workflow platform."],
    ],
  },
];

const trustSignals = [
  "Global Net Banking Platform",
  "Atlas HXM Payroll Platform",
  "Procurement Sciences AI Platform",
  "Al Fardan Exchange",
  "Upbeater Founding Engineer",
];

export function DesktopShell() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl space-y-8 px-4 pb-20 pt-[4.5rem]">
        <section className="relative overflow-visible rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 px-4 py-4 shadow-xl shadow-[#D4A373]/10 backdrop-blur-2xl md:px-5 md:py-4">
          <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,2.15fr)_minmax(16rem,0.7fr)]">
            <div className="relative z-10 lg:pr-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8A5A2B]">Sarmad Hussain · Senior Software Engineer | Product Engineer</p>
              <h1 className="font-display mt-1.5 max-w-4xl text-4xl font-black uppercase leading-[1] text-[#111827] sm:text-[2.8rem] md:text-5xl lg:text-[3.25rem]">
                Turning product ideas into scalable software and AI-enabled workflows.
              </h1>
              <p className="mt-2.5 max-w-3xl text-[19px] leading-8 text-slate-600">
                From global banking and payroll systems to startup MVPs and AI products, I help founders and teams build software that scales.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <CalendlyButton label="Book a Discovery Call" />
                <Link href="/projects" className="rounded-full border border-[#D4A373]/20 bg-[#FEFAE0] px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#FAEDCD]/45">View Projects</Link>
              </div>
            </div>
            <HeroProfile />
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <Metric value="5x" label="Techlogix Achiever of the Month" />
          <Metric value="#1" label="Techlogix AI Hackathon Winner" />
          <Metric value="10+" label="Products Built From Start to Finish" />
        </section>

        <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl">
          <p className="font-heading text-2xl font-semibold text-[#111827]">Enterprise Experience. Startup Execution.</p>
          <div className="mt-4 grid gap-2 md:grid-cols-5">
            {trustSignals.map((signal) => (
              <p key={signal} className="flex items-center gap-2 rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/35 px-3 py-3 text-sm font-medium text-slate-700">
                <Check className="h-4 w-4 shrink-0 text-[#8A5A2B]" aria-hidden="true" />
                {signal}
              </p>
            ))}
          </div>
        </section>

        <IndustriesSection compact />

        <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-6 shadow-xl shadow-[#D4A373]/10 backdrop-blur-xl md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8A5A2B]">Featured case study</p>
              <h2 className="font-heading mt-3 text-3xl font-semibold text-[#111827]">Upbeater</h2>
              <p className="mt-2 text-lg text-[#8A5A2B]">AI-native SaaS platform built from scratch</p>
              <div className="mt-4 space-y-2 text-base leading-7 text-slate-600">
                <p><span className="font-semibold text-[#111827]">Role:</span> Founding Engineer</p>
                <p><span className="font-semibold text-[#111827]">Stack:</span> React · .NET · AI Integrations · Workflow Automation</p>
              </div>
              <a href="https://www.upbeater.com/" target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full border border-[#D4A373]/20 bg-[#FEFAE0] px-4 py-2 text-sm font-medium text-[#111827] transition hover:bg-[#FAEDCD]/45">Visit Upbeater ↗</a>
            </div>
            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <ImpactMetric value="10+" label="Product modules and workflows shaped" />
                <ImpactMetric value="AI" label="Workflow integration and automation planning" />
                <ImpactMetric value="MVP" label="Built from scratch with scalable foundations" />
                <ImpactMetric value="Founder-led" label="Product architecture and roadmap collaboration" />
              </div>
              <p className="text-base leading-7 text-slate-600">
                Worked closely with Upbeater's founders to turn early product ideas into a scalable technical foundation, covering frontend architecture, backend integration, AI workflow planning, and production-ready product execution.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {upbeaterContributions.map((item) => (
                  <p key={item} className="flex items-center gap-2 rounded-2xl bg-[#FEFAE0] px-3 py-2 text-[15px] leading-6 text-slate-700">
                    <Check className="h-4 w-4 text-[#8A5A2B]" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl">
          <p className="text-sm font-medium text-[#8A5A2B]">Why Founders Work With Me</p>
          <h2 className="font-heading mt-2 text-2xl font-semibold text-[#111827]">Enterprise engineering experience. Startup execution. AI-powered product development.</h2>
          <p className="mt-2.5 max-w-3xl text-base leading-7 text-slate-600">I help founders and product teams move from ideas and requirements to production-ready systems without unnecessary complexity. My focus is shipping practical solutions that create business value.</p>
        </section>

        <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-[#8A5A2B]">Products I've Helped Build</p>
              <h2 className="font-heading text-2xl font-semibold text-[#111827]">Startup, enterprise, and business platforms.</h2>
            </div>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 hover:text-[#111827]">Download Resume ↗</a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {productGroups.map((group) => (
              <article key={group.category} className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#8A5A2B]">{group.category}</p>
                <div className="mt-4 space-y-4">
                  {group.products.map(([name, detail]) => (
                    <div key={name}>
                      <p className="font-semibold text-[#111827]">{name}</p>
                      <p className="mt-1 text-base leading-7 text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#8A5A2B]">Product-building proof</p>
              <h2 className="font-heading text-2xl font-semibold text-[#111827]">Selected wins from shipping real systems</h2>
            </div>
            <Link href="/experience" className="hidden text-sm font-medium text-slate-600 hover:text-[#111827] md:block">See experience →</Link>
          </div>
          <AchievementsWindow />
        </section>

        <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-[#8A5A2B]">Founder-focused delivery</p>
              <h2 className="font-heading text-2xl font-semibold text-[#111827]">From idea to launch, with product and architecture working together.</h2>
            </div>
            <CalendlyButton label="Let's Talk Product" variant="secondary" />
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl">
          <div className="mb-5">
            <p className="text-sm font-medium text-[#8A5A2B]">Capability map</p>
            <h2 className="font-heading text-2xl font-semibold text-[#111827]">Capabilities for building and scaling products</h2>
          </div>
          <SkillsWindow />
        </section>
      </div>
    </SiteShell>
  );
}

function ImpactMetric({ value, label }: { value: string; label: string }) {
  return (
    <article className="rounded-2xl border border-[#D4A373]/10 bg-[#FEFAE0] p-4 shadow-sm">
      <p className="font-display text-3xl font-black text-[#8A5A2B]">{value}</p>
      <p className="mt-2 text-base leading-7 text-slate-600">{label}</p>
    </article>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <article className="min-h-40 rounded-3xl border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-xl">
      <p className="font-display text-5xl font-black text-[#111827]">{value}</p>
      <p className="mt-4 max-w-[15rem] text-base leading-7 text-slate-600">{label}</p>
    </article>
  );
}
