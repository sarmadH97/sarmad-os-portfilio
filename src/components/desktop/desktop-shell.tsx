import { Check } from "lucide-react";
import Link from "next/link";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/motion";
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
      ["Global Digital Banking Platform", "Enterprise banking systems focused on secure customer experiences, reliability, and large-scale financial operations."],
      ["Global Payroll & Workforce Management Platform", "Enterprise payroll and workforce management systems serving complex HR operations across multiple regions."],
      ["AI-Powered Government Procurement Platform", "AI-assisted procurement workflows for government contracting teams."],
    ],
  },
  {
    category: "Financial & Business Platforms",
    products: [
      ["Middle East Financial Services Platform", "Customer-facing digital experiences for a large regional financial services and currency exchange organization."],
      ["ExpenseLinx", "Expense management and operational workflow platform."],
    ],
  },
];

const trustSignals = [
  "Global Digital Banking Platform",
  "Global Payroll & Workforce Platform",
  "AI-Powered Government Procurement Platform",
  "Middle East Financial Services Platform",
  "Upbeater Founding Engineer",
];

export function DesktopShell() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl space-y-8 px-4 pb-20 pt-[4.5rem]">
        <Reveal>
          <section className="relative overflow-visible rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 px-4 py-4 shadow-xl shadow-[#D4A373]/10 backdrop-blur-2xl transition-all duration-200 ease-out hover:border-[#D4A373]/20 hover:shadow-2xl md:px-5 md:py-4">
            <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_16.25rem]">
              <div className="relative z-10 lg:pr-1">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8A5A2B]">
                  Sarmad Hussain · Senior Software Engineer | Product Engineer
                </p>
                <h1 className="font-display mt-1.5 max-w-none text-4xl font-black uppercase leading-[1] text-[#111827] sm:text-[2.8rem] md:text-5xl lg:text-[3.25rem]">
                  Turning product ideas into scalable software and AI-enabled workflows.
                </h1>
                <p className="mt-2.5 max-w-3xl text-[19px] leading-8 text-slate-600">
                  From global banking and payroll systems to startup MVPs and AI products, I help founders and teams build software that scales.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <CalendlyButton label="Book a Discovery Call" />
                  <Link
                    href="/projects"
                    className="rounded-full border border-[#D4A373]/20 bg-[#FEFAE0] px-5 py-3 text-sm font-medium text-[#111827] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FAEDCD]/45 hover:shadow-lg active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
              <HeroProfile />
            </div>
          </section>
        </Reveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-3">
          <StaggerItem>
            <Metric value="5x" label="Techlogix Achiever of the Month" />
          </StaggerItem>
          <StaggerItem>
            <Metric value="10+" label="Products Built From Start to Finish" />
          </StaggerItem>
          <StaggerItem>
            <Metric value="150+" label="Frontend Features Delivered" />
          </StaggerItem>
        </StaggerGroup>

        <Reveal>
          <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none">
            <p className="font-heading text-2xl font-semibold text-[#111827]">Enterprise Experience. Startup Execution.</p>
            <StaggerGroup className="mt-4 grid gap-2 md:grid-cols-5">
              {trustSignals.map((signal) => (
                <StaggerItem key={signal}>
                  <p className="flex items-center gap-2 rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/35 px-3 py-3 text-sm font-medium text-slate-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#D4A373]/20 hover:shadow-sm motion-reduce:transform-none">
                    <Check className="h-4 w-4 shrink-0 text-[#8A5A2B]" aria-hidden="true" />
                    {signal}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        </Reveal>



        <Reveal>
          <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FEFAE0]/90 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none">
            <div className="grid gap-5 md:grid-cols-[0.28fr_1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8A5A2B]">Upbeater</p>
                <p className="mt-1 text-xs font-medium text-slate-500">Founder recommendation</p>
              </div>
              <blockquote className="text-lg leading-8 text-[#111827]">
                “Sarmad was the first engineer to touch Upbeater, and his ability to take a vague brief and quickly turn it into something working has been invaluable.”
              </blockquote>
              <div className="md:text-right">
                <p className="font-heading text-base font-semibold text-[#111827]">Petra Sundell</p>
                <p className="text-sm text-slate-600">CEO & Co-Founder, Upbeater</p>
                <Link href="/work-with-founders#founder-perspective" className="mt-3 inline-flex text-sm font-semibold text-[#8A5A2B] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#111827] motion-reduce:transform-none">
                  Read founder recommendation →
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <IndustriesSection compact />
        </Reveal>

        <Reveal>
          <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-6 shadow-xl shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-2xl motion-reduce:transform-none md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8A5A2B]">Featured case study</p>
                <h2 className="font-heading mt-3 text-3xl font-semibold text-[#111827]">Upbeater</h2>
                <p className="mt-2 text-lg text-[#8A5A2B]">AI-native SaaS platform built from scratch</p>
                <div className="mt-4 space-y-2 text-base leading-7 text-slate-600">
                  <p>
                    <span className="font-semibold text-[#111827]">Role:</span> Founding Engineer
                  </p>
                  <p>
                    <span className="font-semibold text-[#111827]">Stack:</span> React · .NET · AI Integrations · Workflow Automation
                  </p>
                </div>
                <a
                  href="https://upbeater.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full border border-[#D4A373]/20 bg-[#FEFAE0] px-4 py-2 text-sm font-medium text-[#111827] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FAEDCD]/45 hover:shadow-lg active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none"
                >
                  Visit Upbeater ↗
                </a>
              </div>
              <div className="space-y-5">
                <StaggerGroup className="grid gap-3 sm:grid-cols-2">
                  <StaggerItem>
                    <ImpactMetric value="10+" label="Product modules and workflows shaped" />
                  </StaggerItem>
                  <StaggerItem>
                    <ImpactMetric value="AI" label="Workflow integration and automation planning" />
                  </StaggerItem>
                  <StaggerItem>
                    <ImpactMetric value="MVP" label="Built from scratch with scalable foundations" />
                  </StaggerItem>
                  <StaggerItem>
                    <ImpactMetric value="Founder-led" label="Product architecture and roadmap collaboration" />
                  </StaggerItem>
                </StaggerGroup>
                <p className="text-base leading-7 text-slate-600">
                  Worked closely with Upbeater's founders to turn early product ideas into a scalable technical foundation, covering frontend architecture, backend integration, AI workflow planning, and production-ready product execution.
                </p>
                <StaggerGroup className="grid gap-2 sm:grid-cols-2">
                  {upbeaterContributions.map((item) => (
                    <StaggerItem key={item}>
                      <p className="flex items-center gap-2 rounded-2xl bg-[#FEFAE0] px-3 py-2 text-[15px] leading-6 text-slate-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm motion-reduce:transform-none">
                        <Check className="h-4 w-4 text-[#8A5A2B]" aria-hidden="true" />
                        {item}
                      </p>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none">
            <p className="text-sm font-medium text-[#8A5A2B]">Why Founders Work With Me</p>
            <h2 className="font-heading mt-2 text-2xl font-semibold text-[#111827]">
              Enterprise engineering experience. Startup execution. AI-powered product development.
            </h2>
            <p className="mt-2.5 max-w-3xl text-base leading-7 text-slate-600">
              I help founders and product teams move from ideas and requirements to production-ready systems without unnecessary complexity. My focus is shipping practical solutions that create business value.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none">
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium text-[#8A5A2B]">Products I've Helped Build</p>
                <h2 className="font-heading text-2xl font-semibold text-[#111827]">Startup, enterprise, and business platforms.</h2>
              </div>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#111827] active:translate-y-0 motion-reduce:transform-none"
              >
                Download Resume ↗
              </a>
            </div>
            <StaggerGroup className="grid gap-4 md:grid-cols-3">
              {productGroups.map((group) => (
                <StaggerItem key={group.category}>
                  <article className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-lg motion-reduce:transform-none">
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
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#8A5A2B]">Product-building proof</p>
                <h2 className="font-heading text-2xl font-semibold text-[#111827]">Selected wins from shipping real systems</h2>
              </div>
              <Link
                href="/experience"
                className="hidden text-sm font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#111827] active:translate-y-0 motion-reduce:transform-none md:block"
              >
                See experience →
              </Link>
            </div>
            <AchievementsWindow />
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-[#8A5A2B]">Founder-focused delivery</p>
                <h2 className="font-heading text-2xl font-semibold text-[#111827]">
                  From idea to launch, with product and architecture working together.
                </h2>
              </div>
              <CalendlyButton label="Let's Talk Product" variant="secondary" />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/75 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none">
            <div className="mb-5">
              <p className="text-sm font-medium text-[#8A5A2B]">Capability map</p>
              <h2 className="font-heading text-2xl font-semibold text-[#111827]">Capabilities for building and scaling products</h2>
            </div>
            <SkillsWindow />
          </section>
        </Reveal>
      </div>
    </SiteShell>
  );
}

function ImpactMetric({ value, label }: { value: string; label: string }) {
  return (
    <article className="rounded-2xl border border-[#D4A373]/10 bg-[#FEFAE0] p-4 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-lg motion-reduce:transform-none">
      <p className="font-display text-3xl font-black text-[#8A5A2B]">{value}</p>
      <p className="mt-2 text-base leading-7 text-slate-600">{label}</p>
    </article>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <article className="min-h-40 rounded-3xl border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-2xl motion-reduce:transform-none">
      <p className="font-display text-5xl font-black text-[#111827]">{value}</p>
      <p className="mt-4 max-w-[15rem] text-base leading-7 text-slate-600">{label}</p>
    </article>
  );
}
