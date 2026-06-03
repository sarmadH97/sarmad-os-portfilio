import Link from "next/link";
import { AchievementsWindow } from "@/components/projects/achievements-window";
import { SkillsWindow } from "@/components/projects/skills-window";
import { SiteShell } from "./site-shell";

export function DesktopShell() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 pt-28">
        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-8 shadow-xl shadow-[#013E37]/10 backdrop-blur-2xl md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#013E37]">Sarmad Hussain · Founder Engineer</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#111827] md:text-6xl">
            Scalable SaaS, AI workflows, and product engineering for ambitious teams.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Frontend-heavy full stack engineer helping founders move from idea to production with clean architecture, modern UX, and deployment-ready systems.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/work-with-founders" className="rounded-full bg-[#013E37] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#013E37]/25">Work with me</Link>
            <Link href="/projects" className="rounded-full border border-[#013E37]/20 bg-white px-5 py-3 text-sm font-medium text-[#111827]">View projects</Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Metric value="5x" label="Techlogix Achiever of the Month" />
          <Metric value="#1" label="Techlogix AI Hackathon winner" />
          <Metric value="100+" label=".NET services migrated to REST APIs" />
        </section>

        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/85 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#013E37]">Proof of execution</p>
              <h2 className="text-2xl font-semibold text-[#111827]">Selected engineering wins</h2>
            </div>
            <Link href="/experience" className="hidden text-sm font-medium text-slate-600 hover:text-[#111827] md:block">See experience →</Link>
          </div>
          <AchievementsWindow />
        </section>

        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/85 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-[#013E37]">Founder-focused delivery</p>
              <h2 className="text-2xl font-semibold text-[#111827]">From idea to launch, with product and architecture working together.</h2>
            </div>
            <Link href="/work-with-founders" className="rounded-full border border-[#013E37]/20 bg-white px-5 py-3 text-sm font-medium text-[#111827]">Explore founder support</Link>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/85 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
          <div className="mb-5">
            <p className="text-sm font-medium text-[#013E37]">Capability map</p>
            <h2 className="text-2xl font-semibold text-[#111827]">Built for SaaS velocity</h2>
          </div>
          <SkillsWindow />
        </section>
      </div>
    </SiteShell>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <article className="rounded-3xl border border-[#013E37]/10 bg-white/85 p-5 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
      <p className="text-3xl font-semibold text-[#111827]">{value}</p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </article>
  );
}
