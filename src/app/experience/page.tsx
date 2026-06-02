import { SiteShell } from "@/components/desktop/site-shell";
import { AchievementsWindow } from "@/components/projects/achievements-window";
import { ExperienceWindow } from "@/components/projects/experience-window";
import { SkillsWindow } from "@/components/projects/skills-window";

export default function ExperiencePage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 pt-28">
        <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-600">Experience</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950">Enterprise systems, AI delivery, and product engineering growth.</h1>
        </section>
        <AchievementsWindow />
        <ExperienceWindow />
        <SkillsWindow />
      </div>
    </SiteShell>
  );
}
