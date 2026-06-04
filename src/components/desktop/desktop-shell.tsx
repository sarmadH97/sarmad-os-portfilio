import { Check } from "lucide-react";
import Link from "next/link";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { AchievementsWindow } from "@/components/projects/achievements-window";
import { SkillsWindow } from "@/components/projects/skills-window";
import { SiteShell } from "./site-shell";
import { RESUME_URL } from "@/lib/links";
import { HeroProfile } from "./hero-profile";

const upbeaterContributions = [
  "Founding Engineer",
  "Product Architecture",
  "Frontend Engineering",
  "AI Workflow Planning",
  "Technical Roadmapping",
  "Founder Collaboration",
];

const productGroups = [
  {
    category: "Startup Products",
    products: [["Upbeater", "AI-native platform for content, marketing, and sales workflows."]],
  },
  {
    category: "Enterprise Products",
    products: [
      ["Atlas HXM", "Enterprise HR and workforce management platform."],
      ["Global Payroll Platform", "Large-scale payroll and workforce operations systems."],
    ],
  },
  {
    category: "Business Platforms",
    products: [["ExpenseLinx", "Expense management and operational workflow platform."]],
  },
];

export function DesktopShell() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl space-y-8 px-4 pb-20 pt-28">
        <section className="relative overflow-visible rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-8 shadow-xl shadow-[#013E37]/10 backdrop-blur-2xl md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.9fr)_minmax(20rem,0.8fr)]">
            <div className="relative z-10 lg:pr-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#013E37]">Sarmad Hussain · Founder Engineer</p>
              <h1 className="font-display mt-4 max-w-6xl text-5xl font-black uppercase text-[#111827] sm:text-6xl md:text-7xl">
                Turning startup ideas into scalable SaaS products and AI-enabled workflows.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                I partner with founders and product teams to shape MVPs, build polished user experiences, and create technical foundations ready for real users.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CalendlyButton label="Book a Discovery Call" />
                <Link href="/projects" className="rounded-full border border-[#013E37]/20 bg-white px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#F3E7BE]/45">View Projects</Link>
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

        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-6 shadow-xl shadow-[#013E37]/10 backdrop-blur-xl md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#013E37]">Featured case study</p>
              <h2 className="font-heading mt-3 text-3xl font-semibold text-[#111827]">Upbeater</h2>
              <p className="mt-2 text-lg text-[#013E37]">Helping build an AI-native platform from idea to execution</p>
              <a href="https://www.upbeater.com/" target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full border border-[#013E37]/20 bg-white px-4 py-2 text-sm font-medium text-[#111827] transition hover:bg-[#F3E7BE]/45">Visit Upbeater ↗</a>
            </div>
            <div className="space-y-5 text-sm leading-6 text-slate-600">
              <p><span className="font-semibold text-[#111827]">Challenge:</span> Upbeater set out to create an AI-native platform that helps businesses automate content creation, marketing workflows, and customer engagement. The challenge was building a product foundation that could move quickly while remaining flexible enough for future AI capabilities.</p>
              <p><span className="font-semibold text-[#111827]">Approach:</span> As a Founding Engineer, I worked closely with the founders to translate product ideas into scalable technical solutions, from architecture discussions and frontend system design to onboarding experiences, AI workflow planning, and product execution strategy.</p>
              <p><span className="font-semibold text-[#111827]">Outcome:</span> Delivered a production-ready foundation that accelerated feature delivery, improved onboarding experiences, and established a scalable architecture for future growth.</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {upbeaterContributions.map((item) => (
                  <p key={item} className="flex items-center gap-2 rounded-2xl bg-[#FAFAF7] px-3 py-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-[#013E37]" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/85 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
          <p className="text-sm font-medium text-[#013E37]">Why Founders Work With Me</p>
          <h2 className="font-heading mt-2 text-2xl font-semibold text-[#111827]">I understand both product and engineering.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">I help founders move from ideas and requirements to production-ready systems without unnecessary complexity. My focus is shipping practical solutions that create business value.</p>
        </section>

        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/85 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-[#013E37]">Products I've Helped Build</p>
              <h2 className="font-heading text-2xl font-semibold text-[#111827]">Startup, enterprise, and business platforms.</h2>
            </div>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 hover:text-[#111827]">Download Resume ↗</a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {productGroups.map((group) => (
              <article key={group.category} className="rounded-2xl border border-[#013E37]/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#013E37]">{group.category}</p>
                <div className="mt-4 space-y-4">
                  {group.products.map(([name, detail]) => (
                    <div key={name}>
                      <p className="font-semibold text-[#111827]">{name}</p>
                      <p className="mt-1 text-sm leading-5 text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/85 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#013E37]">Product-building proof</p>
              <h2 className="font-heading text-2xl font-semibold text-[#111827]">Selected wins from shipping real systems</h2>
            </div>
            <Link href="/experience" className="hidden text-sm font-medium text-slate-600 hover:text-[#111827] md:block">See experience →</Link>
          </div>
          <AchievementsWindow />
        </section>

        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/85 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-[#013E37]">Founder-focused delivery</p>
              <h2 className="font-heading text-2xl font-semibold text-[#111827]">From idea to launch, with product and architecture working together.</h2>
            </div>
            <CalendlyButton label="Let's Talk Product" variant="secondary" />
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/85 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
          <div className="mb-5">
            <p className="text-sm font-medium text-[#013E37]">Capability map</p>
            <h2 className="font-heading text-2xl font-semibold text-[#111827]">Capabilities for building and scaling products</h2>
          </div>
          <SkillsWindow />
        </section>
      </div>
    </SiteShell>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <article className="min-h-40 rounded-3xl border border-[#013E37]/10 bg-white/90 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-xl">
      <p className="font-display text-5xl font-black text-[#111827]">{value}</p>
      <p className="mt-4 max-w-[15rem] text-sm leading-6 text-slate-600">{label}</p>
    </article>
  );
}
