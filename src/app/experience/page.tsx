import { SiteShell } from "@/components/desktop/site-shell";
import { AchievementsWindow } from "@/components/projects/achievements-window";
import { ExperienceWindow } from "@/components/projects/experience-window";
import { SkillsWindow } from "@/components/projects/skills-window";
import { IndustriesSection } from "@/components/projects/industries-section";

export default function ExperiencePage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl space-y-8 px-4 pb-20 pt-28">
        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-8 shadow-xl shadow-[#013E37]/10 backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#013E37]">Experience</p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl font-black uppercase text-[#111827]">Enterprise systems, AI delivery, and product engineering growth.</h1>
        </section>
        <AchievementsWindow />
        <IndustriesSection />
        <ExperienceWindow />
        <SkillsWindow />
      </div>
    </SiteShell>
  );
}
