import Link from "next/link";
import { AchievementsWindow } from "@/components/projects/achievements-window";
import { SkillsWindow } from "@/components/projects/skills-window";
import { SiteShell } from "./site-shell";

export function DesktopShell() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 pt-28">
        <section className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur-2xl md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-600">Sarmad Hussain · Founder Engineer</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Scalable SaaS, AI workflows, and product engineering for ambitious teams.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Frontend-heavy full stack engineer helping founders move from idea to production with clean architecture, modern UX, and deployment-ready systems.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/work-with-founders" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-slate-300/80">Work with me</Link>
            <Link href="/projects" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900">View projects</Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Metric value="5x" label="Techlogix Achiever of the Month" />
          <Metric value="#1" label="Techlogix AI Hackathon winner" />
          <Metric value="100+" label=".NET services migrated to REST APIs" />
        </section>

        <section className="rounded-[2rem] border border-slate-200/80 bg-white/75 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-sky-600">Proof of execution</p>
              <h2 className="text-2xl font-semibold text-slate-950">Selected engineering wins</h2>
            </div>
            <Link href="/experience" className="hidden text-sm font-medium text-slate-600 hover:text-slate-950 md:block">See experience →</Link>
          </div>
          <AchievementsWindow />
        </section>

        <section className="rounded-[2rem] border border-slate-200/80 bg-white/75 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-sky-600">Founder-focused delivery</p>
              <h2 className="text-2xl font-semibold text-slate-950">From idea to launch, with product and architecture working together.</h2>
            </div>
            <Link href="/work-with-founders" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900">Explore founder support</Link>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200/80 bg-white/75 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl">
          <div className="mb-5">
            <p className="text-sm font-medium text-sky-600">Capability map</p>
            <h2 className="text-2xl font-semibold text-slate-950">Built for SaaS velocity</h2>
          </div>
          <SkillsWindow />
        </section>
      </div>
    </SiteShell>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <article className="rounded-3xl border border-slate-200/80 bg-white/75 p-5 shadow-lg shadow-slate-200/50 backdrop-blur-xl">
      <p className="text-3xl font-semibold text-slate-950">{value}</p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </article>
  );
}
