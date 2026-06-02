import { SiteShell } from "@/components/desktop/site-shell";
import { FounderEngineeringWindow } from "@/components/projects/founder-engineering-window";

export default function FounderEngineeringPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-28">
        <div className="mb-8 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-600">Founder Engineering</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950">Technical partnership for startup teams moving from idea to production.</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Focused engineering support for MVPs, AI workflows, scalable UX, and deployment-ready SaaS foundations.</p>
        </div>
        <FounderEngineeringWindow />
      </section>
    </SiteShell>
  );
}
