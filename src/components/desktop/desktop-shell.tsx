import Link from "next/link";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { AchievementsWindow } from "@/components/projects/achievements-window";
import { SkillsWindow } from "@/components/projects/skills-window";
import { SiteShell } from "./site-shell";
import { HeroProfile } from "./hero-profile";

export function DesktopShell() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl space-y-8 px-4 pb-20 pt-28">
        <section className="relative overflow-visible rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-8 shadow-xl shadow-[#013E37]/10 backdrop-blur-2xl md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
            <div className="relative z-10">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#013E37]">Sarmad Hussain · Founder Engineer</p>
              <h1 className="font-display mt-4 max-w-5xl text-4xl font-black uppercase text-[#111827] sm:text-5xl md:text-6xl">
                Building scalable SaaS products and AI workflows for startup teams.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-600">
                I partner with founders and product teams to shape MVPs, build polished user experiences, and create technical foundations ready for real users.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CalendlyButton label="Book a Discovery Call" />
                <CalendlyButton label="Discuss Your MVP" variant="secondary" />
                <Link href="/projects" className="rounded-full border border-[#013E37]/20 bg-white px-5 py-3 text-sm font-medium text-[#111827]">View projects</Link>
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
